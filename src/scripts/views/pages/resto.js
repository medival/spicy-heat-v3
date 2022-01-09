import RestoDBSource from "../../data/resto-source";
import { createRestoItemTemplate } from "../templates/template-creator";

const Resto = {
  async render() {
    return `
     <section class="hero">
      <h1 class="hero__title"> Welcome <br> to Spicy Heat </h1>
        <img class="hero__image_home">
      <a href="#main" class="hero__cta"> DISCOVER </a>
     </section>

     <section class="resto">
      <div class="resto__container">
        <h1 class="resto__label" id="main"> Explore Restaurant & Explore Food </h1>
        <p class="resto__subtitle"> Here are a few of our favourites: </p>
        <div id="resto" class="resto__list">
        </div>
      </div>
     </section>
    `;
  },

  async afterRender() {
    const restaurant = await RestoDBSource.infoResto();
    const restaurantContainer = document.querySelector("#resto");
    restaurant.forEach((resto) => {
      restaurantContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },
};

export default Resto;
