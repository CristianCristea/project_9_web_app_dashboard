// generating random scaling
var randomScalingFactor = function(){ return Math.round(Math.random()*2500)};
var randomScalingFactor250 = function(){ return Math.round(Math.random()*250)};

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
      label: "Daily traffic chart mobile",
      fillColor : "#7377bf",
      strokeColor : "#7377bf",
      highlightFill: "#FFC870",
      data : [randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250()]
     },
    {
      label: "Daily traffic chart desktop",
      fillColor : "#81c98f",
      strokeColor : "#81c98f",
      highlightFill: "#FFC870",
      data : [randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250(),randomScalingFactor250()]
    }
  ]

};

var doughnutChartData = [
    {
      value: 100,
      color:"#81c98f",
      highlight: "#FF5A5E",
      label: "Tablets"
    },
    {
      value: 50,
      color: "#74b1bf",
      highlight: "#5AD3D1",
      label: "Phones"
    },
    {
      value: 300,
      color: "#7377bf",
      highlight: "#FFC870",
      label: "Desktop"
    },
    {
      value: 10,
      color: "#dfdfdf",
      highlight: "#FFC870",
      label: "Other"
    }
];

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
  var mobileUsers = document.getElementById("mobileUsers").getContext("2d");
  
  var lineChartOptions = {
    // Points style
     pointDotRadius: 5,
     pointDotStrokeWidth: 2,
     bezierCurve: false,
    // scale steps
    scaleStepWidth: 500
  };

  var barChartOptions = {
    scaleStepWidth: 50,
    barDatasetSpacing : 80,
    barValueSpacing : 30,
    barShowStroke : false,
  };

  var doughnutChartOptions = {
    animateScale : false
  };

  window.lineTrafficChart = new Chart(lineTrafficChart).Line(lineChartData, lineChartOptions);
  window.barDailyTraffic = new Chart(barDailyTraffic).Bar(barChartData, barChartOptions);
  window.mobileUsers = new Chart(mobileUsers).Doughnut(doughnutChartData, doughnutChartOptions);
};

$(document).ready(function() {

  // toggle main nav on small screens
  $('#menu').click(function() {
    $(this).parent().siblings('aside').toggleClass('active-nav');
    $('main').toggleClass('active-main');
  });

  // alert dropdown menu
  $('#alert-bell').click(function(e){
    e.preventDefault();
    $('#alert-menu, #msg-number').fadeToggle('slow', 'linear');
  });

  // display alert one
  $('#alert-menu').find('#alert-one').click(function(e){
    e.preventDefault();
    $('#alert-msg-one').fadeToggle('slow', 'linear');
    $('.traffic-chart .block-heading').toggleClass('p-t-1');
  });
  // display alert two
  $('#alert-menu').find('#alert-two').click(function(e){
    e.preventDefault();
    $('#alert-msg-two').fadeToggle('slow', 'linear');
    $('.traffic-chart .block-heading').toggleClass('p-t-1');
  });

  // close alert box
  $('.close').click(function(e) {
    e.preventDefault();
    $(this).parent().fadeOut('slow', 'linear');
  });

});