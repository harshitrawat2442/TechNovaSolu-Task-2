const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

const name=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const service=document.getElementById("service");
const message=document.getElementById("message");
const result=document.getElementById("formMessage");

result.innerHTML="";
result.className="";

document.querySelectorAll(".error").forEach(el=>{
el.classList.remove("error");
});

if(name.value.trim()==""){

name.classList.add("error");
result.innerHTML="Please enter your name.";
result.className="error";
return;

}

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value)){

email.classList.add("error");
result.innerHTML="Please enter a valid email.";
result.className="error";
return;

}

if(phone.value.trim().length<10){

phone.classList.add("error");
result.innerHTML="Please enter a valid phone number.";
result.className="error";
return;

}

if(service.value==""){

service.classList.add("error");
result.innerHTML="Please select a service.";
result.className="error";
return;

}

if(message.value.trim()==""){

message.classList.add("error");
result.innerHTML="Please enter your message.";
result.className="error";
return;

}

result.innerHTML="✅ Your message has been sent successfully!";
result.className="success";

form.reset();

});

}