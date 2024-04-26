const auth = [
  { email: 'bk@email.com', password: 'qwer1234' },
  { email: 'sh@email.com', password: 'asdf1234' },
];

export const signin = (email, password) => {
  return new Promise((resolve, reject) => {
    const isValid =
      auth.filter(v => v.email === email && v.password === password).length > 0;
    if (isValid) resolve('success!');
    else reject(new Error('email and password are not matched!'));
  });
};
