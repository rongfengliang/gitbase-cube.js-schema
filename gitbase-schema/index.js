const CubejsServer = require('./node_modules/@cubejs-backend/server');

const server = new CubejsServer();

server.listen().then(({ port }) => {
  console.log(`🚀 Cube.js server is listening on ${port}`);
});
