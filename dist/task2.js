"use strict";
function getInfo(user) {
    return `no=${user.no}, name="${user.name}", isActive=${user.isActive}, code=${user.code}, signature=${user.signature}, pwd=${user.pwd}, key=${typeof user.key}`;
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
