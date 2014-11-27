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
$(document).ready(function(){   
    //Click event to scroll to top
    $('.navbar-brand').click(function(){
        $('html, body').animate({scrollTop : 0},300);
        return false;
    });
    
});
//---------------//
//  PRODD-HOME
//---------------//
//Productos en la home
$('.to3').click(function () {
        $('#prodd *').removeClass('active');
        $('.prodd-3').addClass('active');
        $('.arrow-left.to2').addClass('active');
        $('nav span.to3').addClass('active');
});
$('.to2').click(function () {
    if ($('.prodd-3').hasClass('active')) {
        
        $('#prodd *').removeClass('active');
        $('.prodd-2').addClass('active');
        $('.arrow-left.to3').addClass('active');
        $('.arrow-right.to1').addClass('active');
        $('nav span.to2').addClass('active');
        } 
    else if ($('.prodd-1').hasClass('active')) {
        
        $('#prodd *').removeClass('active');
        $('.prodd-2').addClass('active');
        $('.arrow-left.to3').addClass('active');
        $('.arrow-right.to1').addClass('active');
        $('nav span.to2').addClass('active');
        } else{};
});
$('.to1').click(function () {        
        $('#prodd *').removeClass('active');
        $('.prodd-1').addClass('active');
        $('.arrow-right.to2').addClass('active');
        $('nav span.to1').addClass('active');

});
//---------------//
//  PRODD-COMPARE
//---------------//
//En la ficha de SERVICIOS el #prodd-compare contiene texto <p> variable
//esta función coge la altura mas alta de las <p> y la deja como altura por defecto en todas.
$(window).bind("load resize",function(e){
    //primero reseteamos el 'min-height'
    $('.prodd-compare-item p').css('min-height', 0);    
    //si es mayor de 750 aplicara el efecto 
    if ($(window).width() > 750) {
        
        $('#prodd-compare').each(function(){  
            
            //establece la altura mas alta a 0
            var highestBox = 0;
            var box = '.prodd-compare-item p';
            $(box).each(function(){
                //si esta es mas alta que 0 la pone como la mas alta
                if($(this).outerHeight() > highestBox) 
                   highestBox = $(this).outerHeight(); 
            });  
            //le da a todas la altura mas alta
            $(box).css('min-height', highestBox);
        });
    }
});
//En este caso, la funcion lee la columna con mas filas
//y rellena el resto con "---"
$(window).load(function(){

    var count = 0;
    var listItems = '.prodd-compare-item ul';

    $(listItems).each(function(){

        if($(this).children('li').length > count ){
                count = $(this).children('li').length; 
            }
    });

    $(listItems).each(function(){
        var add = count - $(this).children('li').length;
        $(this).append(new Array(++add).join('<li>---</li>'));
        var add = 0;
    });

});
//---------------//
//     ABOUT
//---------------//
//Esta funcion es similar a la de la ficha de SERVICIOS,
//pero aplicada al alto de los '.team-item' asi nos evitamos que descuadre
$(window).bind("load resize",function(e){
    //primero reseteamos el 'min-height'
    $('.team-item p').css('min-height', 0);    
    //si es mayor de 750 aplicara el efecto 
    if ($(window).width() >= 480) {
        
        $('.team-item').each(function(){  
            
            //establece la altura mas alta a 0
            var highestBox = 0;
            var box = '.team-item p';
            $(box).each(function(){
                //si esta es mas alta que 0 la pone como la mas alta
                if($(this).outerHeight() > highestBox) 
                   highestBox = $(this).outerHeight(); 
            });  
            //le da a todas la altura mas alta
            $(box).css('min-height', highestBox);
        });
    }
});
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
var maxPos = $("#we").height() + $("#lean").height() + $("#are").height() + $("#team").height() + $("#other").height();
$('#about nav').followTo(maxPos);


//Esta función realiza la animacion del scroll con el menu 'nav'
$(function() {
  $('#about nav a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
});
//Esta función muestra el formulario
$("#cv span").click(function(){
    $("#cv").toggleClass("active", 300);
})
//---------------//
//    PROJECTS
//---------------//
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
//Esta función añade el pie de foto de un proyecto
$('section#project-page .page-content img').each(function() {
    $(this).after( "<div class='img-title'>" + $(this).attr('title') + "</div>" ); 
});


//---------------//
//    LANDING
//---------------//
//Esta función realiza el efecto acordeon
$(window).load(function(){
    $(".toggle-item h3").click(function(){
        $(this).parent().toggleClass("active");
    });
});