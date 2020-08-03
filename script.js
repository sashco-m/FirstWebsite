$(document).on('scroll', function() {
/*	$("#slide").css("top", Math.max(80 - 0.2*window.scrollY, 0) + "px");
  	$("#slide2").css("top", Math.max(180 - 0.2*window.scrollY, 0) + "px");*/
  $("#link1").css("opacity", Math.max(0.7 - 0.0028*window.scrollY, 0));
  $("#link2").css("opacity", Math.max(1.1 - 0.0028*window.scrollY, 0));
  $("#link3").css("opacity", Math.max(1.5 - 0.0028*window.scrollY, 0));
  $("#link4").css("opacity", Math.max(2.0 - 0.0028*window.scrollY, 0));
  $("#link5").css("opacity", Math.max(2.4 - 0.0028*window.scrollY, 0));
  $("#link6").css("opacity", Math.max(2.9 - 0.0028*window.scrollY, 0));
  $("#link7").css("opacity", Math.max(3.3 - 0.0028*window.scrollY, 0));
  $("#link8").css("opacity", Math.max(4 - 0.0028*window.scrollY, 0));
})