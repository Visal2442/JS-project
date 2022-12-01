const  notification=document.querySelector(".nb");

let cart=JSON.parse(localStorage.getItem("cart"));
if(cart.length== 0){
    notification.style.display="none";
}
else{
    notification.style.display="";
}