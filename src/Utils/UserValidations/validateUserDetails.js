const validateDetails = (email, password) => {
  const isEmailVaid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailVaid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";

  return null;
};

export default validateDetails;

export const openaiKey = process.env.REACT_APP_OPENAI_KEY;
