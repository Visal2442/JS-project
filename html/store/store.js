
// =====DOM HTML ====
const img=document.querySelector("#slide");
const card_container=document.querySelector(".card_container");
const product_detail=document.querySelector(".detail");

// ===== Variable====
let images=["img1.jpg", "img-1.jpg"];
let count_img=0;
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
                }
                ]


// =======Local Storge=======
let saveData=()=>{
    localStorage.setItem("Products", JSON.stringify(all_products));
}

let loadStorge=()=>{
    let product_storage=JSON.parse(localStorage.getItem("products"));
    if(product_storage!=null){
        all_products=product_storage;
    }
}


// ======= Display products=======
let dispalyProduct=()=>{

    for(index in all_products){
        // card 
        let card=document.createElement("div");
        card.className="card";
        card.dataset.index=index;
        // card_img 
        let card_img=document.createElement("div");
        card_img.className="card_img";
        // img 
        let img=document.createElement("img");
        img.src=all_products[index].url;
        card_img.appendChild(img);
        // card_footer
        let card_footer=document.createElement("div");
        card_footer.className="card_footer";
        // card_title 
        let card_title=document.createElement("div");
        card_title.className="card_title";
        // title 
        let title=document.createElement("p");
        title.className="title";
        title.textContent=all_products[index].title;
        // price 
        let price=document.createElement("p");
        price.id="price";
        price.textContent="$"+all_products[index].price;
        // appendChild to card_title
        card_title.append(title, price);
        // card_rate
        let card_rate=document.createElement("div");
        card_rate.className="card_rate";
        // span 
        let star=all_products[index].star;
        for(i=0; i<star;i++){
            let i=document.createElement("i");
            i.className="fa fa-star";   
            // appendChild to card_rate
            card_rate.appendChild(i);
        }
        // card_button 
        let card_button=document.createElement("div");
        card_button.className="card_button";
        // button : btn1
        let btn1=document.createElement("button");
        btn1.type="button";
        btn1.textContent="Detail";
        btn1.addEventListener("click",showDetail)
        // btn2 
        let btn2=document.createElement("button");
        btn2.type="button";
        btn2.textContent="Add cart";
        // appendChild to card_button
        card_button.append(btn1, btn2);
        // appendChild to card_footer 
        card_footer.append(card_title, card_rate, card_button);
        // appen all child to card 
        card.append(card_img, card_footer)
        card_container.appendChild(card);
    }
}






// ======= Slide show function =====
let slideShow=()=>{
    let image="../../img/";
    image+=images[count_img];
    img.src=image;
    img.style.transform="translateX(-180deg)";
    img.style.transition="all 0.5s"

    if(count_img< images.length-1){
        count_img++;
    }
    else{
        count_img=0;
    }
    setTimeout("slideShow()", 2000);
}


// ======= Search function=====
let search=()=>{
    let card_container=document.querySelector(".card_container");
    let input=document.querySelector("#search").value.toLowerCase();
    let cards=card_container.querySelectorAll(".card");
    for(let i=0; i<cards.length; i++){
        let card_footer=cards[i].lastElementChild;
        let card_title=card_footer.firstElementChild;
        let title = card_title.firstElementChild.textContent.toLowerCase();
        if(title.indexOf(input)>-1){
            cards[i].style.display="";
        }
        else{
            cards[i].style.display="none";
        }
    }
}

let hide=(element)=>{
    element.style.display="none";
}
let show=(element)=>{
    element.style.display="block";
}

let showDetail=(event)=>{
    let index=event.target.parentElement.parentElement.parentElement;
    hide(card_container);
    show(product_detail);
    console.log(event.target.parentElement.parentElement.parentElement)
    // create div img
    let div_img=document.createElement("div");
    div_img.className="img";

    // create img 
    let img=document.createElement("img");
    img.src=all_products[index].url;

    // appendchild to div_img 
    div_img.appendChild(img);

    // create img_details
    let img_detail=document.createElement("div");

    // create h1
    let h1=document.createElement("h1");
    h1.textContent=all_products[index].title;
    img_detail.append(h1);

    // create img_rate 
    let img_rate=document.createElement("div");
    img_rate.className="img_rate";
    let star=all_products[index].star;
    for(i=0; i<star;i++){
        let i=document.createElement("i");
        i.className="fa fa-star";   
        // appendChild to img_rate
        img_rate.appendChild(i);
    }
    img_detail.appendChild(img_rate);

    // create description 
    let description=document.createElement("div");
    description.className="description";
    // create p 
    let p=document.createElement("p");
    p.textContent=all_products[index].description;
    // appendChild to description
    description.appendChild(p);
    img_detail.appendChild(description);

    // append all child to product_details
    product_detail.append(div_img, img_detail)
}







// ======= Function======
loadStorge();
dispalyProduct();
slideShow()



