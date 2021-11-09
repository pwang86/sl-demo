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
    
fetch('https://github.com/pwang86/sl-demo/blob/master/assets/record.json')
  .then(response => response.json())
  .then(data => console.log(data));

function displayList() {
    const container = document.getElementById("recordList");
    displayRecord(container, record);
}