const cluster = require('cluster');
const numCPUs = require('os').cpus().length
const express = require('express')
const app = express();
const port = 3000;
const process = require('process');

if (cluster.isMaster) {
  console.log(`Primary ${process.pid} is running`);
  console.log('2222222222222', 2222222222);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    console.log('forked');
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  console.log('111111111', 111111111);
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  app.get('/infinite-loop', (req, res) => {
    while (true) {
      let x;
    }
    res.send('infinite-loop!')
  });

  app.get('/test', (req, res) => res.send('Hello World!'));

  app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
}