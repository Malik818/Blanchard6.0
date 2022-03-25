document.addEventListener("DOMContentLoaded", function() {
document.querySelectorAll(".header__list-item-btn").forEach(item => {
item.addEventListener("click", function() {
  let btn = this;
  let dropdown = this.parentElement.querySelector(".header__container-dropdown");
  
  document.querySelectorAll(".header__list-item-btn").forEach(el => {
    if (el != btn) {
      el.classList.remove("header__active-btn");
    }
  });
  

  document.querySelectorAll(".header__container-dropdown").forEach(el => {
    if (el != dropdown) {
      el.classList.remove("active-list--item");
    }
  })

  dropdown.classList.toggle("active-list--item");
  btn.classList.toggle("header__active-btn")
})
})
  
document.querySelectorAll(".gallery__select-item").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    document.querySelectorAll(".gallery__select-item").forEach(el => {
      if (el != btn) {
        el.classList.remove("none");
      }
    });
    
    btn.classList.add("none")
  })
  })
  



document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__list")) {
    document.querySelectorAll(".header__container-dropdown").forEach(el => {
        el.classList.remove("active-list--item");
    })
      document.querySelectorAll(".header__list-item-btn").forEach(el => {
        el.classList.remove("header__active-btn");
    });
  }
})

let catalogs = document.querySelectorAll('.catalog__text-link')
catalogs.forEach(catalog => {
  catalog.addEventListener('click', function(){
    catalogs.forEach(ct => ct.classList.remove('catalog__text-active'));
    this.classList.add('catalog__text-active');
  })
})
  
  new SimpleBar(document.querySelector(".header__container-dropdown-list-one"), {
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 27,
  });
  new SimpleBar(document.querySelector(".header__container-dropdown-list-two"), {
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 27,
  });
  new SimpleBar(document.querySelector(".header__container-dropdown-list-three"), {
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 27,
  });
  new SimpleBar(document.querySelector(".header__container-dropdown-list-four"), {
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 27,
  });
  new SimpleBar(document.querySelector(".header__container-dropdown-list-five"), {
    /* с помощью этого значения вы можете управлять высотой ползунка*/
    scrollbarMaxSize: 27,
  });
  var swiper = new Swiper(".mySwipe", {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      1025: {
        slidesPerGroup: 3,
        slidesPerView: 3,
        spaceBetween: 50
      },
      769: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 37
      },
      426: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 37
      },
      100: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 10
      },
    },
    pagination: {
      el: ".gallery__pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".gallery__button-next",
      prevEl: ".gallery__button-prev",
    },
  });

  $( function() {
    $( "#accordion" ).accordion(
        {heightStyle:"content"}
    );
  });

  document.querySelectorAll('.catalog__text-link').forEach(function(tb){
    tb.addEventListener('click', function(kk){
      const path = kk.currentTarget.dataset.path
      console.log(path)

      document.querySelectorAll('.catalog__block-default').forEach(function(bg){
        bg.classList.remove('catalog__block-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__block-active')
    })
  })

  var swiper = new Swiper(".events__swiper-block", {
    slidesPerGroup: 2,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      1025: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      769: {
        slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 28
      },
      426: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34
      },
      100: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 20
      },
    },
    navigation: {
      nextEl: ".events__button-next",
      prevEl: ".events__button-prev",
    },
    pagination: {
      el: '.events__pagination',
      clickable: true,
    },
  });
  var swiper = new Swiper(".projects__swiper-block", {
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 50,
    breakpoints: {
      1025: {
        slidesPerView: 3,
        spaceBetween: 50
      },
      769: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 50
      },
      426: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 33.97
      },
      100: {
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 21
      },
    },
    navigation: {
      nextEl: ".projects__button-next",
      prevEl: ".projects__button-prev",
    },
  });
  tippy('.projects__tooltip-one', {
    theme: 'projects__tooltip-one',
    content: "Пример современных тенденций - современная методология разработки ",
  });
  tippy('.projects__tooltip-two', {
    theme: 'projects__tooltip-two',
    content: "Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции   ",
  });
  tippy('.projects__tooltip-three', {
    theme: 'projects__tooltip-three',
    content: "В стремлении повысить качество ",
  });
  
var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);

new JustValidate('.form',{
    rules:{
        name:{
            required: true,
            minLength: 2,
            maxLength: 30
        },
        
        tel:{
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
});

const anchors = document.querySelectorAll('a[href^="#"]')

// Цикл по всем ссылкам
for(let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault() // Предотвратить стандартное поведение ссылок
    // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
    const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
    // Плавная прокрутка до элемента с id = href у ссылки
    document.querySelector(goto).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}


})
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.75854, 37.60093],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 14
    });// Создание геообъекта с типом точка (метка).
        var myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "LineString", // тип геометрии - точка
                coordinates: [55.75854, 37.60093] // координаты точки
            }
        });
        var myPlacemark1 = new ymaps.Placemark([55.75854, 37.60093], {}, {
            iconLayout: 'default#image',
            iconImageClipRect: [[0,0], [19, 20]],
            iconImageHref: './img/Desktop1920/Feedback_block/Ellipse12.svg',
            iconImageSize: [30, 40],
            iconImageOffset: [-15, -27]
        });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark1);

}

AOS.init();


$(document).ready(function(){
  $('.header__burger').click(function(event){
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  })
})
$(document).ready(function(){
  $('.header__adaptive-search').click(function(event){
      $('.header__search,.header__adaptive-search').toggleClass('active__search');
  })
})
$(document).ready(function(){
  $('.gallery__hidden').click(function(event){
      $('.gallery__popup').toggleClass('open');
  })
})
$(document).ready(function(){
  $('.gallery__popup-close,.gallery__popup-area').click(function(event){
      $('.gallery__popup').removeClass('open');
  })
})
$(document).ready(function(){
  $('.gallery__checkbox:checked').click(function(event){
      $('.checkbox__text').toggleClass('m');
  })
})
$(document).ready(function(){
  $('.header__iteam-link').click(function(event){
      $('.header__menu').removeClass('active');
      $('.header__burger').removeClass('active');
  })
})
$(document).ready(function(){
  $('.header__iteam-link').click(function(event){
      $('body').removeClass('lock');
  })
})