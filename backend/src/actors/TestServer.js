
var express = require('express')


class TestServer
  {
    initialize(selfActor)
      {
      this.selfActor = selfActor;
      selfActor.getLog().info("Actor initialize [" + selfActor + "]");

      this.server = express();

      selfActor.getLog().info(selfActor + " initialized Express");
      return selfActor;
      }
  setup(port)
    {
    elfActor.getLog().info(selfActor + " - Setting up Express Routes");
    this.server.get('/', function (req, res)
        {
          res.send('hello world')
        })
    selfActor.getLog().info(selfActor + " - Listening on port " + port);
      this.server.listen(port);
    }

   displayStartupInfo()
    {

    }
  }



  module.exports = TestServer
