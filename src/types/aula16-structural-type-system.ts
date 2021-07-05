type VerifyUserFn = (user: User, sendValues: User) => boolean;
type User = { username: string; password: string };

const verify: VerifyUserFn = (user, sendValues) => {
  return (
    user.username === sendValues.username &&
    user.password === sendValues.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456' };
const loggedIn = verify(bdUser, sentUser);
console.log(loggedIn);
