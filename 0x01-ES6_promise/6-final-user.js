import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [signUpUser(firstName, lastName), uploadPhoto(fileName)];
  return Promise
    .allSettled(promises)
    .then((res) => (
      res.map((x) => ({
        status: x.status,
        value: x.status === 'fulfilled' ? x.value : String(x.reason),
      }))
    ));
}
