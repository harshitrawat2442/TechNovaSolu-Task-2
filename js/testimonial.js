const testimonials = document.querySelectorAll(".testimonial");

const nextBtn = document.getElementById("nextTestimonial");
const prevBtn = document.getElementById("prevTestimonial");

let index = 0;

function showSlide(i){

    testimonials.forEach(item=>{

        item.classList.remove("active");

    });

    testimonials[i].classList.add("active");

}

if(testimonials.length){

    showSlide(index);

}

nextBtn.addEventListener("click",()=>{

    index++;

    if(index>=testimonials.length){

        index=0;

    }

    showSlide(index);

});

prevBtn.addEventListener("click",()=>{

    index--;

    if(index<0){

        index=testimonials.length-1;

    }

    showSlide(index);

});

setInterval(()=>{

    index++;

    if(index>=testimonials.length){

        index=0;

    }

    showSlide(index);

},5000);