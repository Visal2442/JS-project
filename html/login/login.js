
// ====== Check if cart has no items =======
let cart=JSON.parse(localStorage.getItem("cart"));
if(cart.length== 0){
    document.querySelector(".nb").style.display="none";
}
else{
    document.querySelector(".nb").textContent=cart.length;
    document.querySelector(".nb").style.display="";
}