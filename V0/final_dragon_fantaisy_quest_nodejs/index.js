const app = require('./routes/index');
const port = 3000;

startServer()

function startServer() {
  app.listen(port, () => {
    console.info(`Example app listening on port ${port}`)
  })
}
