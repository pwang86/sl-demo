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
<<<<<<< HEAD

=======
    
fetch('https://github.com/pwang86/sl-demo/blob/master/assets/record.json')
  .then(response => response.json())
  .then(data => console.log(data));
>>>>>>> 5da2b6bba88c3f880a3578ab15df038f983d41a5

function displayList() {
    const container = document.getElementById("recordList");
    displayRecord(container, record);
}