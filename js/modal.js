const openBtn = document.querySelector("[data-modal-open]");
const closeBtn = document.querySelector("[data-modal-close]");
const modalOverlay = document.querySelector("[data-modal-overlay]");

const openBtnMob = document.querySelector("[data-modal-open-mobile]");
const closeBtnMob = document.querySelector("[data-modal-close-mobile]");
const mobileMeny = document.querySelector("[data-modal-mobile]");

openBtn.onclick = doTheThing;
closeBtn.onclick = doTheThing;

function doTheThing() {
  modalOverlay.classList.toggle("is-open");
}

openBtnMob.onclick = doMobileMenu;
closeBtnMob.onclick = doMobileMenu;

function doMobileMenu() {
  mobileMeny.classList.toggle("is-open");
}
