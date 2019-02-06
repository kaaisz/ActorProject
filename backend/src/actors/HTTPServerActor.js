




class HTTPServerActor
{
  initialize(selfActor)
    {
    this.selfActor = selfActor;
    this.selfActor.getLog().info("Actor initialize [" + selfActor + "]");

    this.server = express();


    selfActor.getLog().info(selfActor + " initialized Express");
    return selfActor;
    }
setup(port)
  {
  this.selfActor.getLog().info(this.selfActor + " - Setting up Express Routes");


  this.server.use('/', express.static(path.join(__dirname, 'public')))






  this.selfActor.getLog().info(this.selfActor + " - Listening on port " + port);
    this.server.listen(port);
  }

 displayStartupInfo()
  {

  }
}


  module.exports = HTTPServerActor
