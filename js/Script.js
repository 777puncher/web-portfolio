function changeBackgroundColor() {
  let body = document.getElementsByTagName("body")[0];
  let currentBackgroundColor = body.style.backgroundColor;

  if (currentBackgroundColor === 'rgb(37, 35, 35)') {
    body.style.backgroundColor = 'rgb(0, 0, 0)'
  } else {
    body.style.backgroundColor = 'rgb(37, 35, 35)'
  }
};

$('.slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev">&#8249</button>', 
  nextArrow: '<button type="button" class="slick-next">&#8250</button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



function submitForm(event) {
  event.preventDefault();
   Swal.fire(
  'Отлично!',
  'Данные успешно отправлены',
  'success'
)

}
  












