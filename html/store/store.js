
// =====DOM HTML ====
const img = document.querySelector("#slide");
const card_container = document.querySelector(".card_container");
const product_detail = document.querySelector(".detail");
const search_container = document.querySelector(".search_container");
const store_banner=document.querySelector(".store_banner");
const header= document.querySelector(".header");
const mode=document.querySelector("#light");
const login=document.querySelector(".form_container");

// ===== Variable ====
let cart=[];
// ====== Data =====

let all_products = [
    {
        url: "../../img/pant1.png",
        title: "Jordan 9999",
        price: 40,
        currency: "USD",
        star: 5,
        size: "M",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
    },
    {
        url: "../../img/jacket1.png",
        title: "Nike 6666",
        price: 20,
        currency: "USD",
        star: 3,
        size: "L",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempo"
    },
    {
        url: "../../img/jacket2.png",
        title: "Hoodies Hooded Sweatshirt",
        price: 40,
        currency: "USD",
        star: 5,
        size: "L",
        description: "Unisex Christmas Hoodie 3D Printed Cosplay Hoodies Hooded Sweatshirt Pullover for Men Women Adults Youth"
    },
    {
        url: "../../img/jacket3.png",
        title: "Hoodies Hooded Sweatshirt",
        price: 20,
        currency: "USD",
        star: 3,
        size: "M",
        description: "Pplicable Scenarios: Suitable For Daily Wear, Hanging Out, Traveling, Home Decoration, Etc. Suitable For Spring, Autumn Wear."
    },
    {
        url: "../../img/pant2.png",
        title: "Homllyer Ripped Jeans",
        price: 20,
        currency: "USD",
        star: 2,
        size: "XL",
        description: "The Homllyer Men's Relaxed Fit Leg jean features the timeless five pocket design for a look that shines at the restaurant, work, or at home among family and friends."
    },
    {
        url: "../../img/whiteJacket.png",
        title: "Homllyer Ripped Jeans",
        price: 50,
        currency: "USD",
        star: 4,
        size: "XL",
        description: "The Homllyer Men's Relaxed Fit Leg jean features the timeless five pocket design for a look that shines at the restaurant, work, or at home among family and friends."
    },
    {
        url: "../../img/shoe1.png",
        title: "Air Jordan 1 Retro",
        price: 200,
        currency: "USD",
        star: 4,
        size: "XL",
        description: "The Homllyer Men's Relaxed Fit Leg jean features the timeless five pocket design for a look that shines at the restaurant, work, or at home among family and friends."
    },
    {
        url: "../../img/shoe5.png",
        title: "Air Jordan 4 'Fire Red' 2020",
        price: 720,
        currency: "USD",
        star: 5,
        size: "XL",
        description: "The Homllyer Men's Relaxed Fit Leg jean features the timeless five pocket design for a look that shines at the restaurant, work, or at home among family and friends."
    },
    {
        url: "../../img/shoe6.png",
        title: "Air Jordan 1 Mid SE",
        price: 2000,
        currency: "USD",
        star: 5,
        size: "L",
        description: "The Homllyer Men's Relaxed Fit Leg jean features the timeless five pocket design for a look that shines at the restaurant, work, or at home among family and friends."
    },
    {
        url: "../../img/shoe7.png",
        title: "Jordan",
        price: 800,
        currency: "USD",
        star: 5,
        size: "L",
        description: "The Homllyer Men's Relaxed Fit Leg jean features the timeless five pocket design for a look that shines at the restaurant, work, or at home among family and friends."
    },
    {
        url: "../../img/shoe9.png",
        title: "Air Jordan Why Not Zer0",
        price: 650,
        currency: "USD",
        star: 5,
        size: "L",
        description: "The Homllyer Men's Relaxed Fit Leg jean features the timeless five pocket design for a look that shines at the restaurant, work, or at home among family and friends."
    },
    {
        url: "../../img/shoe10.png",
        title: "Air Jordan 5 2Lab5 elephant",
        price: 500,
        currency: "USD",
        star: 5,
        size: "L",
        description: "The Homllyer Men's Relaxed Fit Leg jean features the timeless five pocket design for a look that shines at the restaurant, work, or at home among family and friends."
    }
]

// ====== Dark mode =======
let darkMode=()=>{
    mode.classList.toggle("fa-toggle-on");
}

// ======= Local Storge =======
let saveData = () => {
    localStorage.setItem("products", JSON.stringify(all_products));
}

let saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

let loadStorge = () => {
    let product_storage = JSON.parse(localStorage.getItem("products"));
    let cart_storage = JSON.parse(localStorage.getItem("cart"));
    if (product_storage !== null) {
        all_products = product_storage;
    }
    if (cart_storage !== null) {
        cart = cart_storage;
    }
    checkCartItem();
}

//  ===== Check cart has items or not====
let checkCartItem=()=>{
     if(cart.length== 0){
        document.querySelector(".number").style.display="none";
    }
    else{
        document.querySelector(".number").textContent=cart.length;
        document.querySelector(".number").style.display="";
    }
}


// ======= Display products =======
let dispalyProduct = () => {

    for (let index=0; index < all_products.length; index++) {
        // card 
        let card = document.createElement("div");
        card.className = "card";
        card.dataset.index = index;
        // card_img 
        let card_img = document.createElement("div");
        card_img.className = "card_img";
        // img 
        let img = document.createElement("img");
        img.src = all_products[index].url;
        card_img.appendChild(img);
        // card_footer
        let card_footer = document.createElement("div");
        card_footer.className = "card_footer";
        card_footer.dataset.index = index;
        // card_title 
        let card_title = document.createElement("div");
        card_title.className = "card_title";
        // title 
        let title = document.createElement("p");
        title.className = "title";
        title.textContent = all_products[index].title;
        // price 
        let price = document.createElement("p");
        price.id = "price";
        price.textContent = "$" + all_products[index].price;
        // appendChild to card_title
        card_title.append(title, price);
        // card_rate
        let card_rate = document.createElement("div");
        card_rate.className = "card_rate";
        // span 
        let star = all_products[index].star;
        for (let i = 0; i < star; i++) {
            let icon = document.createElement("i");
            icon.className = "fa fa-star";
            // appendChild to card_rate
            card_rate.appendChild(icon);
        }
        // card_button 
        let card_button = document.createElement("div");
        card_button.className = "card_button";
        // button : btn1
        let btn1 = document.createElement("button");
        btn1.type = "button";
        btn1.textContent = "Detail";
        btn1.addEventListener("click", showDetail)
        // btn2 
        let btn2 = document.createElement("button");
        btn2.type = "button";
        btn2.textContent = "Add cart";
        btn2.addEventListener("click", addCart);
        // appendChild to card_button
        card_button.append(btn1, btn2);
        // appendChild to card_footer 
        card_footer.append(card_title, card_rate, card_button);
        // appen all child to card 
        card.append(card_img, card_footer)
        card_container.appendChild(card);
    }
}


// ======= Search Product =====
let search = () => {
    let cards = document.querySelectorAll(".card");
    let input = document.querySelector("#search").value.toLowerCase();
    for (let i = 0; i < cards.length; i++) {
        let card_footer = cards[i].lastElementChild;
        let card_title = card_footer.firstElementChild;
        let title = card_title.firstElementChild.textContent.toLowerCase();
        if (title.indexOf(input) > -1) {
            cards[i].style.display = "";
        }
        else { 
            cards[i].style.display = "none";
        }
    }
}

// ======== Sort product =====
let sortCost=(price)=>{
    let cards = document.querySelectorAll(".card");
    for (let i = 0; i < cards.length; i++) {
        let card_footer = cards[i].lastElementChild;
        let card_title = card_footer.firstElementChild;
        let cost=card_title.lastElementChild.textContent.trim();
        if(Number(cost.substring(1)) <= price  || price===0){
            cards[i].style.display = "";
        }
        else{
            cards[i].style.display = "none";
        }
    }
}

let sort=()=>{
    let price=document.querySelector("#price").value;
    sortCost(Number(price));
}

// =======Hide function ======
let hide = (element) => {
    element.style.display = "none";
}

// =======Show function =======
let show = (element) => {
    element.style.display = "";
}

//====== Show detail product_details function =======
let showDetail = (event) => {
    hide(card_container);
    hide(search_container);
    hide(header);
    hide(store_banner);
    let index = event.target.parentElement.parentElement.parentElement.dataset.index;

    // create div img
    let div_img = document.createElement("div");
    div_img.className = "img";

    // create img 
    let img = document.createElement("img");
    img.src = all_products[index].url;

    // appendchild to div_img 
    div_img.appendChild(img);

    // create img_details
    let img_detail = document.createElement("div");
    img_detail.className = "img_detail";
    img_detail.dataset.index=index;

    // create h1
    let h1 = document.createElement("h1");
    h1.textContent = all_products[index].title;
    img_detail.append(h1);

    // create img_rate 
    let img_rate = document.createElement("div");
    img_rate.className = "img_rate";
    let star = all_products[index].star;
    for (let i=0; i < star; i++) {
        let icon = document.createElement("i");
        icon.className = "fa fa-star";
        img_rate.appendChild(icon);
    }
    img_detail.appendChild(img_rate);

    // create description 
    let description = document.createElement("div");
    description.className = "description";
    // create p 
    let p = document.createElement("p");
    p.textContent = all_products[index].description;

    // appendChild to description
    description.appendChild(p);
    img_detail.appendChild(description);

    // Price
    let price = document.createElement("p");
    let bold1 = document.createElement("b");
    bold1.textContent = "Price: ";
    let span1 = document.createElement("span");
    span1.textContent = "$" + all_products[index].price;
    price.append(bold1, span1);
    img_detail.appendChild(price);

    // Size 
    let size = document.createElement("p");
    let bold2 = document.createElement("b");
    bold2.textContent = "Size: ";
    let span2 = document.createElement("span");
    span2.textContent = all_products[index].size;
    size.append(bold2, span2);
    img_detail.appendChild(size);

    //button detail
    let btn_detail = document.createElement("div");
    btn_detail.classList.add("card_button", "btn_detail");

    //Btn buy 
    let btn_back= document.createElement("button");
    btn_back.type = "button";
    btn_back.textContent = "Back";
    btn_back.addEventListener("click", hideDetail);

    // Btn add to cart
    let btn_cart = document.createElement("button");
    btn_cart.type = "button";
    btn_cart.textContent = "Add Cart";
    btn_cart.addEventListener("click", addCart);
    btn_detail.append(btn_back, btn_cart);
    img_detail.appendChild(btn_detail);

    // append all child to product_details
    product_detail.append(div_img, img_detail);

    show(product_detail);
}

// ======= Hide detail ======
let hideDetail=()=>{
    location.reload();
}

// ======= Add product to cart function =======
let addCart = (event) => {
    let newCart = {};
    let index = event.target.parentElement.parentElement.dataset.index;
    // Add to newCart
    newCart=all_products[index];
    if (typeof(cart) == "object") {
        cart.push(newCart);
        saveCart();
    }
    else if (all_products[index].title != event_title) {
        cart.push(newCart);
        saveCart();
    }
    location.reload();   
}

// ======= LOGIN ====
let showLogin=()=>{
    login.style.display="block";
}
let hideLogin=()=>{
    login.style.display="none";
}

// ======= Call Function====== 
saveData();
loadStorge();
dispalyProduct();




