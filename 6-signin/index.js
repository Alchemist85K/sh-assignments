import { signIn } from './api.js';

let id = 'Sangha';
let pw = 'qwer1234';

document.querySelector('#btn-signin').addEventListener('click', function () {
  signIn(id, pw)
    .then(data => {
      console.log(data);
    })
    .catch(e => console.error(e));
});
