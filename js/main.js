jQuery(document).ready(function(){
  jQuery('.bxslider').bxSlider({
  	controls: false,  
  });

jQuery(".tab").hide();
jQuery(".slide.s1").addClass("active");
jQuery(".tab.tab1").addClass("active").show();

jQuery("li.slide").click(function(){
	jQuery(".slide").removeClass("active");
	jQuery(this).addClass("active");
	var tab = jQuery(this).attr("tab");
	jQuery(".tab").removeClass("active").hide();
	jQuery(".tab."+tab).addClass("active").show("slow");
});

});