function greeting(user) {
    var _a;
    return "Greetings, ".concat(user.id, " - ").concat(user.name, "!\n").concat(user.role, "\n").concat((_a = user.email) !== null && _a !== void 0 ? _a : "");
}
console.log(greeting({ id: 454, name: "Jero", role: "Level 1 Engineer" }));
