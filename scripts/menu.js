const menu = document.getElementById("menu");

const openMenu = () => {
  menu.classList.remove("hidden");
};

const closeMenu = () => {
  menu.classList.add("hidden");
};

const handleTriggerMouseOver = () => {
  openMenu();
};

const handleTriggerMouseOut = (event) => {
  if (event.relatedTarget.id !== menu.id) {
    closeMenu();
  }
};

const handleMenuMouseLeave = () => {
  closeMenu();
};

const initMenu = (triggerId) => {
  const trigger = document.getElementById(triggerId);

  trigger.addEventListener("mouseenter", handleTriggerMouseOver);

  trigger.addEventListener("mouseleave", handleTriggerMouseOut);

  menu.addEventListener("mouseleave", handleMenuMouseLeave);

  return () => {
    trigger.removeEventListener("mouseover", handleTriggerMouseOver);

    trigger.removeEventListener("mouseout", handleTriggerMouseOut);

    menu.removeEventListener("mouseleave", handleMenuMouseLeave);
  };
};

export { initMenu };
