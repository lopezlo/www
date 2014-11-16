//---------------//
//  NAV COLLAPSE
//---------------//
//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("nav-goingDown");
    } else {
        $(".navbar-fixed-top").removeClass("nav-goingDown");
    }
});
$(window).scroll(function() {
    if ($(".navbar").offset().top > 250) {
        $(".navbar-fixed-top").addClass("nav-going");
    } else {
        $(".navbar-fixed-top").removeClass("nav-going");
    }
});

//---------------//
//  NAV UP-DOWN
//---------------//
//jQuery for nav going up or down
    var iScrollPos = 0;

    $(window).scroll(function () {
        var iCurScrollPos = $(this).scrollTop();
        if (iCurScrollPos > iScrollPos) {
            //Scrolling Down
            //$('nav').addClass("nav-goingDown");
            $('nav.saku-nav').removeClass("nav-goingUp");
            $(".navbar-nav").addClass("navbar-custom");
            
            
        } else {
           //Scrolling Up
            $('nav.saku-nav').addClass("nav-goingUp");
            //$('nav').removeClass("nav-goingDown");
        }
        iScrollPos = iCurScrollPos;
        var scrollNow = $(window).scrollTop();
        if ( scrollNow < 100) {
            $('nav.saku-nav').removeClass("nav-goingUp");
            $(".navbar-nav").removeClass("navbar-custom");
            
        }
    });

//---------------//
//  PRODD-HOME
//---------------//
//Productos en la home
$('.toDvo').click(function () {
        $('#prodd *').removeClass('active');
        $('.dvo').addClass('active');
        $('.arrow-left.toDmo').addClass('active');
        $('nav span.toDvo').addClass('active');
});
$('.toDmo').click(function () {
    if ($('.dvo').hasClass('active')) {
        
        $('#prodd *').removeClass('active');
        $('.dmo').addClass('active');
        $('.arrow-left.toDvo').addClass('active');
        $('.arrow-right.toEmo').addClass('active');
        $('nav span.toDmo').addClass('active');
        } 
    else if ($('.emo').hasClass('active')) {
        
        $('#prodd *').removeClass('active');
        $('.dmo').addClass('active');
        $('.arrow-left.toDvo').addClass('active');
        $('.arrow-right.toEmo').addClass('active');
        $('nav span.toDmo').addClass('active');
        } else{};
});
$('.toEmo').click(function () {        
        $('#prodd *').removeClass('active');
        $('.emo').addClass('active');
        $('.arrow-right.toDmo').addClass('active');
        $('nav span.toEmo').addClass('active');

});
//---------------//
//  PRODD-COMPARE
//---------------//
//En la ficha de SERVICIOS el #prodd-compare contiene texto <p> variable
//esta función coge la altura mas alta de las <p> y la deja como altura por defecto en todas.
$(window).bind("load resize",function(e){
           
    if ($(window).width() > 750) {
        
        $('#prodd-compare').each(function(){  
            
            //establece la altura mas alta a 0
            var highestBox = 0;
            var box = '#prodd-compare p';
            $(box).each(function(){
                //si esta es mas alta que 0 la pone como la mas alta
                if($(this).height() > highestBox) 
                   highestBox = $(this).height(); 
            });  
            //le da a todas la altura mas alta
            $(box).css('min-height', highestBox);
            var highestBox = 0;
        });
    }
    var highestBox = 0;
});

//---------------//
//   ABOUT-NAV
//---------------//
//Esta función permite que el nav de el apartado about
//esté fijo a la izquierda hasta que llega el footer
var windw = this;

$.fn.followTo = function ( pos ) {
    var $this = this,
        $window = $(windw);
    
    $window.scroll(function(e){
        if ($window.scrollTop() > pos) {
            $this.css({
                position: 'absolute',
                top: pos + 88
            });
        } else {
            $this.css({
                position: 'fixed',
                top: 88
            });
        }
    });
};
//la altura max, maxPos = la altura del contenido - la altura del nav
//aun así no lo hace del todo bien
var maxPos = $("#about").height() - $('#about nav').height();
$('#about nav').followTo(maxPos);

//PROJECTS
//Esta funcion nos asegura que el "+" esté centrado verticalmente en su botón.
$(window).bind("load resize",function(e){
    var h = $(".item-logo-ratio").width( );
    $(".item-more a").css("line-height", ""+h/100);
});

//---------------//
//    ACTIONS
//---------------//
//Esta función lee todos los .action-item dentro de .action-list
//y le aplica a los primeros unas "class" especificas.
var actionItem = $('.action-list .action-item');
    $(actionItem).each(function(i) {
        if (i == 0){
           $(this).addClass('col-xs-12');
        }if (i <= 2 && i !=0 ){
           $(this).addClass('col-xs-6');
        }if (i >= 3 ){
            $(this).addClass('col-md-3 col-xs-6');
        }
    });
//Esta función le da un "margin-top" a la primera imagen y
//un "margin-left" a todas las demas, dependiendo de su tamaño
//para que de esta forma, siempre se queden centradas.
// NOTA:: para que esto funcione correctamente,
//las imagenes tienen que ser SIEMPRE mas anchas que altas.
$(window).bind("load resize",function(e){
    $('.action-list .action-item img').each(function(i) {
        if (i == 0){
            var imgH = $(this).height()/2;
            $(this).css("margin-top", - imgH + "px");
        } else {
            var imgW = $(this).width()/2;
            $(this).css("margin-left", - imgW + "px");
        }
    });
});
//Esta función activa y desactiva la class "action-active"
//que mueve la funcionalidad de ver  la descripcion
$( ".action-list .action-item" ).click(function() {
  $( this ).toggleClass( "action-active" );
});

//---------------//
//  PROJECT-PAGE
//---------------//
//Esta función añade el pie de foto
$('section#project-page .page-content img').each(function() {
    $(this).after( "<div class='img-title'>" + $(this).attr('title') + "</div>" ); 
});