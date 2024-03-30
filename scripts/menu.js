const menu = document.getElementById("menu");
const burgerButton = document.getElementById("burger");


// const burgerMenu = () => {
//   burgerButton.addEventListener('click', function() {
//     document.querySelector("header").classList.toggle("open")
//   })

//   burgerMenu()
// }
document.addEventListener("DOMContentLoaded", function() {
  burgerButton.addEventListener('click', function() {
    document.querySelector('header').classList.toggle('open')
    })
})


const openMenu = () => {
  menu.classList.remove("hidden");
};

const closeMenu = () => {
  menu.classList.add("hidden");
};

const handleTriggerMouseOver = (event) => {
  const trigger = event.target;

  trigger.classList.add("menu__item_active");

  openMenu();
};

const handleTriggerMouseOut = (event) => {
  const trigger = event.target;
  if (event.relatedTarget.id !== menu.id) {
    closeMenu();
    trigger.classList.remove("menu__item_active");
  }
};

const setMenuPosition = (trigger) => {
  menu.style.left = `${trigger.offsetLeft - 30}px`;
  menu.style.top = `${trigger.offsetTop + trigger.offsetHeight}px`;
};

const initMenu = (triggerId) => {
  const trigger = document.getElementById(triggerId);

  setMenuPosition(trigger);

  trigger.addEventListener("mouseenter", handleTriggerMouseOver);

  trigger.addEventListener("mouseleave", handleTriggerMouseOut);

  menu.addEventListener("mouseleave", () => {
    closeMenu();
    trigger.classList.remove("menu__item_active");
  });

  return () => {
    trigger.removeEventListener("mouseover", handleTriggerMouseOver);

    trigger.removeEventListener("mouseout", handleTriggerMouseOut);
  };
};

export { initMenu };
