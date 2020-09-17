## Simple socket console groupchat

### Instructions

To run, simply run server with `node server.js` , each client with `node client.js` and begin chatting.

### Questionamentos

#### Quais as principais dificuldades?

Documentação da lib net e contéudo na internet majoritariamente sobre socket.io.

#### Quais as principais diferenças entre a implementação da questão 1 e da questão 2?

O servidor deve guardar o estado das conexões.

#### Como gerenciar as conexões entre clientes na questão 2?

O servidor deve ter uma lista dos clientes conectados e uma identificação para cada.

#### Como identificar as mensagens e os remetentes para seguir a formatação do exemplo?

Por meio de algum tipo de ip, nickname ou guardando o próprio objeto de socket e usando seus atributos.
