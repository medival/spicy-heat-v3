import LikeButtonInitiator from '../../src/scripts/utils/like-button-initiator';

const createLikeButtonPresenterWithRestaurant = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    resto,
  });
};

export { createLikeButtonPresenterWithRestaurant };
