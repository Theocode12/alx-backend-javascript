import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const errMessage = {
    photo: null,
    user: null,
  };
  const photo = await uploadPhoto().catch(errMessage);
  const user = await createUser().catch(errMessage);
  return Promise.all([photo, user]).then((result) => ({
    photo: result[0],
    user: result[1],
  })).catch(() => (errMessage));
}
