var isBurgerMenuClicked = false;
const clickMobileBurgerMenu = () => {
    const myMenu = document.getElementsByClassName("sidebar-wrapper")[0];
    isBurgerMenuClicked = !isBurgerMenuClicked;
    if (isBurgerMenuClicked) {
        myMenu.classList.add("visible")
    } else {
        myMenu.classList.remove("visible")
    }
};