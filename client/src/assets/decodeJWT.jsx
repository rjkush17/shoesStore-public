import { jwtDecode } from "jwt-decode";

export const decode = (token) => {
  const decoded = jwtDecode(token);
  console.log("token decoded ");
  delete decoded.user.password;
  return decoded.user;
};
