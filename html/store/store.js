
// =====DOM HTML ====
const img=document.querySelector("#slide");
const card_container=document.querySelector(".card_container");


// ===== Variable====
let images=["img1.jpg", "img-1.jpg"];
let countImg=0;

// ======= Slide show function =====
let slideShow=()=>{
    let image="../../img/";
    image+=images[countImg];
    img.src=image;
    img.style.transform="translateX(-180deg)";
    img.style.transition="all 0.5s"

    if(countImg< images.length-1){
        countImg++;
    }
    else{
        countImg=0;
    }
    setTimeout("slideShow()", 2000);
}


// ======= Search function=====
let search=()=>{
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
slideShow()



