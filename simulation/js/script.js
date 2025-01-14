let xValue = [];
let yValue = [];
let operationValue = [];

let size = 0;
var i

//Input of Slider 1
function xSlider() {
  let xval = document.getElementById("inputvalx").value;
  document.getElementById("outputvalx").innerHTML = xval;
}

//Input for Slider 2
function ySlider() {
  let yval = document.getElementById("inputvaly").value;
  document.getElementById("slidervaly").innerHTML = yval;
}

function addValue() {
  // document.getElementById('readin').innerHTML = "";
  xValue = []
  yValue = []
  var myTab = document.getElementById('readin');

  // LOOP THROUGH EACH ROW OF THE TABLE AFTER HEADER.
  for (i = 1; i < myTab.rows.length; i++) {

    // GET THE CELLS COLLECTION OF THE CURRENT ROW.
    var objCells = myTab.rows.item(i).cells;

    // LOOP THROUGH EACH CELL OF THE CURRENT ROW TO READ CELL VALUES.


    xValue.push(objCells.item(0).innerHTML);

    yValue.push(objCells.item(1).innerHTML);
  }


  //Now call function to add rows


}




function makePlot() {





  addValue()
  if (xValue.length <= 19 || yValue.length <= 19) {
    Swal.fire({
      backdrop:false,
     target: '#rom',
     position:'center',
     width:'480px',
      customClass: {
        container: 'position-absolute',
        popup:"swal2-popup"
      },
      html:'First take down all the values for Clockwise and Anticlockwise direction and then click on <b style="color:blue;">Plot</b> button.',     
      icon:'info',
      });

    return false
  }


  else if (size < xValue.length) {

    document.getElementById("print").disabled = false;
    let c = [];

    for (let i = 0; i < xValue.length; i++) {
      c.push(i)
    }
    document.getElementById("exp").style.opacity = "0"
    document.getElementById("exp").style.display = "none"
    document.getElementById("graph").style.opacity = "1"
    document.getElementById("graph").style.display = "block"

    var data = [

      {
        type: "scatterpolar",
        mode: "lines+markers",
        r: [-14.81, -15.56, -18.33, -24.35, -26.85, -22.41, -18.33, -14.81, -24.35, -30.37, -29.54, -23.93, -14.66, -18.11, -22.07, -26.29, -23.93, -18.11, -15.41, -14.66],
        theta: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360],
        line: {
          color: "#ff66ab"
        },
        marker: {
          color: "#8090c7",
          symbol: "square",
          size: 8
        },
        subplot: "polar2"
      }
    ]

    var layout = {
      title: "Radiation Pattern of Horn Antenna",
      font: {
        size: 15
      },
      showlegend: false,

      polar2: {


        radialaxis: {
          tickfont: {
            size: 8
          }
        },
        angularaxis: {
          tickfont: {
            size: 8
          }
        }
      }
    }
    config={
      "displaylogo": false,
      
  },
    Plotly.newPlot('myDiv', data, layout,config)
  }
}
function close1() {
  document.getElementById("exp").style.opacity = "1",
    document.getElementById("exp").style.display = "block",
    document.getElementById("graph").style.opacity = "0",
    document.getElementById("graph").style.display = "none"

}