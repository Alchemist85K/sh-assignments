const _getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fetch(`./data.json?ts=${Date.now()}`)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(e => console.error(e));
    }, 1000);
  });
};

export const getData = async ({ start = 0, limit = 20 }) => {
  try {
    const data = await _getData();
    return data.slice(start, start + limit);
  } catch (e) {
    throw e;
  }
};
