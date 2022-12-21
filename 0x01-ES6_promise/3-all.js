import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const profile = [];
  uploadPhoto().then((result) => {
    profile.push(result.body);
  }).then(createUser)
    .then((result) => {
      profile.push(result.firstName);
      profile.push(result.lastName);
      console.log(profile.join(' '));
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
