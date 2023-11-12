export const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fetch(`./data.json?ts=${Date.now()}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(e => console.error(e));
    }, 1000);
  });
};
