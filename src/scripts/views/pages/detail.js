import UrlParser from "../../routes/url-parser";
import RestoDBSource from "../../data/resto-source";
import EXTRA from "../../DATA";

import {
  createHeroTemplate,
  createAvailableFoodsMenu,
  createAvailableDrinksMenu,
  createCustomerReview,
  createRestoCardOverview,
  createSpanCategories,
} from "../templates/template-creator";
import LikeButtonInitiator from "../../utils/like-button-initiator";

const Detail = {
  async render() {
    return `
      <section id="resto"> </section>
      <section id="categories"> </section>
      <section class="resto">
        <div class="resto__overview__container" id="restoOverview">
        </div>
        <div class="resto__container">
          <h2 class="resto__label"> Available Foods Menu </h2>
            <div class="resto__list__menu" id="foodsMenu">
            </div>
        </div>
        <div class="resto__container resto__container__drinks">
          <h2 class="resto__label"> Available Drinks Menu </h2>
          <div class="resto__list__menu" id="drinksMenu">
          </div>
        </div>
        <div class="resto__container">
          <h2 class="resto__label"> What people says about us! </h2>
          <div id="comentar">
            <div class="reviewer" id="review">
            </div>
          </div>
        </div>
      </section>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailResto = await RestoDBSource.detailResto(url.id);
    const results = detailResto.restaurant;

    const restoContainer = document.querySelector("#resto");
    restoContainer.innerHTML += createHeroTemplate(detailResto);

    const restoOverview = document.querySelector("#restoOverview");
    restoOverview.innerHTML += createRestoCardOverview(detailResto);

    const containerInfoCategories = document.querySelector(
      "#container__info_categories"
    );
    results.categories.forEach((category) => {
      containerInfoCategories.innerHTML += createSpanCategories(category);
    });

    const foodsMenuContainer = document.querySelector("#foodsMenu");
    results.menus.foods.forEach((food, index = 0) => {
      foodsMenuContainer.innerHTML += createAvailableFoodsMenu(
        food,
        EXTRA.resto[index]
      );
    });

    const drinksMenuContainer = document.querySelector("#drinksMenu");
    results.menus.drinks.forEach((drink, index = 0) => {
      drinksMenuContainer.innerHTML += createAvailableDrinksMenu(
        drink,
        EXTRA.resto[index]
      );
    });

    const reviewerContainer = document.querySelector("#review");
    results.customerReviews.forEach((review) => {
      reviewerContainer.innerHTML += createCustomerReview(review);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      resto: {
        id: results.id,
        name: results.name,
        city: results.city,
        rating: results.rating,
        address: results.address,
        pictureId: results.pictureId,
        description: results.description,
      },
    });
  },
};

export default Detail;
