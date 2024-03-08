const wrapper = document.querySelector(`.wrapper`);
const loginLink = document.querySelector(`.login-link`);
const registerLink = document.querySelector(`.register-link`);
 

registerLink.addEventListener(`click`, () => {
    wrapper.clasList.add (`active`);
});

loginLink.addEventListener(`click`, () => {
    wrapper.clasList.remove (`active`);
});



    