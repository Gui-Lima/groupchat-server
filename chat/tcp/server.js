const net = require("net");
const User = require("./user.js");
const connected = [];

const handleConnection = (socket) => {
  const currentClient = new User("");
  console.log("this a new connection");
  connected.push(socket);

  socket.on("data", (data) => {
    if (currentClient.nMsgs === 0) {
      currentClient.nickname = data.toString();
      console.log("Hi, %s", currentClient.nickname);
    } else {
      connected.forEach((connection) => {
        connection.write(currentClient.nickname + ":" + data.toString());
      });
    }

    currentClient.nMsgs++;
    currentClient.msgLog.push(data.toString());
  });

  socket.on("error", (err) => {
    console.log("Connection %s error: %s", socket.remoteAddress, err.message);
  });
};

const server = net.createServer(handleConnection);
server.listen(3000, "localhost");
