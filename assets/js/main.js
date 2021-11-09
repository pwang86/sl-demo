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
    
const myInit = { 
    method: 'GET',
    headers: {
        'Content-Type': 'text/plain'
    },
    mode: 'cors',
    cache: 'default',
    credentials: 'omit'
};
let myRequest = new Request("https://github.com/pwang86/sl-demo/blob/master/assets/record.json", myInit);

fetch(myRequest)
  .then(response => response.json())
  .then(data => {
      console.log(data);
  })
  .catch(error => {
      console.error('Error:', error);
  });

function displayList() {
    const container = document.getElementById("recordList");
    displayRecord(container, record);
}
