

$(document).ready(function(){
    // HABILLAGE
        if($('#pubLayer').length){
            $('body').css('padding-bottom', '0');
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
});
$(window).resize(function(){
    boxImageSizing();
    placement_habillage();
    place_shifting_elements();
    deploiment_contentNav();
    adapt_form_width();
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

    // alignement vertical Logo principal
    // $('#masterNav img').css('margin-top', ($('#masterNav').outerHeight()-$('#masterNav img').outerHeight())/2);
    // aligne les .navbar-nav de masterNav en bas de la navbar
    // !!!!! ADAPTER POUR MOBILE !!!!!
    if($(window).width()>=768){
        $('#masterNav .navbar-nav').each(function(){
            $(this).css('margin-top', ($('.navbar').height()-$(this).outerHeight()));
        });
    }

    // positionnement du logo pour la deployNav
    $('#logo_deploy').css('left', ($(window).width()-$('#main').outerWidth())/2-$('#logo_deploy').outerWidth());

    // Alignement vertical de navbar-form
    target = $('#contentNav .navbar-form');
    // target.css('margin-top', ($('#contentNav .container-fluid').height()-target.outerHeight())/2);
}

// Resizing box images
function boxImageSizing(){
    $('.box').each(function(){
        layer = $(this).children('.layer-img');
        illustration = layer.children('a').children('.illustration');
        if(illustration.width()<layer.width()){
            illustration.css('height', 'auto').css('width', '100%').css('bottom',(illustration.height()-layer.height())/2);
        }
    });
}
// ./Resizing box images

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
    }else{
        $('#pubRow .box:first').css('margin-top', '0');
    }
}
// ./Placement HABILLAGE

function adapt_form_width(){
    target = $('#contentNav .form-group');
    button = $('#contentNav .btn');
    if($(window).width()>=768){
        target.css('width', $('.smallbox:first').outerWidth()-button.outerWidth()-12);
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
