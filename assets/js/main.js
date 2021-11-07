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
    
let jsonRecord = `[
    {
        "model": "WR841N",
        "location": "A0C1",
        "version": "14.0",
        "date": "2021-11-11",
        "isTPG": "false",
        "isNZ": "false",
        "quantity": "100"
    },
    {
        "model": "WA850RE",
        "location": "A0C2",
        "version": "6.0",
        "date": "2021-11-11",
        "isTPG": "false",
        "isNZ": "false",
        "quantity": "120"
    },
    {
        "model": "M5 (2P)",
        "location": "A0D1",
        "version": "6.0",
        "date": "2021-11-11",
        "isTPG": "false",
        "isNZ": "false",
        "quantity": "120"
    },
    {
        "model": "VR300",
        "location": "A0D2",
        "version": "3.20",
        "date": "2021-11-11",
        "isTPG": "false",
        "isNZ": "false",
        "quantity": "180"
    }
]`;
const record = JSON.parse(jsonRecord);
console.log(record);

function displayList() {
    const container = document.getElementById("recordList");
    displayRecord(container, record);
}