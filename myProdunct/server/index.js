const http = require("http");
const fs = require("fs");
function getUsers() {
  const data = fs.readFileSync("users.json");
  return JSON.parse(data);
}
function saveUsers(users) {
  fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
}
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200);
    res.end(JSON.stringify(getUsers()));
  }

  else if (req.method === "POST" && req.url === "/createuser") {
    let body = "";
    req.on("data", chunk => { body += chunk.toString(); });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      let users = getUsers();
      users.push(newUser);
      saveUsers(users);
      res.writeHead(201);
      res.end(JSON.stringify({ message: "User added!", users }));
    });
  }

  else if (req.method === "DELETE" && req.url.startsWith("/deleteuser/")) {
    const id = parseInt(req.url.split("/")[2]);
    let users = getUsers();
    users = users.filter(user => user.id !== id);
    saveUsers(users);
    res.writeHead(200);
    res.end(JSON.stringify({ message: "User deleted!", users }));
  }

  else {
    res.writeHead(404);
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});