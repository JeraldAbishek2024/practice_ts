var userRole;
(function (userRole) {
    userRole["Admin"] = "ADMIN";
    userRole["User"] = "USER";
    userRole["Guest"] = "GUEST";
})(userRole || (userRole = {}));
function checkAccess(role) {
    return role === userRole.Admin || role === userRole.User;
}
function isAccessed(x) {
    if (x) {
        return "Access Granted!";
    }
    else {
        return "Access Denied!";
    }
}
var currentRole = userRole.Admin;
console.log(isAccessed(checkAccess(currentRole)));
