enum userRole {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

function checkAccess(role: userRole): boolean {
  return role === userRole.Admin || role === userRole.User;
}

function isAccessed(x: boolean): string {
  if (x) {
    return "Access Granted!";
  } else {
    return "Access Denied!";
  }
}
const currentRole = userRole.Admin;

console.log(isAccessed(checkAccess(currentRole)));
