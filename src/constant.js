const BASE_URL = import.meta.env.VITE_BASE_URL;

// roles

const UserRolesEnum = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
  PARTNER: "partner",
  SUBPARTNER: "subpartner",
};
export const AvailableUserRoles = Object.values(UserRolesEnum);

export default BASE_URL;
