interface Users {
  readonly id?: number | string;
  name: string;
  role?: string;
  email?: string;
}

function greeting(user: Users): string {
  return `Greetings, \n${user.id ?? ""} ${user.name}!\n${user.role ?? ""}\n${
    user.email ?? ""
  }`;
}

console.log(greeting({ name: "Jero" }));
