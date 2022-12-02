
// ========= DOM HTML ========
const table = document.querySelector("table");
const dialog_container = document.querySelector(".dialog_container");
const name_product = document.querySelector("#name");
const price_product = document.querySelector("#price");
const currency = document.querySelector("#currency");
const img_product = document.querySelector("#image");
const more_info = document.querySelector("#more_info");
const btn_dialog = document.querySelector(".btn_dialog");
const mode=document.querySelector("#light");

// ========== Get all products from local storage=====
let all_products = JSON.parse(localStorage.getItem("products"))

// ========== Local storage=====
let saveData = () => {
    localStorage.setItem("products", JSON.stringify(all_products));
}

let loadStorge = () => {
    let product_storage = JSON.parse(localStorage.getItem("products"));
    if (product_storage != null) {
        all_products = product_storage;
    }
}

// ====== Light mode =======
let darkMode=()=>{
    mode.classList.toggle("fa-toggle-on");
}

// ====== Hide function=====
let hide = (element) => {
    element.style.display = "none";
}
// ====== Show function =====
let show = (element) => {
    element.style.display = "block";
}

// =========== Display product for seller =======
let displaySellerProduct = () => {
    document.querySelector("tbody").remove();
    let tbody = document.createElement("tbody");
    for (let index in all_products) {
        let tr = document.createElement("tr");
        tr.dataset.index = index;
        // ===== create td 1=====
        let td1 = document.createElement("td");
        let name = document.createElement("div");
        name.className = "name";

        let td_img = document.createElement("img");
        td_img.src = all_products[index].url;
        name.appendChild(td_img);

        let h2 = document.createElement("h2");
        h2.textContent = all_products[index].title;
        name.appendChild(h2);

        td1.append(name)

        // ===== create td 2=====
        let td2 = document.createElement("td");
        td2.textContent = "$" + all_products[index].price;

        // ======= create td 3 ======
        let td3 = document.createElement("td");
        td3.className = "info";
        td3.textContent = all_products[index].description;

        // ======= create td 4 ======
        let td4 = document.createElement("td");
        let action = document.createElement("div");
        action.classList.add("btn_detail", "card_button", "action");
        // ====== create action buttons=====
        let btn1 = document.createElement("button");
        btn1.type = "button";
        btn1.textContent = "Edit";
        btn1.addEventListener("click", edit);
        let btn2 = document.createElement("button");
        btn2.className = "delete seller_delete";
        btn2.type = "button";
        btn2.textContent = "Delete";
        btn2.addEventListener("click", deleteProduct);
        action.append(btn1, btn2);
        td4.appendChild(action);

        // ====== append to tr ====
        tr.append(td1, td2, td3, td4);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

// ========= On Add =====
let onAdd = () => {
    btn_dialog.lastElementChild.textContent = "Add Product";
    show(dialog_container);
}
// ======= Cancel function ======
let cancel = () => {
    hide(dialog_container);
    location.reload();
}

// URL validate from www.freecodecamp.com
const isValidUrl = urlString => {
    try {
        return Boolean(new URL(urlString));
    }
    catch (e) {
        return false;
    }
}
console.log(isValidUrl("fas"))

// ======= Add product =======
let addProduct = () => {
    let newProduct = {};
    let isTrue=true;

    let name_product = document.querySelector("#name");
    let more_info = document.querySelector("#more_info");
    let price_product = document.querySelector("#price");
    let currency = document.querySelector("#currency");
    let img_product = document.querySelector("#image");
    let size = document.querySelector("#size");

    // ==== Get value from input =======
    newProduct.url = img_product.value;
    newProduct.title = name_product.value;
    newProduct.currency = currency.value;
    newProduct.price = checkCurrency(currency.value, price_product.value); 
    newProduct.star = 5;
    newProduct.size = size.value;
    newProduct.description = more_info.value;

    if (name_product.value.length > 30 || name_product.value === "") {
        isTrue=false;
        document.querySelector(".error_name").style.display = "block";
    }
    if (more_info.value === "") {
        isTrue=false;
        document.querySelector(".error_decription").style.display = "block";
    }
    if (price_product.value < 1) {
        isTrue=false;
        document.querySelector(".error_price").style.display = "block";
    }
    if (currency.value == "Choose your currency ...") {
        isTrue=false;
        document.querySelector(".error_currency").style.display = "block";
    }
    if (img_product.value == "" || !(isValidUrl(img_product.value))) {
        isTrue=false;
        document.querySelector(".error_image").style.display = "block";
    }
    if (size.value == "Size") {
        isTrue=false;
        document.querySelector(".error_size").style.display = "block";
    }
    if (isTrue) {
        all_products.push(newProduct);
        hide(dialog_container);
        saveData();
        displaySellerProduct();
        location.reload();
    }
}

// ====== Check currency =====
let checkCurrency = (currency, price) => {
    if(currency==="pound"){
        return price * 1.21;
    }
    else {
        return price;
    }
}

// ====== Reset input======
let resetInput = () => {
    document.querySelector("#name").value = "";
    document.querySelector("#more_info").value="";
    document.querySelector("#price").value="";
    document.querySelector("#currency").value="";
    document.querySelector("#image").value="";
    document.querySelector("#size").value="";
}




// ======= Edit product ========
let edit = (event) => {
    btn_dialog.lastElementChild.textContent = "Edit"
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;

    document.querySelector("#name").value = all_products[index].title;
    document.querySelector("#more_info").value = all_products[index].description;
    document.querySelector("#price").value = all_products[index].price;
    document.querySelector("#image").value = all_products[index].url;
    document.querySelector("#size").value = all_products[index].size;

    all_products.splice(index, 1);
    show(dialog_container);
}



// ======== Delete product ========
let deleteProduct = (event) => {
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;
    all_products.splice(index, 1);
    saveData();
    displaySellerProduct();
}


// ======== Call function=======
loadStorge();
displaySellerProduct();
