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
/*    
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
*/
const jsonRecord = `
{
    "record": [
        {
            "model": "WR841N",
            "location": "A0C1",
            "version": "14.0",
            "date": "2021-11-11",
            "quantity": "100"
        },
        {
            "model": "WA850RE",
            "location": "A0C2",
            "version": "6.0",
            "date": "2021-11-11",
            "quantity": "120"
        },
        {
            "model": "M5 (2P)",
            "location": "A0D1",
            "version": "6.0",
            "date": "2021-11-11",
            "quantity": "120"
        },
        {
            "model": "VR300",
            "location": "A0D2",
            "version": "3.20",
            "date": "2021-11-11",
            "quantity": "180"
        },
        {
            "model": "VR1600V",
            "location": "A1C1",
            "version": "2.0",
            "date": "2021-11-12",
            "quantity": "384"
        },
        {
            "model": "Tapo C200",
            "location": "A1C2",
            "version": "1.0",
            "date": "2021-11-12",
            "quantity": "240"
        },
        {
            "model": "M4 (2P)",
            "location": "A1D1",
            "version": "3.0",
            "date": "2021-11-12",
            "quantity": "180"
        },
        {
            "model": "UB400",
            "location": "A1D2",
            "version": "1.0",
            "date": "2021-11-12",
            "quantity": "800"
        }
    ]
}`;
const recordObj = JSON.parse(jsonRecord);

function displayRecordList() {
    const container = document.getElementById("recordList");
    recordObj.record.map(item => {
        const trTag = document.createElement("tr");

        const tdModel = document.createElement("td");
        tdModel.innerHTML = item.model;

        const tdLocation = document.createElement("td");
        tdLocation.innerHTML = item.location;

        const tdVersion = document.createElement("td");
        tdVersion.innerHTML = item.version;

        const tdDate = document.createElement("td");
        tdDate.innerHTML = item.date;

        const tdQuantity = document.createElement("td");
        tdQuantity.innerHTML = item.quantity;

        const tdDetail = document.createElement("td");
        const aTag = document.createElement("a");
        aTag.innerHTML = "Detail";
        tdDetail.appendChild(aTag);

        trTag.appendChild(tdModel);
        trTag.appendChild(tdLocation);
        trTag.appendChild(tdVersion);
        trTag.appendChild(tdDate);
        trTag.appendChild(tdQuantity);
        trTag.appendChild(tdDetail);

        container.appendChild(trTag);
    });
}

window.onload = function() {
    displayRecordList();
};
