const navigation = document.querySelector(".header-section__navigation");
const openIcon = document.querySelector(".btn--open");
const closeIcon = document.querySelector(".btn--close");
const BurgerMenu = document
  .querySelector(".burger-menu--btn")
  .addEventListener("click", () => {
    if (navigation.style.display === "flex") {
      navigation.style.display = "none";
      closeIcon.style.display = "none";
      openIcon.style.display = "block";
    } else {
      navigation.style.display = "flex";
      closeIcon.style.display = "block";
      openIcon.style.display = "none";
    }
  });

const resetMenu = () => {
  if (window.innerWidth >= 1060) {
    navigation.style.display = "flex";
    closeIcon.style.display = "none";
    openIcon.style.display = "none";
  } else if (window.innerWidth < 1060) {
    navigation.style.display = "none";
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
};
window.addEventListener("resize", resetMenu);
