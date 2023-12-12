export const sortUsers = (users, sortOrder) => {
  return users
    ? sortOrder === "email"
      ? users.sort((a, b) => a.email.localeCompare(b.email))
      : users.sort((a, b) => a.name.localeCompare(b.name))
    : [];
};
