const net = require("net");
const readline = require("readline");

const client = new net.Socket();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

client.connect(3000, "localhost", () => {
  console.log("conectou");
  console.log("digit your nickname:");
  rl.addListener("line", (line) => {
    client.write(line);
  });

  client.on("data", (data) => {
    console.log(data.toString());
  });
});
