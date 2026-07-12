/*=========================
      HERO TYPING EFFECT
=========================*/

const typingText = document.getElementById("typing");

if (typingText) {

    const words = [
        "We Build Websites",
        "We Build Mobile Apps",
        "We Build Cloud Solutions",
        "We Build Digital Products"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentWord = words[wordIndex];

        if (isDeleting) {

            charIndex--;

        } else {

            charIndex++;

        }

        typingText.textContent = currentWord.substring(0, charIndex);

        let speed = isDeleting ? 35 : 70;

        // Word completed
        if (!isDeleting && charIndex === currentWord.length) {

            speed = 900;
            isDeleting = true;

        }

        // Word deleted
        else if (isDeleting && charIndex === 0) {

            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            speed = 250;

        }

        setTimeout(typeEffect, speed);

    }

    typeEffect();

}