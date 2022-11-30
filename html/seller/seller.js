// ========= DOM HTML ========
const table=document.querySelector("table");
const dialog_container=document.querySelector(".dialog_container");
const dialog_edit=document.querySelector(".dialog_edit");
const name_product=document.querySelector("#name");
const price_product=document.querySelector("#price");
const currency=document.querySelector("#currency");
const img_product=document.querySelector("#image");
const more_info=document.querySelector("#more_info");


// ========== Variable=====
let all_products=[
    {   url:"http://127.0.0.1:49344/img/blackJacket.jpg",
        title:"Glennaker Rain Jacket",
        price:30,
        star: 3,
        size: "L",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
    },
    {   url:"http://127.0.0.1:49344/img/airmax.png",
        title:"Flannel Lined Jacket",
        price:70,
        size: "XL",
        star: 4,
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
    },
    {
        url:"http://127.0.0.1:49344/img/colorful.png",
        title:"Colorful Jacket",
        price:70,
        star: 5,
        size: "XL",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
    },
    {   url:"http://127.0.0.1:49344/img/brownJacket.png",
        title:"Flannel Lined Jacket",
        price:40,
        star:5,
        size: "XXL",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
    },
    {   url:"https://m.media-amazon.com/images/I/61cjcbDKXoL._AC_UY879_.jpg",
        title:"Jordan 9999",
        price:40,
        star:5,
        size: "M",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
    },
    {   url:"https://m.media-amazon.com/images/I/71HJma0PdFL._AC_UX695_.jpg",
        title:"Nike 6666",
        price:20,
        star:3,
        size: "L",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
    }
    ]

    // ========== Local storage=====
let saveData=()=>{
    localStorage.setItem("products", JSON.stringify(all_products));
}
    
let loadStorge=()=>{
    let product_storage=JSON.parse(localStorage.getItem("products"));
    if(product_storage!=null){
        all_products=product_storage;
    }
}

// ====== Hide function=====
let hide=(element)=>{
    element.style.display="none";
}
// ====== Show function =====
let show=(element)=>{
    element.style.display="block";
}

// =========== Display product for seller =======
let displaySellerProduct=()=>{
    document.querySelector("tbody").remove();
    let tbody=document.createElement("tbody");
    for(let index in all_products){
        let tr=document.createElement("tr");
        tr.dataset.index=index;
        // ===== create td 1=====
        let td1=document.createElement("td");
        let name=document.createElement("div");
        name.className="name";

        let td_img=document.createElement("img");
        td_img.src=all_products[index].url;
        name.appendChild(td_img);

        let h2=document.createElement("h2");
        h2.textContent=all_products[index].title;
        name.appendChild(h2);

        td1.append(name)

        // ===== create td 2=====
        let td2=document.createElement("td");
        td2.textContent="$"+all_products[index].price;

        // ======= create td 3 ======
        let td3=document.createElement("td");
        td3.className="info";
        td3.textContent=all_products[index].description;

        // ======= create td 4 ======
        let td4=document.createElement("td");
        let action=document.createElement("div");
        action.classList.add("btn_detail", "card_button", "action");
        // ====== create action buttons=====
        let btn1=document.createElement("button");
        btn1.type="button";
        btn1.textContent="Edit";
        btn1.addEventListener("click", edit);
        let btn2=document.createElement("button");
        btn2.className="delete seller_delete";
        btn2.type="button";
        btn2.textContent="Delete";
        btn2.addEventListener("click",deleteProduct);
        action.append(btn1, btn2);
        td4.appendChild(action);

        // ====== append to tr ====
        tr.append(td1, td2, td3, td4);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
}

// ========= On Add =====
let onAdd=()=>{
    show(dialog_container);
}
// ======= Cancel function ======
let cancel=()=>{
    hide(dialog_container);
    hide(dialog_edit)
}

// ======= Add product =======
let addProduct = ()=>{
    let newProduct={};
    let isTrue=true;

    let name_product=document.querySelector("#name");
    let more_info=document.querySelector("#more_info");
    let price_product=document.querySelector("#price");
    let currency=document.querySelector("#currency");
    let img_product=document.querySelector("#image");
    let size=document.querySelector("#size");

    // ==== Get value from input =======
    newProduct.url=img_product.value;
    newProduct.title=name_product.value;
    newProduct.price=price_product.value;
    newProduct.star=5;
    newProduct.size=size.value;
    newProduct.description=more_info.value;
    newProduct.currency=currency.value;
    
    if(name_product.value.length>30 || name_product.value===""){
        isTrue=false;
        alert("Check your product name");
    }
    if(more_info.value===""){
        isTrue=false;
        alert("Fill your description");
    }
    if(price_product.value<1){
        isTrue=false;
        alert("Enter a valid price");
    }
    if(currency.value=="Choose your currency ..."){
        isTrue=false;
        alert("Choose your currency");
    }
    if(img_product.value==""){
        isTrue=false;
        alert("Please add product image");
    }
    if(isTrue){
        hide(dialog_container);
        all_products.push(newProduct);
        saveData();
        displaySellerProduct();
    }
}

// ======= Edit product ========
let edit = (event)=>{
    let index=event.target.parentElement.parentElement.parentElement.dataset.index;
    let btn=event.target.textContent;
    console.log(btn);
    console.log(index);
    
    document.querySelector("#name2").value=all_products[index].title;
    document.querySelector("#more_info2").value=all_products[index].description;
    document.querySelector("#price2").value=all_products[index].price;
    document.querySelector("#image2").value=all_products[index].url;
    document.querySelector("#size2").value=all_products[index].size;
    
    all_products.splice(index, 1);
    show(dialog_edit);
    console.log("me")
}

let editProduct = (event)=>{
    let index=event.target;
    let newEdit={};
    console.log(index);

    newEdit.url=document.querySelector("#image2").value;
    newEdit.title=document.querySelector("#name2").value;
    newEdit.price= document.querySelector("#price2").value;
    newEdit.star=5;
    newEdit.size= document.querySelector("#size2").value;
    newEdit.description=document.querySelector("#more_info2").value;
    all_products.splice(index, 0, newEdit);
    saveData();
    hide(dialog_edit)
}



// ======== Delete product ========
let deleteProduct=(event)=>{
    let index=event.target.parentElement.parentElement.parentElement.dataset.index;
    console.log(index);
    all_products.splice(index,1);
    saveData();
    displaySellerProduct();
}



// ======== Call function=======
loadStorge();
displaySellerProduct();

