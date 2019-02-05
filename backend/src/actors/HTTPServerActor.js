




class HTTPServerActor
  {
    // our constuctor is called each time a new instance of our class is created
  	  initialize(selfActor)
  			{
  			this.selfActor = selfActor;

  			selfActor.getLog().info("Actor initialize [" + selfActor + "]");
  			return 	this.selfActor;
  			}

        setup(activePort)
    			{
    				this.selfActor.getLog().info("Actor setup for [" + this.selfActor.name + "] on port " + activePort);
      		}

          displayStartupInfo()
        		{
        		// here we will use 'process' to retrieve some useful information about our environment
        		// See https://nodejs.org/api/process.html - to see what else you can do with nodejs's 'process'

        		// this indicates which 'nodejs' installation is running our application
        		this.selfActor.getLog().info("Node Path: " + process.argv[0]);
          }
  }

  module.exports = HTTPServerActor
