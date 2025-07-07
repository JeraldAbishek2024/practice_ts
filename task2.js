function getInfo(user) {
    return "no=".concat(user.no, ", name=\"").concat(user.name, "\", isActive=").concat(user.isActive, ", code=").concat(user.code, ", signature=").concat(user.signature, ", pwd=").concat(user.pwd, ", key=").concat(typeof user.key);
}
console.log(getInfo({
    no: 454,
    name: "Jero",
    isActive: true,
    code: null,
    signature: undefined,
    pwd: 1212,
    key: "foo",
}));
