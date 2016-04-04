// generating random scaling
var randomScalingFactor = function(){ return Math.round(Math.random()*2500)};



var lineChartData = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      label: "Traffic chart",
      fillColor : "rgba(226, 227, 246, .6)",
      strokeColor : "#7377bf",
      pointColor : "#fff",
      pointStrokeColor : "#4d4c72",
      pointHighlightFill : "#4d4c72",
      pointHighlightStroke : "#fff",
     
      data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
     }
  ]

};

var barChartData = {
  labels : ["M","T","W","T","F","S","S"],
  datasets : [
    {
      label: "Daily traffic chart",
      fillColor : "rgba(226, 227, 246, .6)",
      strokeColor : "#7377bf",
      pointColor : "#fff",
      pointStrokeColor : "#4d4c72",
      pointHighlightFill : "#4d4c72",
      pointHighlightStroke : "#fff",
     
      data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
     }
  ]

};

window.onload = function(){
  
  Chart.defaults.global.responsive = true;

  Chart.defaults.global.scaleOverride= true;
  Chart.defaults.global.scaleSteps= 5;
  // Chart.defaults.global.scaleStepWidth= 500;
  Chart.defaults.global.scaleStartValue= 0;
  
  // Tooltip style
  Chart.defaults.global.tooltipFillColor= "#7377bf";
  Chart.defaults.global.tooltipFontFamily= "Lato, sans-serif";
  Chart.defaults.global.tooltipFontSize= 14;
  Chart.defaults.global.tooltipFontStyle= "normal";
  Chart.defaults.global.tooltipFontColor= "#fff";

  var lineTrafficChart = document.getElementById("trafficChart").getContext("2d");
  var barDailyTraffic = document.getElementById("dailyTraffic").getContext("2d");
  var lineChartOptions = { 
    // Points style
     pointDotRadius : 5,
     pointDotStrokeWidth : 2,
     bezierCurve: false,
    // scale steps
    scaleStepWidth: 500
  }

  barChartOptions = {
    scaleStepWidth: 50
  }

  window.myLine = new Chart(lineTrafficChart).Line(lineChartData, lineChartOptions);
  window.myBar = new Chart(barDailyTraffic).Bar(barChartData, barChartOptions)

};


