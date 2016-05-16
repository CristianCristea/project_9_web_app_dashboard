// generating random scaling
var randomScalingFactor = function() { return Math.round(Math.random() * 2500);};
var randomScalingFactor250 = function() { return Math.round(Math.random() * 250);};

var lineMonthlyChartData = {
  labels : ["January", "February", "March", "April", "May", "June", "July"],
  datasets : [
    {
      label: "Monthly traffic chart",
      fillColor : "rgba(226, 227, 246, .6)",
      strokeColor : "#7377bf",
      pointColor : "#fff",
      pointStrokeColor : "#4d4c72",
      pointHighlightFill : "#4d4c72",
      pointHighlightStroke : "#fff",
      data : [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
     }
  ]

};

var barChartData = {
  labels : ["S", "M", "T", "W", "T", "F", "S"],
  datasets : [
    {
      label: "Daily traffic chart mobile",
      fillColor : "#7377bf",
      strokeColor : "#7377bf",
      highlightFill: "#FFC870",
      data : [randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250()]
     },
    {
      label: "Daily traffic chart desktop",
      fillColor : "#81c98f",
      strokeColor : "#81c98f",
      highlightFill: "#FFC870",
      data : [randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250(), randomScalingFactor250()]
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
  scaleBeginAtZero : true,
  scaleStepWidth: 50,
  barDatasetSpacing : 1,
  barValueSpacing : 3,
  barShowStroke : false
};

var doughnutChartOptions = {
  animateScale : false
};

window.onload = function(){
  window.lineTrafficChart = new Chart(lineTrafficChart).Line(lineMonthlyChartData, lineChartOptions);
  window.barDailyTraffic = new Chart(barDailyTraffic).Bar(barChartData, barChartOptions);
  window.mobileUsers = new Chart(mobileUsers).Doughnut(doughnutChartData, doughnutChartOptions);

  // generate traffic chart random point values
  var generateTrafficChartValues = function(pointsArray) {
    for (var i = pointsArray.length - 1; i >= 0; i--) {
      pointsArray[i].value = randomScalingFactor();
    }
    lineTrafficChart.update();
  };

  // change values on click event
  $('#hourly').click(function(e) {
    e.preventDefault();
    generateTrafficChartValues(lineTrafficChart.datasets[0].points);
  });

  $('#daily').click(function(e) {
    e.preventDefault();
    generateTrafficChartValues(lineTrafficChart.datasets[0].points);
  });

  $('#weekly').click(function(e) {
    e.preventDefault();
    generateTrafficChartValues(lineTrafficChart.datasets[0].points);
  });

  $('#monthly').click(function(e) {
    e.preventDefault();
    generateTrafficChartValues(lineTrafficChart.datasets[0].points);
  });

};

$(document).ready(function() {
  // traffic chart menu active link
  // args - parent ul id, link class
  function toggleActiveMenuLink(idUlString, classLinkString) {
    var $linksSelector = $('#' + idUlString).find('.' + classLinkString); 
    $linksSelector.click(function(e) {
      e.preventDefault();
      $linksSelector.removeClass('active');
      $(this).addClass('active');
    });
  }

  toggleActiveMenuLink('traffic-menu', 'traffic-menu-link');

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

  // message user widget

  // typehead.js
  var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;

      // an array that will be populated with substring matches
      matches = [];

      // regex used to determine if a string contains the substring `q`
      substrRegex = new RegExp(q, 'i');

      // iterate through the pool of strings and for any string that
      // contains the substring `q`, add it to the `matches` array
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });

      cb(matches);
    };
  };

  var users = ['Sauro Sauro', 'Rem Rem', 'Rva Giselle', 'Allison Grace'];

  $('#autocomplete .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'users',
    source: substringMatcher(users)
  });

  // modal box
  $('input[type="submit"]').click(function(e) {


    // check user input
    var $modalContent = $('#modal .content');
    var $formUsernameValue = $('#username').val();
    var $formMessageValue  = $('#message').val();

    if (!$formUsernameValue && !$formMessageValue) {
      $modalContent.text('Please enter a username and a message!');
    } else {
      $modalContent.text('Your message was sent.');   
    }

    // Cancel the link behavior
    e.preventDefault();
    // Get the input tag
    var id = $(this).attr('name');

    // Get the window height and width
    var winH = $(window).height();
    var winW = $(window).width();

    // Set the popup window to center
    $(id).css('top', winH/2-$(id).height()/2);
    $(id).css('left', winW/2-$(id).width()/2);

    //transition effect
    $(id).fadeIn(400);
  });

  // close button modal
  $('.modalwindow .close').click(function (e) {
      //Cancel the link behavior
      e.preventDefault();
      $('.modalwindow').fadeOut(400);
  });


});