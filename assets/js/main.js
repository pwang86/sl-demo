const clickMobileBurgerMenu = () => {
    const myMenu = document.getElementById('mySidebar');
    const mydisplay = myMenu.style.display;
    if (mydisplay === 'block') {
        myMenu.style.display = 'none';
    } else {
        myMenu.style.display = 'block';
    }
};