// ======= DOM HTML =======
const tbody=document.querySelector("tbody");


// ========= Variable =======
let cart=JSON.parse(localStorage.getItem("cart"));

// ========= Local Storage =======
let saveCart=()=>{
    localStorage.setItem("Cart",JSON.stringify(cart));
}


// ======= Display cart function =======
let displayCart=()=>{

    for(let index in cart){
        let tr= document.createElement("tr");
    
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
        for(let star in stars){
            let i=document.createElement("i");
            i.className="fa fa-star";
            div_rate.appendChild(i);
        }
        // ======= Create p =====
        let p=document.createElement("p");
        p.textContent="SIZE: " + cart[index].size;
        // ======== Appendchild to div cart_detail=====
        cart_detail.append(h2, div_rate, p);
        // ========= AppendChild to cart_name======
        cart_name.append(image, cart_detail)
        // ====== Append cart_name to td1====
        td1.appendChild(cart_name);

        // ====== Create td2 ======
        let td2=document.createElement("td");
        // ======= Create input =====
        let input=document.createElement("input");
        input.type="number";
        input.min="1";
        input.max="100";
        td2.appendChild(input);

        // ====== Create td3=====
        let td3=document.createElement("td");
        td3.textContent="$"+cart[index].price;

        // ====== Create td4=====
        let td4=document.createElement("td");
        // ====== Create div button =====
        let div_btn_delete=document.createElement("div");
        div_btn_delete.className="btn_detail card_button btn_delete_cart";
        // ======== create button delete======
        let button=document.createElement("button");
        button.type="button";
        button.className="delete";
        button.textContent="Delete";
        div_btn_delete.appendChild(button);
        td4.appendChild(div_btn_delete);

        // ======== Appedn all td to tr======
        tr.append(td1, td2, td3, td4);
        tbody.appendChild(tr);
    }
}

// ======== Call functions ========
displayCart();