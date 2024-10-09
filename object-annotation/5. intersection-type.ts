type UserInfo = {
  first: string;
  last: string;
  age: number;
};

type AccountDetails = {
  email: string;
  password: string;
};

type User = UserInfo & AccountDetails;

const user: User = {
  first: 'YX',
  last: 'elite',
  age: 24,
  email: 'yxelite@test.com',
  password: '123456'
}

console.log(`First: ${user.first}, Last: ${user.last}, Age: ${user.age}, Email: ${user.email}, Password: ${user.password}`)