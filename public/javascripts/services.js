//
// (function($) {
//     $(document).ready(function(){
//         $(window).scroll(function(){
//             if ($(this).scrollTop() > 200) {
//                 $('.navscroll').fadeIn(500);
//             } else {
//                 $('.navscroll').fadeOut(500);
//             }
//         });
//     });
// })(jQuery);
jQuery(document).ready(function() {
var aa = jQuery("#navscroll");
jQuery(window).scroll(function() {
//adjust the number to fit distance from the top of page to the section
if( jQuery(this).scrollTop() >  320 ) {
aa.addClass("sticky");
} else {
aa.removeClass("sticky");
}
});
});
