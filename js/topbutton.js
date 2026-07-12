/*=========================
    BACK TO TOP BUTTON
=========================*/

const topBtn=document.createElement("button");

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

topBtn.id="topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.right="25px";
topBtn.style.bottom="25px";
topBtn.style.width="50px";
topBtn.style.height="50px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="#2563eb";
topBtn.style.color="#fff";
topBtn.style.cursor="pointer";
topBtn.style.fontSize="20px";
topBtn.style.display="none";
topBtn.style.zIndex="999";
topBtn.style.boxShadow="0 10px 20px rgba(0,0,0,.2)";
topBtn.style.transition=".3s";

window.addEventListener("scroll",()=>{

if(window.pageYOffset>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});