### Quais as principais diferenças entre TCP e UDP?

A conexão não é especificamente aberta e mantida(em outras palavras, não é guardado um estado da conexão)

### Quais as principais diferenças entre a implementação TCP e UDP (tanto do chat como da calculadora)?

Enquanto em TCP temos sempre a conexão disponível uma vez estabelecida, no UDP estamos apenas utilizando da porta toda vez que queremos enviar algo

### Quais as principais dificuldades nas implementações UDP?

O servidor não mantendo estados do(s) cliente(s) fica limitado a enviar mensagens quando elas chegam para ele ou tendo o número de ip dos clientes fixos.

### Quando faz sentido usar TCP ou UDP?

TCP em conexões que precisam de estabilidade mas não necessariamente de uma velocidade extrema mas com confiança em ordem de chegada e garantia de entrega, enquanto UDP quando você quer enviar dados que não tem tanto problema se perderem ou serem fora de ordem, com um fluxo grande, como por exemplo em streaming.
