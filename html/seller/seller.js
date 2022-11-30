// ========= DOM HTML ========
const table=document.querySelector("table");
const dialog_container=document.querySelector(".dialog_container");
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
        let btn2=document.createElement("button");
        btn2.className="delete";
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

// ========= Onadd product =====
let onAdd=()=>{
    show(dialog_container);
}
// ======= Cancel function ======
let cancel=()=>{
    hide(dialog_container);
}

// ======= Add product =======
let addProduct = ()=>{
    hide(dialog_container);
    let newProduct={};
    let isTrue=true;
    let name_product=document.querySelector("#name");
    let more_info=document.querySelector("#more_info");
    let price_product=document.querySelector("#price");
    let currency=document.querySelector("#currency");
    let img_product=document.querySelector("#image");
    let size=document.querySelector("#size");

    newProduct.url=img_product.value;
    newProduct.title=name_product.value;
    newProduct.price=price_product.value;
    newProduct.star=5;
    newProduct.size=size.value;
    newProduct.description=more_info.value;
    newProduct.currency=currency.value;
    
    if(name_product.value.length>30){
        isTrue=false;
        alert("Your product name is too long");
    }
    if(more_info.value===""){
        isTrue=false;
        alert("Fill your description");
    }
    if(price_product.value<1){
        isTrue=false;
        alert("Enter a valid price");
    }
    if(currency.value!== "dollar" || currency.value!=="pound"){
        isTrue=false;
        alert("Enter a valid currency");
    }
    if(size.value=="L"){
        alert("YOU")
    }
    let img_extension=img_product.value.slice(img_product.value.length-3, img_product.value.length);
    console.log(img_extension);
    if(img_extension!=="png" || img_extension!=="jpg" || img_extension!=="gif"){
        isTrue=false;
        alert("Enter a valid image format");
    }
    if(isTrue){
        
    }
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

