// Enable string or number
let password: string | number = 20;

// Union in type aliases
type UserInfo = {
  first: string;
  last: string;
  age: number;
};
type AccountDetails = {
  email: string;
  password: string;
};
let user: UserInfo | AccountDetails = {
  first: "YX",
  last: "elite",
  age: 24,
};
console.log(user);

// Multi-type array
const items: (number | string)[] = [3, 6, "test"];
console.log(items);