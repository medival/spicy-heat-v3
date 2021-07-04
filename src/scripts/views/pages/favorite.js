import FavoriteRestoIdb from '../../data/favorite-resto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
			<section class="resto">
				<div class="resto__container">
					<h2 class="resto__label"> Your Favorite Restaurant </h2>
					<div id="resto" class="resto__list">
            <h2 class="resto__empty_resto"> You don't have any favorite restaurant </h2>
					</div>
				</div>
			</section>
		`;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getAllRestos();
    const restosContainer = document.querySelector('#resto');
    restos.forEach((resto) => {
      console.log(resto);
      restosContainer.innerHTML += createRestoItemTemplate(resto);
    });
  },

};

export default Favorite;
