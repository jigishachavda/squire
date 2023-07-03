import $ from 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap';
import 'select2/dist/js/select2.min.js';


import { App } from './parts/app.js'
import { Plugins } from './parts/plugins.js'
import { Parts } from './parts/parts.js'


// export for others scripts to use
window.$ = $;
window.jQuery = jQuery;

$(function () {

  window.windowWidth = $(window).width();
  window.windowHeight = $(window).height();

  window.isiPhone = navigator.userAgent.toLowerCase().indexOf('iphone');
  window.isiPad = navigator.userAgent.toLowerCase().indexOf('ipad');
  window.isiPod = navigator.userAgent.toLowerCase().indexOf('ipod');

  //Functions List Below

  window.app = new App();
  window.app.init();

  window.plugins = new Plugins();
  window.plugins.init();

  window.parts = new Parts();
  window.parts.init();

});

// ===========================================================================

$(window).scroll(function () {
  var sticky = $(".main-header"),
    scroll = $(window).scrollTop();

  if (scroll >= 50) sticky.addClass("header-fixed");
  else sticky.removeClass("header-fixed");
});


$("#close-product-btn").click(function () {
  $("#product-modal").addClass("d-none");
  $("html").removeClass("overflow-hidden");
});

$(".single-basket").click(function () {
  $(".offcanvas-body-left").removeClass("d-none");
  $("html").addClass("overflow-hidden");

});

$(".close-basket").click(function () {
  $(".offcanvas-body-left").addClass("d-none");
  $("html").removeClass("overflow-hidden");

});

$(document).ready(function () {
  $("#search-show").click(function () {
    $("#search-dropdown").removeClass("d-none");
  });

  // FILTER TOGGLE
  var listItems = $("#item-list li");
  var toggleLink = $("#toggle-link");
  listItems.slice(11).hide();
  toggleLink.on("click", function () {
    listItems.slice(11).toggle();
    toggleLink.text(function () {
      return listItems.slice(11).is(":visible") ? "- Show Less" : "+ More";
    });
  });

  // Increase quantity
  $('.increase-quantity').click(function() {
    var quantityElement = $(this).siblings('.quantity-number').find('p');
    var quantity = parseInt(quantityElement.text());
    quantityElement.text(quantity + 1);
  });

  // Decrease quantity
  $('.decrease-quantity').click(function() {
    var quantityElement = $(this).siblings('.quantity-number').find('p');
    var quantity = parseInt(quantityElement.text());
    
    if (quantity > 1) {
      quantityElement.text(quantity - 1);
    }
  });
});

// Add an event listener to the checkbox
$(".myCheckbox").change(function() {
  var isChecked = $(this).is(":checked");
  if (isChecked) {
    $(".myElement").removeClass("d-none");
  } else {
    $(".myElement").addClass("d-none");
  }
});
