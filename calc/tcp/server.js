const net = require("net");

const parse = (data) => {
  let n1 = parseInt(data.split(" ")[0]);
  let op = data.split(" ")[1];
  let n2 = parseInt(data.split(" ")[2]);
  switch (op) {
    case "+":
      return n1 + n2;
    case "*":
      return n1 * n2;
    case "/":
      return n1 / n2;
    case "-":
      return n1 - n2;
    default:
      return "undefined operation";
  }
};

const handleConnection = (socket) => {
  socket.write(
    "This is a calculator, write your expression on the console, in the format exp1 operator exp2"
  );
  socket.on("data", (data) => {
    result = parse(data.toString());
    socket.write(result.toString());
  });

  socket.on("error", (err) => {
    console.log("Connection %s error: %s", socket.remoteAddress, err.message);
  });
};

const server = net.createServer(handleConnection);
server.listen(3000, "localhost");
