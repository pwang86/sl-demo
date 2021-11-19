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
            "id": "1",
            "model": "WR841N",
            "location": "A0C1",
            "version": "14.0",
            "date": "2021-11-11",
            "quantity": "100"
        },
        {
            "id": "2",
            "model": "WA850RE",
            "location": "A0C2",
            "version": "6.0",
            "date": "2021-11-11",
            "quantity": "120"
        },
        {
            "id": "3",
            "model": "M5 (2P)",
            "location": "A0D1",
            "version": "6.0",
            "date": "2021-11-11",
            "quantity": "120"
        },
        {
            "id": "4",
            "model": "VR300",
            "location": "A0D2",
            "version": "3.2",
            "date": "2021-11-11",
            "quantity": "180"
        },
        {
            "id": "5",
            "model": "VR1600V",
            "location": "A1C1",
            "version": "2.0",
            "date": "2021-11-12",
            "quantity": "384"
        },
        {
            "id": "6",
            "model": "WR841N",
            "location": "A1C2",
            "version": "14.0",
            "date": "2021-11-12",
            "quantity": "240"
        },
        {
            "id": "7",
            "model": "M5 (2P)",
            "location": "A1D1",
            "version": "6.0",
            "date": "2021-11-12",
            "quantity": "240"
        },
        {
            "id": "8",
            "model": "VR1600V",
            "location": "A1D2",
            "version": "2.0",
            "date": "2021-11-12",
            "quantity": "384"
        },
        {
            "id": "9",
            "model": "VR300",
            "location": "A2C1",
            "version": "3.2",
            "date": "2021-11-12",
            "quantity": "240"
        },
        {
            "id": "10",
            "model": "WA850RE",
            "location": "A2C2",
            "version": "6.0",
            "date": "2021-11-12",
            "quantity": "100"
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
        aTag.setAttribute("class", "link-primary");
        aTag.setAttribute("href", "#");
        aTag.setAttribute("data-bs-toggle", "modal");
        aTag.setAttribute("data-bs-target", "#detailModal");
        aTag.setAttribute("onclick", "handleClickDetail('" + item.id + "')");
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

function handleClickDetail(id) {
    const name = document.getElementById("detailName");
    name.value = recordObj.record[id].model;

    const location = document.getElementById("detailLocation");
    location.value = recordObj.record[id].location;

    const version = document.getElementById("detailVersion");
    version.value = recordObj.record[id].version;

    const date = document.getElementById("detailDate");
    date.value = recordObj.record[id].date;

    const qty = document.getElementById("detailQty");
    qty.value = recordObj.record[id].quantity;

}

function displayStockTaking() {
    const myMap = recordObj.record.reduce((acc, {model, quantity}) => acc.set(model, (acc.get(model) || 0) + parseInt(quantity)), new Map());
    const container = document.getElementById("stocktakingList");
    Array.from(myMap).map(([key,value]) => {
        const trTag = document.createElement("tr");

        const tdModel = document.createElement("td");
        tdModel.innerHTML = key;

        const tdQuantity = document.createElement("td");
        tdQuantity.innerHTML = value;

        trTag.appendChild(tdModel);
        trTag.appendChild(tdQuantity);

        container.appendChild(trTag);
    });
}

window.onload = function() {
    displayRecordList();
    displayStockTaking();
};
