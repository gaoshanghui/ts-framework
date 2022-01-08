import { User } from './models/User';

const user = new User({ name: 'John', age: 30 });

user.on('change', () => {
  console.log('User changed');
});

user.on('change', () => {
  console.log('User changed again');
});

user.on('save', () => {
  console.log('User saved');
});

user.trigger('sdasda');
