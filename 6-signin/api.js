export const signIn = (id, pw) => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      fetch(`./users.json?ts=${Date.now()}`)
        .then(res => res.json())
        .then(users => {
          console.log(users, id, users[id]);
          if (!users[id]) {
            reject('id is not exist');
          } else {
            if (pw === users[id]) {
              resolve('login success');
            } else {
              reject('password is not a match');
            }
          }
        })
        .catch(e => console.error(e));
    }, 200);
  });
};
