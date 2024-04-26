import { getData } from './api.js';

document
  .querySelector('#btn-signin')
  .addEventListener('click', async function () {
    try {
      let data = await getData({ start: 0, limit: 20 });
      console.log(data);
      data = await getData({ start: 21, limit: 20 });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  });
