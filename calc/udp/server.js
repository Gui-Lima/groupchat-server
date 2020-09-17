const dgram = require("dgram");
const server = dgram.createSocket("udp4");

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

server.on("message", (msg, rinfo) => {
  server.send(parse(msg.toString()).toString(), rinfo.port, rinfo.address);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(8081);
