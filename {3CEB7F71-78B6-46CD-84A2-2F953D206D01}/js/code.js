// Custom Web Control code

//const { Console } = require("console");

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
  // var L2_L3 = WebCC.Properties.L2_L3;
  // var L3_L1 = WebCC.Properties.L3_L1;

   //define data array
    var tabledata = [
       {id:1, name:"Prova 1", progress:L1_L2, gender:"male", rating:1, col:"red", dob:"19/02/1984", car:1},
       {id:2, name:"Prova 2", progress:400.2, gender:"female", rating:2, col:"blue", dob:"14/05/1982", car:true},
       {id:3, name:"Prova 3", progress:42, gender:"female", rating:0, col:"green", dob:"22/05/1982", car:"true"},
       {id:4, name:"Prova 4", progress:100, gender:"male", rating:1, col:"orange", dob:"01/08/1980"},
       {id:5, name:"Prova 5", progress:16, gender:"female", rating:5, col:"yellow", dob:"31/01/1999"},
       {id:6, name:"Prova 6", progress:38, gender:"male", rating:4, col:"red", dob:"12/05/1966", car:1},
    ];

    //initialize table
    var table = new Tabulator("#example-table", {
    data:tabledata, //assign data to table
    autoColumns:true, //create columns from data field names
    });

}


// Callback for WinCC data change
function setProperty(data) {
  console.log('setProperty callback')
  switch (data.key) {
    case "L1_L2":
      if (data.value) {
        
        createTable();
      }
      
      break;
  }
}


////////////////////////////////////////////
// Initialize the custom control (without a successful initialization, the CWC will remain empty. Make sure to include the webcc.min.js script!)
WebCC.start(
  function ( result ) {
      if ( result ) {

        // Design 
        if (WebCC.isDesignMode) {

          createTable();
          console.log('design mode');
          
        }
        else {
          console.log('connected successfully');
          // Set current values when CWC shows up
          setProperty({ key: 'L1_L2', value: WebCC.Properties.L1_L2 });
          
          createTable();
          
          
          // Subscribe for future value changes WinCC tags
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
        L1_L2: 0.0
        
      }
    },
    // extensions
    [],
    // timeout
    10000
   );


