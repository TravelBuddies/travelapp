$(document).foundation()
$(function () {
  var showClass = 'show';

  $('.userInput').on('checkval', function () {
    var label = $(this).prev('label');
    if(this.value !== '') {
      label.addClass(showClass);
    } else {
      label.removeClass(showClass);
    }
  }).on('keyup', function () {
    $(this).trigger('checkval');
  });
});


jQuery(document).ready(function($){
  //if you change this breakpoint in the style.css file (or _layout.scss if you use SASS), don't forget to update this value as well
  var $L = 1200,
    $menu_navigation = $('#main-nav'),
    $cart_trigger = $('#cd-cart-trigger'),
    $hamburger_icon = $('#cd-hamburger-menu'),
    $lateral_cart = $('#cd-cart'),
    $shadow_layer = $('#cd-shadow-layer');

  //open lateral menu on mobile
  $hamburger_icon.on('click', function(event){
    event.preventDefault();
    //close cart panel (if it's open)
    $lateral_cart.removeClass('speed-in');
    toggle_panel_visibility($menu_navigation, $shadow_layer, $('body'));
  });

  //open cart
  $cart_trigger.on('click', function(event){
    event.preventDefault();
    //close lateral menu (if it's open)
    $menu_navigation.removeClass('speed-in');
    toggle_panel_visibility($lateral_cart, $shadow_layer, $('body'));
  });

  //close lateral cart or lateral menu
  $shadow_layer.on('click', function(){
    $shadow_layer.removeClass('is-visible');
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    if( $lateral_cart.hasClass('speed-in') ) {
      $lateral_cart.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').removeClass('overflow-hidden');
      });
      $menu_navigation.removeClass('speed-in');
    } else {
      $menu_navigation.removeClass('speed-in').on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').removeClass('overflow-hidden');
      });
      $lateral_cart.removeClass('speed-in');
    }
  });

  //move #main-navigation inside header on laptop
  //insert #main-navigation after header on mobile
  move_navigation( $menu_navigation, $L);
  $(window).on('resize', function(){
    move_navigation( $menu_navigation, $L);
    
    if( $(window).width() >= $L && $menu_navigation.hasClass('speed-in')) {
      $menu_navigation.removeClass('speed-in');
      $shadow_layer.removeClass('is-visible');
      $('body').removeClass('overflow-hidden');
    }

  });
});

function toggle_panel_visibility ($lateral_panel, $background_layer, $body) {
  if( $lateral_panel.hasClass('speed-in') ) {
    // firefox transitions break when parent overflow is changed, so we need to wait for the end of the trasition to give the body an overflow hidden
    $lateral_panel.removeClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      $body.removeClass('overflow-hidden');
    });
    $background_layer.removeClass('is-visible');

  } else {
    $lateral_panel.addClass('speed-in').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      $body.addClass('overflow-hidden');
    });
    $background_layer.addClass('is-visible');
  }
}

function move_navigation( $navigation, $MQ) {
  if ( $(window).width() >= $MQ ) {
    $navigation.detach();
    $navigation.appendTo('header');
  } else {
    $navigation.detach();
    $navigation.insertAfter('header');
  }
}




jQuery(document).ready(function($){
  //update these values if you change these breakpoints in the style.css file (or _layout.scss if you use SASS)
  var MqM= 768,
    MqL = 1024;

  var faqsSections = $('.cd-faq-group'),
    faqTrigger = $('.cd-faq-trigger'),
    faqsContainer = $('.cd-faq-items'),
    faqsCategoriesContainer = $('.cd-faq-categories'),
    faqsCategories = faqsCategoriesContainer.find('a'),
    closeFaqsContainer = $('.cd-close-panel');
  
  //select a faq section 
  faqsCategories.on('click', function(event){
    event.preventDefault();
    var selectedHref = $(this).attr('href'),
      target= $(selectedHref);
    if( $(window).width() < MqM) {
      faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
      closeFaqsContainer.addClass('move-left');
      $('body').addClass('cd-overlay');
    } else {
          $('body,html').animate({ 'scrollTop': target.offset().top - 19}, 200); 
    }
  });

  //close faq lateral panel - mobile only
  $('body').bind('click touchstart', function(event){
    if( $(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) { 
      closePanel(event);
    }
  });
  faqsContainer.on('swiperight', function(event){
    closePanel(event);
  });

  //show faq content clicking on faqTrigger
  faqTrigger.on('click', function(event){
    event.preventDefault();
    $(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
  });

  $(window).on('resize', function(){
    if($(window).width() <= MqL) {
      faqsCategoriesContainer.removeClass('is-fixed').css({
        '-moz-transform': 'translateY(0)',
          '-webkit-transform': 'translateY(0)',
        '-ms-transform': 'translateY(0)',
        '-o-transform': 'translateY(0)',
        'transform': 'translateY(0)',
      });
    } 
    if( faqsCategoriesContainer.hasClass('is-fixed') ) {
      faqsCategoriesContainer.css({
        'left': faqsContainer.offset().left,
      });
    }
  });

  function closePanel(e) {
    e.preventDefault();
    faqsContainer.removeClass('slide-in').find('li').show();
    closeFaqsContainer.removeClass('move-left');
    $('body').removeClass('cd-overlay');
  }

  function updateCategory(){
    updateCategoryPosition();
    updateSelectedCategory();
  }

  function updateCategoryPosition() {
    var top = $('.cd-faq').offset().top,
      height = jQuery('.cd-faq').height() - jQuery('.cd-faq-categories').height(),
      margin = 20;
    if( top - margin <= $(window).scrollTop() && top - margin + height > $(window).scrollTop() ) {
      var leftValue = faqsCategoriesContainer.offset().left,
        widthValue = faqsCategoriesContainer.width();
      faqsCategoriesContainer.addClass('is-fixed').css({
        'left': leftValue,
        'top': margin,
        '-moz-transform': 'translateZ(0)',
          '-webkit-transform': 'translateZ(0)',
        '-ms-transform': 'translateZ(0)',
        '-o-transform': 'translateZ(0)',
        'transform': 'translateZ(0)',
      });
    } else if( top - margin + height <= $(window).scrollTop()) {
      var delta = top - margin + height - $(window).scrollTop();
      faqsCategoriesContainer.css({
        '-moz-transform': 'translateZ(0) translateY('+delta+'px)',
          '-webkit-transform': 'translateZ(0) translateY('+delta+'px)',
        '-ms-transform': 'translateZ(0) translateY('+delta+'px)',
        '-o-transform': 'translateZ(0) translateY('+delta+'px)',
        'transform': 'translateZ(0) translateY('+delta+'px)',
      });
    } else { 
      faqsCategoriesContainer.removeClass('is-fixed').css({
        'left': 0,
        'top': 0,
      });
    }
  }

  function updateSelectedCategory() {
    faqsSections.each(function(){
      var actual = $(this),
        margin = parseInt($('.cd-faq-title').eq(1).css('marginTop').replace('px', '')),
        activeCategory = $('.cd-faq-categories a[href="#'+actual.attr('id')+'"]'),
        topSection = (activeCategory.parent('li').is(':first-child')) ? 0 : Math.round(actual.offset().top);
      
      if ( ( topSection - 20 <= $(window).scrollTop() ) && ( Math.round(actual.offset().top) + actual.height() + margin - 20 > $(window).scrollTop() ) ) {
        activeCategory.addClass('selected');
      }else {
        activeCategory.removeClass('selected');
      }
    });
  }
});