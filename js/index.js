// function changeColor() {
//     let colorCode = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
//
//     document.getElementById("occupation").style.color = colorCode;
// }
// setInterval(changeColor, 1000);


function changeColorOfSvg() {
    let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    $(".svg").css("stroke", color)
    $(".svg").css("fill", color)
    // document.getElementsByClassName("svg")[2].style.stroke = color
}
setInterval(changeColorOfSvg, 3000);



$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()>0){
            $(".scroll").css({"opacity":"0"})
        } else {
            $(".scroll").css({"opacity":"1"})
        }
    })
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > ($("#skills").offset().top - $(this).height())) {
            // alert("Got to skills section")
            // console.log(`scrollTop: ${$(this).scrollTop()}, skills.OffsetTop: ${$("#skills").offset().top}`)
        }
    })
});

jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
});

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled",$(this).scrollTop() > $nav.height());
    });
});
