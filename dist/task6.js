"use strict";
function greeting(user) {
    return `Greetings, \n${user.id} - ${user.name}!\n${user.role}\n${user.email ?? ""}`;
}
console.log(greeting({ id: 454, name: "Jero", role: "Level 1 Engineer" }));
