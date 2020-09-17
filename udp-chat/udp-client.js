const dgram = require("dgram");
const client = dgram.createSocket("udp4");
const readline = require("readline");

const io = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.on("message", (msg) => {
    console.log(`server: ${msg}`);
});

io.addListener("line", (line) => {
    client.send(line, 8081, "0.0.0.0");
});


client.bind(8080);