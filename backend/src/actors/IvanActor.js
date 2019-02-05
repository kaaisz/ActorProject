


class IvanActor
  {
  constructor()
    {
    console.log("Ivan")
    }

  initialize(selfActor)
    {
    this.selfActor = selfActor;
    console.log("Created Actor:" + selfActor);
    }

  setup(data)
    {
    console.log("Data"+ data)
    }

  displayStartupInfo()
    {
    console.log("DisplaySTartupInfo for ivan actor")
    }
  }






module.exports = IvanActor
