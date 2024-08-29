export const SHOW_PASSWORD = "SHOW_PASSWORD";
export const HIDE_PASSWORD = "HIDE_PASSWORD";

export const showPassword = () => {
  return {
    type: SHOW_PASSWORD,
  };
};

export const hidePassword = () => {
  return {
    type: HIDE_PASSWORD,
  };
};
