import './mobile_menu.css';

const mobileMenu = (id) => {
  let SELECTED_BUTTON;

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
  })();
};

export default mobileMenu;
