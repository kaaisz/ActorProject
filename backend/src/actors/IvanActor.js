


class IvanActor
  {
  initialize(selfActor)
    {
    this.selfActor = selfActor;
    console.log("Created Actor:" + selfActor);
    return selfActor;
    }

  setup(data)
    {
    this.selfActor.getLog().info("Actor setup for [" + this.selfActor.name + "] with data " + data);
    }

  displayStartupInfo()
    {
    console.log("DisplaySTartupInfo for ivan actor")
    }
  }






module.exports = IvanActor
