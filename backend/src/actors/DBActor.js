const CsvDb = require('csv-db');

class DBActor
  {
    initialize(selfActor)
    {
      this.selfActor = selfActor;

      this.selfActor.getLog().info("Actor initialize [" + selfActor + "]");
      this.csvDb = new CsvDb('./database/db.csv', ['id', 'username', 'password']);

      return this.selfActor;
    }

    setup(csvFile)
      {
        this.selfActor.getLog().info(this.selfActor + " - Setting up Database");


        this.csvDb.get().then((data) =>
          {
          var aLine = "";
          this.selfActor.getLog().warn("SENSITIVE DATA");
          for (var i = 1; i < data.length-1; i++)
            {
              aLine = "";
              for(var key in data[0])
                  {
                  var value = data[i][key];
                  aLine = aLine + " - " + value;
                  }
            this.selfActor.getLog().info(aLine);
            }
          })
      }

   displayStartupInfo()
    {
      this.selfActor.getLog().info(this.selfActor + " - Connection should be established");
    }
  }


  module.exports = DBActor
