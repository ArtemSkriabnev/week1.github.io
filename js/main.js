
// фулскрин мею НАЧАЛО

const hamburger = document.querySelector(".nav__ham-menu");
const fullScreenMenu = document.querySelector(".fullscreen-menu");
const closeMenu = document.querySelector(".fullscreen-menu__close");
const menuLink = document.querySelectorAll(".fullscreen-menu-nav__link");

var op = 0.2

let increaseOpacity = function () {
  setTimeout( () => {
    if (fullScreenMenu.style.opacity < 1) {
      op += 0.2;
      fullScreenMenu.style.opacity = op;
      increaseOpacity();

    }
  }, 100);
}

let decreaseOpacity = function () {
  setTimeout( () => {
    if (fullScreenMenu.style.opacity > 0) {
      op -= 0.2;
      fullScreenMenu.style.opacity = op;
      decreaseOpacity();
    }
  }, 100)

  if ((op == 0) || (op < 0 )) {
    fullScreenMenu.style.display = 'none';
  }
  
}

hamburger.addEventListener('click', function() {
  fullScreenMenu.style.display = 'flex';
  increaseOpacity();
});

closeMenu.addEventListener('click', function() {
  decreaseOpacity();
})

fullScreenMenu.addEventListener('click', (event) => {
  if (event.target === fullScreenMenu) {
    decreaseOpacity();
  }
})

for (let i = 0; i < menuLink.length; i++) {
  // console.log(menuLink[i]);
  menuLink[i].addEventListener('click', ()=>{
    decreaseOpacity();
  })
}
// фулскрин меню КОНЕЦ
// reviews НАЧААЛО

function commentsPopup () {
  const feedbackCollection=document.querySelectorAll('.js-reviews-modal');
  const popup=document.querySelector('.reviews__popup');
  const popupName=popup.querySelector('.overlay__title');
  const popupText = popup.querySelector('.overlay__text');
  const popupClose = popup.querySelector('.js-close');

  // console.log(feedbackCollection);

  for (let i = 0; i<feedbackCollection.length; i++) {
    feedbackCollection[i].addEventListener('click', function() {
      // popup.classList.add('popup'); // делает видимым через добавление класса
      popup.style.display = 'flex';

      let thisParent=this.parentNode;
      let name = thisParent.querySelector('.reviews__name').innerText;
      // console.log(name);
      let rev_text = thisParent.querySelector('.reviews__text p').innerText;
      // console.log(rev_text);
      popupName.innerText = name;
      popupText.innerText = rev_text;
    })

  }

  popupClose.addEventListener('click', ()=>{
    // console.log('close')
    popup.style.display = 'none';
  })

  popup.addEventListener('click', (e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('overlay__container')) {
      popupClose.click();
    }
  })

}

commentsPopup();

// reviews КОНЕЦ

// команда аккордеон НАЧАЛО
const teamList = document.querySelectorAll(".team-acco__item");
// console.log(teamList)

teamList.forEach(el =>
  el.addEventListener("click", function (event) {
    event.preventDefault();
    if (el.classList.contains('team-acco__item--active')) {
      el.classList.remove('team-acco__item--active');
    } else {
      teamList.forEach(el => el.classList.remove("team-acco__item--active"));
    el.classList.add("team-acco__item--active");

    }
  })
);
// команда аккордеон КОНЕЦ

// меню аккордеон НАЧАЛО
const MenuList = document.querySelectorAll(".menu-acco__item");
// console.log(teamList)

MenuList.forEach(el =>
  el.addEventListener("click", function (event) {
    event.preventDefault();
    if (el.classList.contains('menu-acco__item--active')) {
      el.classList.remove('menu-acco__item--active');
    } else {
      MenuList.forEach(el => el.classList.remove("menu-acco__item--active"));
    el.classList.add("menu-acco__item--active");

    }
  })
);
// меню аккордеон КОНЕЦ

function orderPopup (message) {
  const popup=document.querySelector('.order__popup');
  const popupName=popup.querySelector('.overlay__title');
  const popupText = popup.querySelector('.overlay__text');
  const popupClose = popup.querySelector('.js-close');

  popup.style.display = 'flex';
  popupName.innerText = "Сообщение";
  popupText.innerText = message;


  popupClose.addEventListener('click', ()=>{
    popup.style.display = 'none';
  })

  popup.addEventListener('click', (e)=>{
    if(e.target.classList.contains('overlay__container')) {
      popupClose.click();
    }
  })

}

// Форма НАЧАЛО

const orderForm = document.querySelector('#OrderForm');
const sednButton = document.querySelector('#sendButton');

console.log(sednButton);

sednButton.addEventListener('click', function(event) {
  event.preventDefault();

  
  function validateForm (form) {
    let valid = true;

    if ((!form.elements.name.checkValidity()) || 
    (!form.elements.phone.checkValidity()) ||
    (!form.elements.comment.checkValidity())) {
      valid = false;
    }

    return valid;
  }

  // function validateField(field) {
  //   console.log(field.checkValidity())   ;    
  //   return field.checkValidity();
  // }
  console.log(validateForm(orderForm));
  if (validateForm(orderForm)) {
    var formData = new FormData(orderForm);
    formData.append('to','mail@mail.com');
    const request = new XMLHttpRequest();
    request.responseType='json';
    request.open('POST', 'https://webdev-api.loftschool.com/sendmail');
    request.send(formData);
    request.addEventListener('load', ()=> {
      orderPopup(request.response.message);
    })  
  } else {
    orderPopup('Не все необходимые поля заполнены');
  }

  // console.log(data);
  // validateForm(orderForm);


})

// Форма КОНЕЦ

ymaps.ready(init);

var placemarks = [
  {
      latitude: 59.97,
      longitude: 30.31,
      hintContent: 'ул. Литераторов, д. 19',
      balloonContent: 'Самые вкусные бургеры у нас!'
  },
  {
      latitude: 59.94,
      longitude: 30.25,
      hintContent: 'ул. Литераторов, д. 19',
      balloonContent: 'Самые вкусные бургеры у нас!'
  },
  {
      latitude: 59.93,
      longitude: 30.34,
      hintContent: 'наб. реки Фонтанки, д. 56',
      balloonContent: 'Самые вкусные бургеры у нас!'
  }
],
  geoObjects= [];

    function init(){
        // Создание карты.
        var map = new ymaps.Map("map", {
            // Координаты центра карты.            
            center: [59.94, 30.32],
            // Уровень масштабирования. 
            zoom: 12,
            controls: ['zoomControl'],
            behaviors: ['drag']
        });
    
        for (var i = 0; i < placemarks.length; i++) {
          // console.log("hi");
          geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
          {
              hintContent: placemarks[i].hintContent,
              balloonContent: placemarks[i].balloonContent
          },
          {
              iconLayout: 'default#image',
              iconImageHref: './img/icons/map-marker.svg',
              iconImageSize: [46, 57],
              iconImageOffset: [-23, -57],
          });
          // map.geoObjects.add(placemark);
  }

  var clusterer = new ymaps.Clusterer();

  map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);

        
  }


  // $(".main").onepage_scroll();