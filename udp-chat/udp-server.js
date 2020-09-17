const dgram = require("dgram");
const server = dgram.createSocket("udp4");
const readline = require("readline");

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

server.on("message", (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
});

server.on("listening", () => {
  const address = server.address();
  console.log(`server listening ${address.address}:${address.port}`);
});

io.addListener("line", (line) => {
  server.send(line, 8080, "0.0.0.0");
});

server.bind(8081);
