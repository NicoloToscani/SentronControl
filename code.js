// Custom Web Control code

// Change measures tab
function openMeasures(measuresTab) {
    var i;
    var x = document.getElementsByClassName("measures");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(measuresTab).style.display = "block";  
  }