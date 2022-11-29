
// =====DOM HTML ====
const img=document.querySelector("#slide");


// ===== Variable====
let images=["img1.jpg", "img-1.jpg"];
let countImg=0;

let slideShow=()=>{
    let image="../../img/slideShow/";
    image+=images[countImg];
    img.src=image;
    img.style.transform="translateX(-180deg)";
    img.style.transition="all 0.5s"

    if(countImg< images.length-1){
        countImg++;
    }
    else{
        countImg=0
    }
    setTimeout("slideShow()", 2000);
}
slideShow()



