// ======= DOM HTML =======
const tbody=document.querySelector("tbody");
const mode=document.querySelector("#light");
const modal=document.querySelector(".modal");

// ========= Get all products from local storage =======
let cart=JSON.parse(localStorage.getItem("cart"));

// ======= Check whether in cart has items or not =====
if(cart.length== 0){
    document.querySelector(".number").style.display="none";
}
else{
    document.querySelector(".number").textContent=cart.length;
    document.querySelector(".number").style.display="";
}


// ========= Local Storage =======
let saveCart=()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
}

// ====== Light mode =======
let darkMode=()=>{
    mode.classList.toggle("fa-toggle-on");
}

// ======= Display cart function =======
let displayCart=()=>{
    let price=document.querySelector(".total").firstElementChild.firstElementChild;
    let total_price=0;
    for(let index in cart){
        total_price+=parseInt(cart[index].price);
        let tr= document.createElement("tr");
        tr.dataset.index=index;
    
        // ====== Create td 1======
        let td1=document.createElement("td");
        // ======== Create div class: name ===
        let cart_name=document.createElement("div");
        cart_name.classList.add("name", "cart_name");
        // ===== Create image =====
        let image=document.createElement("img");
        image.src=cart[index].url;
        // ======= Create div class: cart_detail ======
        let cart_detail=document.createElement("div");
        cart_detail.className="cart_detail";
        // ======= Create h2======
        let h2=document.createElement("h2");
        h2.textContent=cart[index].title;
        // ======= Create div class: rate =====
        let div_rate=document.createElement("div");
        div_rate.className="rate";
        let stars=cart[index].star;
        for(let i=0; i<stars; i++){
            let i=document.createElement("i");
            i.className="fa fa-star";
            div_rate.appendChild(i);
        }
        // ======= Create p =====
        let p=document.createElement("p");
        p.textContent="SIZE: " + cart[index].size;
        // ====== Appendchild to div cart_detail=====
        cart_detail.append(h2, div_rate, p);
        // ========= AppendChild to cart_name ======
        cart_name.append(image, cart_detail)
        // Append cart_name to td1
        td1.appendChild(cart_name);

        //  Create td2 
        let td2=document.createElement("td");
        //Create input
        let input=document.createElement("input");
        input.type="number";
        input.className="quantity";
        input.min="1";
        input.value="1";
        input.style.textAlign="center";
        td2.appendChild(input);

        // Create td3
        let td3=document.createElement("td");
        td3.textContent="$"+cart[index].price;

        //Create td4
        let td4=document.createElement("td");
        // Create div button
        let div_btn_delete=document.createElement("div");
        div_btn_delete.className="btn_detail card_button btn_delete_cart";
        //create button delete
        let button=document.createElement("button");
        button.type="button";
        button.className="delete";
        button.textContent="Delete";
        button.addEventListener("click", deleteCart);
        div_btn_delete.appendChild(button);
        td4.appendChild(div_btn_delete);

        // Appedn all td to tr
        tr.append(td1, td2, td3, td4);
        tbody.appendChild(tr);
    }
    price.textContent="$"+total_price;
}

// ========= Delete cart =======
let deleteCart=(event)=>{
    let index=event.target.parentElement.parentElement.parentElement.dataset.index;
    cart.splice(index,1);
    saveCart();
    location.reload();
}

// ======= Check Out =====
let checkOut=()=>{
    modal.style.display="block";
}
// ======== Call functions ========
displayCart();
