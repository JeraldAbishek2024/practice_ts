interface Users {
  readonly id: number;
  name: string;
  role: string;
  email?: string;
}

function greeting(user: Users): string {
  return `Greetings, ${user.id} - ${user.name}!\n${user.role}\n${
    user.email ?? ""
  }`;
}

console.log(greeting({ id: 454, name: "Jero", role: "Level 1 Engineer" }));
