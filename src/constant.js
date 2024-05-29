const BASE_URL = import.meta.env.VITE_BASE_URL;

// roles

const UserRolesEnum = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
  PARTNER: "partner",
};
export const AvailableUserRoles = Object.values(UserRolesEnum);

export default BASE_URL;

// convert iso date to dd/mm/yyyy

export const convertDob = (isoDate) => {
  // Create a new Date object from the ISO date string
  const date = new Date(isoDate);

  // Extract day, month, and year from the date object
  const day = date.getDate();
  const month = date.getMonth() + 1; // Note: Month starts from 0
  const year = date.getFullYear();

  // Pad the day and month with leading zeros if necessary
  const paddedDay = day < 10 ? "0" + day : day;
  const paddedMonth = month < 10 ? "0" + month : month;

  // Return the DOB in the format dd mm yyyy
  return `${paddedDay}-${paddedMonth}-${year}`;
};
