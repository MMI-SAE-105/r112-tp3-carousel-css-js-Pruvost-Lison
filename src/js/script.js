
// *** CAROUSEL ***
// TODO


// faire defiler des commandes dans la console
const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(`.carousel__button--next`);

if (carousel) {
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -260, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: +260, behavior: "smooth" })
    });
}

// Sélectionner le premier élément du carousel
const premierItem = document.querySelector(".carousel__item");

// Obtenir la largeur du premier élément
const scrollAmount = premierItem.clientWidth;