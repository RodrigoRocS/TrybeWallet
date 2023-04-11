// Coloque aqui suas actions
export const VALID_EMAIL = 'VALID_EMAIL';

export const addEmail = (email) => ({
  type: VALID_EMAIL,
  payload: email,
});
