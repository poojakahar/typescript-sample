export const defaultSettings = (settings: any) => ({
  className: 'mt-[25px]',
  dots: false,
  infinite: true,
  speed: 500,
  initialSlide: 0,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        initialSlide: 0,
      },
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 3,
        initialSlide: 0,
      },
    },
  ],
  ...settings,
});
