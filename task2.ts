interface User {
  no: number;
  name: string;
  isActive: boolean;
  code: null;
  signature: undefined;
  pwd: any;
  key: unknown;
}

function getInfo(user: User): string {
  return `no=${user.no}, name="${user.name}", isActive=${user.isActive}, code=${
    user.code
  }, signature=${user.signature}, pwd=${user.pwd}, key=${typeof user.key}`;
}

console.log(
  getInfo({
    no: 454,
    name: "Jero",
    isActive: true,
    code: null,
    signature: undefined,
    pwd: 1212,
    key: "foo",
  })
);
