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