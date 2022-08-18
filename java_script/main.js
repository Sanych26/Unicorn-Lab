$(function() {
  ////////////////////////////////////////////////////////////////////////////Bio//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $(".view-btn").on("click", function() {
    $(".back-slide").show();
    $(".back-slider").show();
  });
  $(".esc-slider").on("click", function() {
    $(".back-slide").hide();
    $(".back-slider").hide();
  });
  ////////////////////////////////////////////////////////////////////////////More//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $(".more-btn").on("click", function() {
    $(".more-btn").hide();
    $(".more-slider2").show();
  });
  $(".hide-btn").on("click", function() {
    $(".more-slider2").hide();
    $(".more-btn").show();
  });
  ////////////////////////////////////////////////////////////////////////////navicon//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  $(".navicon").on("click", function() {
    $(".menu").show();
    $(".menu").show();
  });
  $(".esc-nav").on("click", function() {
    $(".menu").hide();
    $(".menu").hide();
  });
  /*  $(document).mouseup(function (e) {
      var container = $(".menu");
      if (container.has(e.target).length === 0){
          container.hide();
      }
  });*/


  //slider
  if ($("#investors").length) {
    tns({
      container: '#investors',
      items: 3,
      slideBy: "page",
      autoplay: true,
      nav: true,
      navContainer: "#navInvest",
      navPosition: "bottom",
      navAsThumbnails: true,
      touch: true,
      controls: true,
      controlsText: ["", ""],
      autoplayTimeout: 7000,
      autoplayButtonOutput: false,
    });
  }
  if ($("#investors-mob").length) {
    tns({
      container: '#investors-mob',
      items: 1,
      slideBy: "page",
      autoplay: true,
      nav: true,
      navContainer: "#navInvestMob",
      navPosition: "bottom",
      navAsThumbnails: true,
      touch: true,
      controls: true,
      controlsText: ["", ""],
      autoplayTimeout: 7000,
      autoplayButtonOutput: false,
    });
  }
  if ($("#startup").length) {
    tns({
      container: '#startup',
      items: 3,
      slideBy: "page",
      autoplay: true,
      nav: true,
      navContainer: "#navStartup",
      navPosition: "bottom",
      navAsThumbnails: true,
      touch: true,
      controls: true,
      controlsText: ["", ""],
      autoplayTimeout: 8000,
      autoplayButtonOutput: false,
    });
  }
  if ($("#startup-mob").length) {
    tns({
      container: '#startup-mob',
      items: 1,
      slideBy: "page",
      autoplay: true,
      nav: true,
      navContainer: "#navStartupMob",
      navPosition: "bottom",
      navAsThumbnails: true,
      touch: true,
      controls: true,
      controlsText: ["", ""],
      autoplayTimeout: 8000,
      autoplayButtonOutput: false,
    });
  }
  if ($("#fund").length) {
    tns({
      container: '#fund',
      items: 3,
      slideBy: "page",
      autoplay: true,
      nav: true,
      navContainer: "#navFund",
      navPosition: "bottom",
      navAsThumbnails: true,
      touch: true,
      controls: true,
      controlsText: ["", ""],
      autoplayTimeout: 9000,
      autoplayButtonOutput: false,
    });
  }
  if ($("#fund-mob").length) {
    tns({
      container: '#fund-mob',
      items: 1,
      slideBy: "page",
      autoplay: true,
      nav: true,
      navContainer: "#navFundMob",
      navPosition: "bottom",
      navAsThumbnails: true,
      touch: true,
      controls: true,
      controlsText: ["", ""],
      autoplayTimeout: 9000,
      autoplayButtonOutput: false,
    });
  }
  if ($("#back-slider").length) {
    tns({
      container: '#back-slider',
      items: 1,
      slideBy: 1,
      autoplay: false,
      nav: false,
      navAsThumbnails: false,
      touch: true,
      controls: true,
      controlsText: ["", ""],
      autoplayButtonOutput: false,
    });
  }
  if ($("#testimonial").length) {
    tns({
      container: '#testimonial',
      items: 1,
      slideBy: 1,
      autoplay: false,
      nav: true,
      navContainer: ".navContainer",
      navAsThumbnails: true,
      touch: true,
      controls: true,
      controlsText: ["", ""],
      autoplayButtonOutput: false,
    });
  }
  if ($("#testimonial-mob").length) {
    tns({
      container: '#testimonial-mob',
      items: 1,
      slideBy: 1,
      autoplay: false,
      nav: true,
      navContainer: "#navTestimonialMob",
      navAsThumbnails: true,
      touch: true,
      controls: true,
      controlsText: ["", ""],
      autoplayButtonOutput: false,
    });
  }
});
