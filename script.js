'use strict';

/* SIDEBAR MENU */

function menuSelection(element) {
  var categoryJs = ['js_hair_style', 'js_hair_color','js_eyes', 'js_lips', 'js_body'];
  var srcElement = document.getElementById(element);
  
  var showMenu = true;

  if (document.getElementById('hair_style').checked) {
    document.getElementById('js_hair_style').style.display = 'block';
  } else {
    document.getElementById('js_hair_style').style.display = 'none';
  }

  if (srcElement !=null && srcElement.classList.add('active')) {
    showMenu = false;
  }
    for (let i = 0; i < categoryJs.length; i++) {
      var otherElement = document.getElementById(categoryJs[i]);
      if (otherElement != null) {
        otherElement.classList.remove('active');
      }
    }
    if (showMenu) {
      srcElement.classList.add('active');
    }
    return false;
}

/* HAIRSTYLE SELECTION */

let hairStyleSelectBtn = document.getElementById('js_hair_style');
let hairStyleSelectImg = hairStyleSelectBtn.querySelectorAll('img');
const hairDisplay = document.getElementById('js_hair_display');
let hairDisplayImg = hairDisplay.querySelectorAll('img');

Array.from(hairStyleSelectImg).forEach((hairImg) => {
  hairImg.addEventListener('click', (e) => {
    let currentClass = e.target.getAttribute('class');

    for (let i = 0; i < hairStyleSelectImg.length && i < hairDisplayImg.length; i++) {
      if (hairStyleSelectImg[i].getAttribute('class') === currentClass && 
      hairStyleSelectImg[i].getAttribute('class') === hairDisplayImg[i].getAttribute('class')) {
        hairDisplayImg[i].classList.add('active'); 

      } else if (hairStyleSelectImg[i].getAttribute('class') != currentClass) {
        hairDisplayImg[i].classList.remove('active');

      } else {
        hairDisplayImg[i].classList.add('active');
      }
    }
  })
})

/*////////////////*/

/* HAIR COLOR SELECTION */
/* HAIR COLOR CATEGORY MENU */
let hairColorSelectBtn = document.getElementById('js_hair_color');
let hairColorSelectInput = hairColorSelectBtn.querySelectorAll('input');
let hairStyleSelectInput = hairStyleSelectBtn.querySelectorAll('input');

let hairStyleSelectInit = hairStyleSelectBtn.querySelectorAll('.init');

Array.from(hairColorSelectInput).forEach((hairColor) => {
  hairColor.addEventListener('click', (e) => {
    let currentClass = e.target.getAttribute('class');

    for (let i = 0; i < hairColorSelectInput.length && i < hairStyleSelectInput.length && i < hairStyleSelectInit.length; i++) {
      if (hairColorSelectInput[i].getAttribute('class') === currentClass && 
      hairColorSelectInput[i].getAttribute('class') === hairStyleSelectInput[i].getAttribute('class')) {
        hairStyleSelectInput[i].classList.add('active');
        hairStyleSelectInit[i].classList.remove('init');
      } else if (hairColorSelectInput[i].getAttribute('class') != currentClass) {
        hairStyleSelectInput[i].classList.remove('active');
        hairStyleSelectInit[i].classList.remove('init');
      } else {
        hairStyleSelectInput[i].classList.add('active');
        hairStyleSelectInit[i].classList.remove('init');
      }
    }
  })
})

/* HAIR COLOR SELECTION DISPLAY */
//髪色を選択 → 最新の選択された髪色情報を保った処理
function colorSelection() {
  for (let i = 0; i < hairStyleSelectInput.length && hairDisplayImg.length; i++) {
    if (document.getElementById('hair_color01').checked) { //金髪の場合
      if (hairStyleSelectInput[i].classList.contains('color01')) {
        hairStyleSelectInput[i].classList.add('active');
      } else {
        hairStyleSelectInput[i].classList.remove('active');
      }

      if (document.querySelector('input[name="hair_style"]:checked').value === "style01") {
        hairDisplayImg[0].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style02") {
        hairDisplayImg[5].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style03") {
        hairDisplayImg[10].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style04") {
        hairDisplayImg[15].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style05") {
        hairDisplayImg[20].classList.add('active');
        hairDisplayImg[i].classList.remove('active');
      }

    } else if (document.getElementById('hair_color02').checked) { //オレンジ色の場合
      if (hairStyleSelectInput[i].classList.contains('color02')) {
        hairStyleSelectInput[i].classList.add('active');
      } else {
        hairStyleSelectInput[i].classList.remove('active')
      }

      if (document.querySelector('input[name="hair_style"]:checked').value === "style01") {
        hairDisplayImg[1].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style02") {
        hairDisplayImg[6].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style03") {
        hairDisplayImg[11].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style04") {
        hairDisplayImg[16].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style05") {
        hairDisplayImg[21].classList.add('active');
        hairDisplayImg[i].classList.remove('active');
      }

    } else if (document.getElementById('hair_color03').checked) { //茶色の場合
      if (hairStyleSelectInput[i].classList.contains('color03')) {
        hairStyleSelectInput[i].classList.add('active');
      } else {
        hairStyleSelectInput[i].classList.remove('active')
      }

      if (document.querySelector('input[name="hair_style"]:checked').value === "style01") {
        hairDisplayImg[2].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style02") {
        hairDisplayImg[7].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style03") {
        hairDisplayImg[12].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style04") {
        hairDisplayImg[17].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style05") {
        hairDisplayImg[22].classList.add('active');
        hairDisplayImg[i].classList.remove('active');
      } 

    } else if (document.getElementById('hair_color04').checked) { //灰色の場合
      if (hairStyleSelectInput[i].classList.contains('color04')) {
        hairStyleSelectInput[i].classList.add('active');
      } else {
        hairStyleSelectInput[i].classList.remove('active');
      }

      if (document.querySelector('input[name="hair_style"]:checked').value === "style01") {
        hairDisplayImg[3].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style02") {
        hairDisplayImg[8].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style03") {
        hairDisplayImg[13].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style04") {
        hairDisplayImg[18].classList.add('active');
        hairDisplayImg[i].classList.remove('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style05") {
        hairDisplayImg[23].classList.add('active');
        hairDisplayImg[i].classList.remove('active');
      }

    } else if (document.getElementById('hair_color05').checked) { //紫色の場合
      if (hairStyleSelectInput[i].classList.contains('color05')) {
        hairStyleSelectInput[i].classList.add('active');
      } else {
        hairStyleSelectInput[i].classList.remove('active')
        hairDisplayImg[i].classList.remove('active');
      }

      if (document.querySelector('input[name="hair_style"]:checked').value === "style01") {
        hairDisplayImg[4].classList.add('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style02") {
        hairDisplayImg[9].classList.add('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style03") {
        hairDisplayImg[14].classList.add('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style04") {
        hairDisplayImg[19].classList.add('active');

      } else if (document.querySelector('input[name="hair_style"]:checked').value === "style05") {
        hairDisplayImg[24].classList.add('active');
      } 

    } else {
      console.log('yes')
    }
  }
}


/* EYES SELECTION */
let eyesSelectBtn = document.getElementById('js_eyes');
let eyesSelectImg = eyesSelectBtn.querySelectorAll('img');
const eyesDisplay = document.getElementById('js_eyes_display');
let eyesDisplayImg = eyesDisplay.querySelectorAll('img');

let eyesDisplayImgInit = eyesDisplay.querySelector('.init');


Array.from(eyesSelectImg).forEach((eyeImg) => {
  eyeImg.addEventListener('click', (e) => {
    let currentClass = e.target.getAttribute('class');

    for (let i = 0; i < eyesSelectImg.length && i < eyesDisplayImg.length; i++) {
      if (eyesSelectImg[i].getAttribute('class') === currentClass && 
      eyesSelectImg[i].getAttribute('class') === eyesDisplayImg[i].getAttribute('class')) {
        eyesDisplayImg[i].classList.add('active'); 
        eyesDisplayImgInit.classList.remove('init'); 
      } else if (eyesSelectImg[i].getAttribute('class') != currentClass) {
        eyesDisplayImg[i].classList.remove('active');
      } else {
        eyesDisplayImg[i].classList.add('active');
      }
    }
  })
})

/* LIPS SELECTION */
let lipsSelectBtn = document.getElementById('js_lips');
let lipsSelectImg = lipsSelectBtn.querySelectorAll('img');
const lipsDisplay = document.getElementById('js_lips_display');
let lipsDisplayImg = lipsDisplay.querySelectorAll('img');

let lipsDisplayImgInit = lipsDisplay.querySelector('.init');

Array.from(lipsSelectImg).forEach((lipImg) => {
  lipImg.addEventListener('click', (e) => {
    let currentClass = e.target.getAttribute('class');

    for (let i = 0; i < lipsSelectImg.length && i < lipsDisplayImg.length; i++) {
      if (lipsSelectImg[i].getAttribute('class') === currentClass && 
      lipsSelectImg[i].getAttribute('class') === lipsDisplayImg[i].getAttribute('class')) {
        lipsDisplayImg[i].classList.add('active');
        lipsDisplayImgInit.classList.remove('init'); 
      } else if (lipsSelectImg[i].getAttribute('class') != currentClass) {
        lipsDisplayImg[i].classList.remove('active');
      } else {
        lipsDisplayImg[i].classList.add('active'); 
      }
    }
  })
})


/* BODY SELECTION */
let bodySelectBtn = document.getElementById('js_body');
let bodySelectImg = bodySelectBtn.querySelectorAll('img');
const bodyDisplay = document.getElementById('js_body_display');
let bodyDisplayImg = bodyDisplay.querySelectorAll('img');

let bodyDisplayImgInit = bodyDisplay.querySelector('.init');

Array.from(bodySelectImg).forEach((bodyImg) => {
  bodyImg.addEventListener('click', (e) => {
    let currentClass = e.target.getAttribute('class');

    for (let i = 0; i < bodySelectImg.length && i < bodyDisplayImg.length; i++) {
      if (bodySelectImg[i].getAttribute('class') === currentClass && 
      bodySelectImg[i].getAttribute('class') === bodyDisplayImg[i].getAttribute('class')) {
        bodyDisplayImg[i].classList.add('active'); 
        bodyDisplayImgInit.classList.remove('init');
      } else if (bodySelectImg[i].getAttribute('class') != currentClass) {
        bodyDisplayImg[i].classList.remove('active');
      } else {
        bodyDisplayImg[i].classList.add('active');
      }
    }
  })
})