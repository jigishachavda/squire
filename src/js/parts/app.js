import "slick-carousel";

export class App {
  init() {
    $(".slider-searching").slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      prevArrow: $(".what-searching .slick--prev"),
      nextArrow: $(".what-searching .slick--next"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
    $(".feature-slider").slick({ 
      dots:true,
      arrows:false,
      slidesToShow:1,
      fade:true,
      slidesToScroll:1,
    });
    $(".search-type-slider").slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 4,
      prevArrow: $(".search-by-type .slick--prev"),
      nextArrow: $(".search-by-type .slick--next"),
    });
    $(".also-like-slider").slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 4,
      prevArrow: $(".also-like-this .slick--prev"),
      nextArrow: $(".also-like-this .slick--next"),
    });
    $(".news-slider").slick({
      dots: false,
      arrows: true,
      infinite: false,
      slidesToShow: 3,
      prevArrow: $(".single-news-sec .slick--prev"),
      nextArrow: $(".single-news-sec .slick--next"),
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          }
        },
      ]
    });
    $(".gallary-bottom").slick({ 
      dots:false,
      arrows:false,
      slidesToShow:6,
      slidesToScroll:1,
    });

  }




  slickSLider() { }
}
