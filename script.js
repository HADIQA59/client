/* =================================================
   SURPRISE POPUP
================================================= */

const surpriseButton =
    document.getElementById("surpriseButton");

const modalContainer =
    document.getElementById("modalContainer");

const closeButton =
    document.getElementById("close");

const modalBackground =
    document.getElementById("modalBackground");


/* OPEN */

surpriseButton.addEventListener("click", function () {

    modalContainer.classList.add("active");

    document.body.style.overflow = "hidden";

});


/* CLOSE */

function closeModal() {

    modalContainer.classList.remove("active");

    document.body.style.overflow = "";

}

closeButton.addEventListener(
    "click",
    closeModal
);

modalBackground.addEventListener(
    "click",
    closeModal
);


/* ESCAPE */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =================================================
   FLOATING PETALS
================================================= */

const petals =
    document.querySelector(".petals");

for (let i = 0; i < 20; i++) {

    const petal =
        document.createElement("div");

    petal.className = "petal";


    /* Heart or star */

    petal.innerHTML =
        i % 3 === 0
            ? "♥"
            : "✦";


    /* Position */

    petal.style.left =
        Math.random() * 100 + "%";


    /* Delay */

    petal.style.animationDelay =
        Math.random() * 8 + "s";


    /* Speed */

    petal.style.animationDuration =
        7 +
        Math.random() * 8 +
        "s";


    /* Size */

    petal.style.fontSize =
        10 +
        Math.random() * 12 +
        "px";


    petals.appendChild(petal);

}


/* =================================================
   SMOOTH SCROLL
================================================= */

const links =
    document.querySelectorAll(
        'a[href^="#"]'
    );

links.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const id =
                this.getAttribute("href");

            const target =
                document.querySelector(id);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});


/* =================================================
   IMAGE LOADING
================================================= */

const images =
    document.querySelectorAll("img");

images.forEach(function (image) {

    image.style.opacity = "0";

    image.style.transition =
        "opacity 0.8s ease";


    image.addEventListener(
        "load",
        function () {

            image.style.opacity = "1";

        }
    );


    /* If image already loaded */

    if (image.complete) {

        image.style.opacity = "1";

    }

});