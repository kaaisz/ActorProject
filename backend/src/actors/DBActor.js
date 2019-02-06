


class DBActor
  {
    initialize(selfActor)
    {
      this.selfActor = selfActor;

      this.selfActor.getLog().info("Actor initialize [" + selfActor + "]");

      return this.selfActor;
    }

    setup(data)
      {
        this.selfActor.getLog().info(this.selfActor + " - Setting up Database");
      }

   displayStartupInfo()
    {
      this.selfActor.getLog().info(this.selfActor + " - Connection should be established");
    }
  }



  module.exports = DBActor
