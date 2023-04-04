import { PrismaClient } from '@prisma/client';
// const faker = require('faker');
// import * as faker from 'faker';
// import faker from 'faker';
import {faker} from '@faker-js/faker';
// import faker from '../../node_modules/faker';

const prisma = new PrismaClient();

const generateUsers = (count) => {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
  return users;
};

const seed = async () => {
//   console.log(`seeding `);
  const users = generateUsers(20);
  for (let user of users) {
    await prisma.user.create({ data: user });
  }
  console.log('Seed data completed!');
};

seed()
  .catch((error) => console.error(error))
  .finally(async () => {
    await prisma.$disconnect();
  });
