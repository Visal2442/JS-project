
// =====DOM HTML ====
const img=document.querySelector("#slide");
// const card_container=document.querySelector(".card_container");


// ===== Variable====
let images=["img1.jpg", "img-1.jpg"];
let count_img=0;
let all_products=[
                {   url:"http://127.0.0.1:49344/img/blackJacket.jpg",
                    title:"Glennaker Rain Jacket",
                    price:30,
                    star: 3
                },
                {   url:"http://127.0.0.1:49344/img/airmax.png",
                    title:"Flannel Lined Jacket",
                    price:70,
                    star: 4
                },
                {
                    url:"http://127.0.0.1:49344/img/colorful.png",
                    title:"Colorful Jacket",
                    price:70,
                    star: 5
                },
                {   url:"http://127.0.0.1:49344/img/brownJacket.png",
                    title:"Flannel Lined Jacket",
                    price:40,
                    star:6
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
    // remove card_container
    document.querySelector(".card_container").remove();
    // create new card_container
    let card_container=document.createElement("div");
    card_container.className="card_container";

    for(index in all_products){
        // card 
        let card=document.createElement("div");
        card.className="card";
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
        price.textContent="$"+all_products[index].title;
        // appendChild to card_title
        card_title.append(title, price);
        // card_rate
        let card_rate=document.createElement("div");
        card_rate.className="card_rate";
        // span 
        let star=all_products[index].star;
        let span=document.createElement("span");
        for(let i=0; i<star.length; i++) {
            span.textContent+="&#9734;";
        }
        // appendChild to card_rate
        card_rate.appendChild(span);
        // card_button 
        let card_button=document.createElement("div");
        card_button.className="card_button";
        // button 
        let btn1=document.createElement("button");
        btn1.type="button";
        btn1.textContent="Dettail";
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
    document.body.appendChild(card_container);
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







// ======= Function======
loadStorge();
dispalyProduct();
slideShow()



