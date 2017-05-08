
jQuery(document).ready(function() {
var aa = jQuery("#navscroll");
jQuery(window).scroll(function() {
if( jQuery(this).scrollTop() >  420 ) {
aa.addClass("sticky");
} else {
aa.removeClass("sticky");
}
});
});
