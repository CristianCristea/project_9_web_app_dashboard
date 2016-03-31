
var randomScalingFactor = function(){ return Math.round(Math.random()*2500)};
var lineChartData = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      label: "My First dataset",
      fillColor : "rgba(226, 227, 246, .6)",
      strokeColor : "#7377bf",
      pointColor : "#fff",
      pointStrokeColor : "#4d4c72",
      pointHighlightFill : "#4d4c72",
      pointHighlightStroke : "#fff",
      data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
     }//,
    // {
    //   label: "My Second dataset",
    //   fillColor : "rgba(151,187,205,0.2)",
    //   strokeColor : "rgba(151,187,205,1)",
    //   pointColor : "rgba(151,187,205,1)",
    //   pointStrokeColor : "#fff",
    //   pointHighlightFill : "#fff",
    //   pointHighlightStroke : "rgba(151,187,205,1)",
    //   data : [randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor(),randomScalingFactor()]
    // }
  ]

};

window.onload = function(){
  var ctx = document.getElementById("myChart").getContext("2d");
  window.myLine = new Chart(ctx).Line(lineChartData, {
    responsive: true,
    // adjusting scale
    scaleOverride: true,
    scaleSteps: 5,
    scaleStepWidth: 500,
    scaleStartValue: 0,
    bezierCurve: false,
    // Tooltip style
    tooltipFillColor: "#7377bf",
    tooltipFontFamily: "Lato, sans-serif",
    tooltipFontSize: 14,
    tooltipFontStyle: "normal",
    tooltipFontColor: "#fff",
    // Points style
     pointDotRadius : 5,
     pointDotStrokeWidth : 2

  });
};


