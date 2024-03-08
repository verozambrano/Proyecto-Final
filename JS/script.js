const signInBtnLink = document.querySelector(`.signInBtn-link`);
const signUpBtnLink = document.querySelector(`.signUpBtn-link`);
const wrapper = document.querySelector(`.wrapper`);

signUpBtnLink.addEventListener(`click`, () => {
    wrapper.clasList.toggle(`active`);
});

signInBtnLink.addEventListener(`click`, () => {
    wrapper.clasList.toggle(`active`);
});



    