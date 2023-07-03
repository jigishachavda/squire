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

// delivary page dropdown
$('select').each(function () {
  var $this = $(this), selectOptions = $(this).children('option').length;

  $this.addClass('hide-select');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="custom-select"></div>');

  var $customSelect = $this.next('div.custom-select');
  $customSelect.text($this.children('option').eq(0).text());

  var $optionlist = $('<ul />', {
    'class': 'select-options'
  }).insertAfter($customSelect);

  for (var i = 0; i < selectOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($optionlist);
  }

  var $optionlistItems = $optionlist.children('li');

  $customSelect.click(function (e) {
    e.stopPropagation();
    $('div.custom-select.active').not(this).each(function () {
      $(this).removeClass('active').next('ul.select-options').hide();
    });
    $(this).toggleClass('active').next('ul.select-options').slideToggle();
  });

  $optionlistItems.click(function (e) {
    e.stopPropagation();
    $customSelect.text($(this).text()).removeClass('active');
    $this.val($(this).attr('rel'));
    $optionlist.hide();
  });

  $(document).click(function () {
    $customSelect.removeClass('active');
    $optionlist.hide();
  });

});
