// Custom Web Control code

// let L1_L2 = document.getElementById('L1-L2');



// Change measures tab
function openMeasures(measuresTab) { 
          var i;
          var x = document.getElementsByClassName("measures");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          document.getElementById(measuresTab).style.display = "block";       
  }

function updateMeasures() {
          L1_L2.textContent = '398.66';

          // Canvas drawing
          var c = document.getElementById("canvas");
          var ctx = c.getContext("2d");
          ctx.font = "30px Arial";
          ctx.fillText("Hello World",10,50);
        }


function createTable(){

   // Variables definition
  var L1_L2 = WebCC.Properties.L1_L2;
  var L2_L3 = WebCC.Properties.L2_L3;
  var L3_L1 = WebCC.Properties.L3_L1;

   //define data array
    var tabledata = [
       {id:1, name:"Oli Bob", progress:L1_L2, gender:"male", rating:1, col:"red", dob:"19/02/1984", car:1},
       {id:2, name:"Mary May", progress:1, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true},
       {id:3, name:"Christine Lobowski", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true"},
       {id:4, name:"Brendon Philips", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980"},
       {id:5, name:"Margret Marmajuke", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999"},
       {id:6, name:"Frank Harbours", progress:38, gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1},
    ];

    //initialize table
    var table = new Tabulator("#example-table", {
    data:tabledata, //assign data to table
    autoColumns:true, //create columns from data field names
    });

}


////////////////////////////////////////////
// Initialize the custom control
WebCC.start(
  function ( result ) {
      if ( result ) {

        // Design 
        if (WebCC.isDesignMode) {
          
        }
        else {
          console.log('connected successfully');
          // Set current values when CWC shows up
          // setProperty({ key: "TableDataString", value: WebCC.Properties.TableDataString });
          createTable();
          
          
          // Subscribe for future value changes
          WebCC.onPropertyChanged.subscribe(setProperty);
        }

      }
      else
      {

        console.log("connection failed");
        createTable();
        
      }
      
    },
    
    // contract
    {
      methods: {
      },
      //Events
      events: {
      },
      //Properties
      //////////
      properties: {
      }
    },
    // extensions
    [],
    // timeout
    10000
   );


