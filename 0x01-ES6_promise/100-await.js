import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const photo = await uploadPhoto();
  const user = await createUser();
  return Promise.all([photo, user]).then((result) => ({
    photo: result[0],
    user: result[1],
  })).catch(() => ({
    photo: null,
    user: null,
  }));
}
