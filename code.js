// Custom Web Control code

let L1_L2 = document.getElementById('L1-L2');

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
        }


