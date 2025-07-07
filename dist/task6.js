"use strict";
function greeting(user) {
    return `Greetings, \n${user.id ?? ""} ${user.name}!\n${user.role ?? ""}\n${user.email ?? ""}`;
}
console.log(greeting({ name: "Jero" }));
