import './mobile_menu.css';
import homeSVG from './icons/home.svg';
import shopSVG from './icons/shop.svg';
import walletSVG from './icons/wallet.svg';
import accountSVG from './icons/account.svg';

const mobileMenu = (id) => {
  let SELECTED_BUTTON;
  const SVGs = [homeSVG, shopSVG, walletSVG, accountSVG];

  const renderButtons = () => {
    const mobileButtons = document.querySelectorAll(`.mobile-menu-choice-${id}`);
    console.log(mobileButtons);
    mobileButtons.forEach((button, i) => {
      if (i == SELECTED_BUTTON) {
        button.classList.add('selected-mobile-button');
      } else {
        button.classList.remove('selected-mobile-button');
      }
    });
  };

  const DOMHandlers = (() => {
    const handleMobileButtonClick = (e, i) => {
      SELECTED_BUTTON = i;
      renderButtons();
    };

    return {
      handleMobileButtonClick,
    };
  })();
  const DOM = (() => {
    const mobileButtons = document.querySelectorAll(`.mobile-menu-choice-${id}`);
    mobileButtons.forEach((button, i) => {
      button.addEventListener('click', (e) => DOMHandlers.handleMobileButtonClick(e, i));
    });

    const mobileSVGs = document.querySelectorAll(`.mobile-menu-icon-${id}`);
    mobileSVGs.forEach((icon, i) => {
      icon.src = SVGs[i];
    });
  })();
};

export default mobileMenu;
