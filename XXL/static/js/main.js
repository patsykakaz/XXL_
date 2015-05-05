

$(document).ready(function(){
    // HABILLAGE
        if($('#pubLayer').length){
            $('#navBorder').css('margin-bottom', '0');
            $('.container').addClass('shadowForContainer');
        }
    // ./HABILLAGE
    place_static_elements();
});

$(window).load(function(){
    boxImageSizing();
    placement_habillage();
    place_shifting_elements();
    adapt_form_width();
    toggle_navbar_form();
    layer_revue_wrapper_sizing()
    layer_revue_hover();
});
$(window).resize(function(){
    placement_habillage();
    boxImageSizing();
    place_shifting_elements();
    deploiment_contentNav();
    adapt_form_width();
    layer_revue_wrapper_sizing()
});
$(document).scroll(function(){
    place_shifting_elements();
    deploiment_contentNav();
});




function place_static_elements(){
    if($('#pubLayer').length){
        $('body').css('background-color', 'white');
        $('#main').addClass('pubOn');
    }else{
        $('#main').addClass('pubOff');
    }
    // Padding automatique selon la taille du logo
    $('#logo_deploy').css('padding-top', (56-$('#logo_deploy').height())/2);
}

function place_shifting_elements(){
    // positionnement du logo pour la deployNav
    $('#logo_deploy').css('left', ($(window).width()-$('#main').outerWidth())/2-$('#logo_deploy').outerWidth());
    ajustement_pubRow_mobile();
}

// Resizing box images
function boxImageSizing(){
    $('.box').each(function(){
        layer = $(this).children('.layer-img');
        illustration = layer.children('a').children('.illustration');
        illustration.css('right', (illustration.width()-layer.width())/2).css('bottom', (illustration.height()-layer.height())/2);
    });
}

// Placement HABILLAGE
function placement_habillage(){
    if($('#pubLayer').length){
        target = $('#pubLayer');
        ratioBG = 970/1870;
        // if($(window).width()<970){
        mainWidth = $('#main').outerWidth();
        windowWidth = $(window).width();
        target.css('background-size', (mainWidth/windowWidth)/ratioBG*100+'%');
        // }
        if($(window).width()<970){
            $('#main').css('margin-top', ($('#main').outerWidth()/970)*150+'px');
        }else{
            $('#main').css('margin-top', '150px');
        }
        if($(window).width()<992){
            $('#pubRow .box:first').css('margin-top', '15px');
        }
    }else{
        // $('#pubRow .box:first').css('margin-top', '0');
    }
}
// ./Placement HABILLAGE

function adapt_form_width(){
    target = $('#contentNav .form-group .form-control');
    button = $('#contentNav .btn');
    if($(window).width()>=768 && $('.smallbox').length){
        target.css('width', $('.smallbox:first').outerWidth()-button.outerWidth()-5);
    }else{
        target.css('width', '');
    }
}


// Deploiment contentNav
function deploiment_contentNav(){
    nav = $('#contentNav');
    logo = $('#logo_deploy');
    // Point de déploiment de la navBar secondaire
    trigger = $('#contentNav_layer').offset().top + $('#contentNav_layer').outerHeight();
    if($(document).scrollTop() >= trigger){
        nav.addClass('deployNav');
        setTimeout(function(){
            nav.css('top', '0');
            if($(window).width()-$('#main').outerWidth() >= 200){
                logo.addClass('on');
            }
        },200);
        nav.children('.container-fluid').css('width', $('#main').outerWidth());
    }else if($(document).scrollTop() <= trigger - $('#contentNav_layer').height()){
            logo.removeClass('on');
            nav.removeClass('deployNav');
            nav.css('top', '');
            nav.children('.container-fluid').css('width', 'auto');
    }
}
// ./Deploiment contentNav

function ajustement_pubRow_mobile(){
    if($(document).width() < 992){
        $('#pubRow').css('padding-top','30px');
        $('#layer_revue').css('float', 'right');
    }else{
        $('#pubRow').css('padding-top','0');
    }
}


// EFFET .container-titre:hover

function layer_revue_wrapper_sizing(){
    $('#layer_revue .cover-detail').css('left', '0').css('top', ('-450px'));
    coverHeight = $('.container-titre img').outerHeight();
    coverWidth = $('.container-titre img').outerWidth();
    coverWrapper = $('.container-titre .cover-wrapper');
    coverWrapper.css('width', coverWidth+'px')
                .css('height', coverHeight+'px');
    coverDetail = coverWrapper.children('a').children('.cover-detail');
    coverDetail.css('width', coverWidth+'px')
                .css('height', coverHeight+'px');
    textarea = coverDetail.children('h3');
    textarea.css('margin-top', (coverHeight - textarea.height())/2-100+'px');
}

function layer_revue_hover(){

    $(".cover-wrapper").hover(function(e) {
        elementPosition = $(this).offset();
        edge = closestEdge(e.pageX - elementPosition.left, e.pageY - elementPosition.top, $(this).width(), $(this).height());
        target = $(this).children('a').children('.cover-detail');
        coverDetailWidth  = target.outerWidth();
        coverDetailHeight = target.outerHeight();
        switch(edge){
            case 'top':
                target.css('left', '0px').css('top', '-'+coverDetailHeight+'px');
                target.animate({
                    top: '0px'
                },200);
                break;
            case 'bottom':
                target.css('left', '0px').css('top', coverDetailHeight+'px');
                target.animate({
                    top: '0px'
                },200);
                break;
            case 'left':
                target.css('left', '-300px').css('top', '0px');
                target.animate({
                    left: '0px'
                },200);
                break;
            case 'right':
                target.css('left', '300px').css('top', '0px');
                target.animate({
                    left: '0px'
                },200);
                break;
        }
    },function(e) {
        elementPosition = $(this).offset();
        edge = closestEdge(e.pageX - elementPosition.left, e.pageY - elementPosition.top, $(this).width(), $(this).height());
        target = $(this).children('a').children('.cover-detail');
        coverDetailWidth  = target.outerWidth();
        coverDetailHeight = target.outerHeight();
        switch(edge){
            case 'top':
                target.animate({
                    top: '-'+coverDetailHeight+'px'
                },200);
                break;
            case 'bottom':
                target.animate({
                    top: coverDetailHeight+'px'
                },200);
                break;
            case 'left':
                target.animate({
                    left: '-300px'
                },200);
                break;
            case 'right':
                target.animate({
                    left: '300px'
                },200);
                break;
        }
    });
    function closestEdge(x,y,w,h) {
            var topEdgeDist = distMetric(x,y,w/2,0);
            var bottomEdgeDist = distMetric(x,y,w/2,h);
            var leftEdgeDist = distMetric(x,y,0,h/2);
            var rightEdgeDist = distMetric(x,y,w,h/2);
        
            var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
            switch (min) {
                case leftEdgeDist:
                    return "left";
                case rightEdgeDist:
                    return "right";
                case topEdgeDist:
                    return "top";
                case bottomEdgeDist:
                    return "bottom";
            }
    }
    function distMetric(x,y,x2,y2) {
        var xDiff = x - x2;
        var yDiff = y - y2;
        return (xDiff * xDiff) + (yDiff * yDiff);
    }

}
// EFFET .container-titre:hover

// EXTRA new navbar form
function adapt_form_width(){
    target = $('.navbar-form');
    referent = $('#contentNav .container-fluid');
    subTarget = $('.navbar-form .form-group .form-control');
    if($(window).width > 768){
        target.width(referent.outerWidth() - $('#search-btn').outerWidth()).height(referent.height());
        subTarget.outerWidth(referent.width() - $('#search-btn').outerWidth() +2).outerHeight(referent.outerHeight());
    }else{
        target.width(referent.outerWidth()).height();
        subTarget.outerWidth(referent.width() - $('#search-btn').outerWidth() +2).outerHeight(50);
    }
}

function toggle_navbar_form(){
    $('#search-btn').click(function(){
        if($('#search_form').hasClass('hide')){
            $('#search_form').removeClass('hide');
            $('#search_form input').focus();
            $('#search-btn li a i').removeClass('fa-search-plus').addClass('fa-close');
        }else{
            $('#search_form').addClass('hide');
            $('#search-btn li a i').removeClass('fa-close').addClass('fa-search-plus');
        }
    });
}
// ./new navbar form