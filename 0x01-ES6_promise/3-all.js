import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const prom1 = uploadPhoto();
  const prom2 = createUser();
  const promAll = Promise.all([prom1, prom2]);
  return promAll.then((results) => {
    console.log(results[0].body, results[1].firstName, results[1].lastName);
  })
    .catch(() => console.log('Signup system offline'));
}
