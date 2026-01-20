export const getRole = () => {
  return localStorage.getItem("role");
};

export const isAdmin = () => {
  return getRole() === "ROLE_ADMIN";
};

export const isSurveyor = () => {
  return getRole() === "ROLE_SURVEYOR";
};
