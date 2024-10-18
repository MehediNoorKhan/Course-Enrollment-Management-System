const { PrismaClient } = require('@prisma/client');
const { faker } = require('@faker-js/faker');
const prisma = new PrismaClient();

async function main() {
  // Create some example categories
  const category1 = await prisma.category.create({
    data: {
      title: 'Web Development',
      description: 'Courses about web development',
    },
  });

  const category2 = await prisma.category.create({
    data: {
      title: 'Data Science',
      description: 'Courses about data science',
    },
  });

  // Create some example users (instructors)
  const instructor1 = await prisma.users.create({
    data: {
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.fullName(),
      role: 'Instructor',
    },
  });

  const instructor2 = await prisma.users.create({
    data: {
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.fullName(),
      role: 'Instructor',
    },
  });

  const categories = [category1, category2];
  const instructors = [instructor1, instructor2];

  // Number of courses to create
  const numCourses = 25;

  for (let i = 0; i < numCourses; i++) {
    const course = await prisma.courses.create({
      data: {
        title: faker.lorem.words(3),
        description: faker.lorem.sentences(2),
        price: parseFloat(faker.commerce.price()),
        discount: faker.datatype.float({ min: 0, max: 50 }),
        code: faker.random.alphaNumeric(6),
        classDuration: faker.datatype.number({ min: 1, max: 5 }),
        courseDuration: faker.datatype.number({ min: 10, max: 60 }),
        credit: faker.datatype.float({ min: 1, max: 5 }),
        numberOfClasses: faker.datatype.number({ min: 5, max: 30 }),
        status: faker.datatype.boolean(),
        availableSeats: faker.datatype.number({ min: 10, max: 100 }),
        numberOfTests: faker.datatype.number({ min: 1, max: 10 }),
        testDescription: faker.lorem.sentence(),
        numberOfNotes: faker.datatype.number({ min: 5, max: 20 }),
        image: faker.image.imageUrl(),
        numberOfRating: faker.datatype.number({ min: 0, max: 100 }),
        averageRating: faker.datatype.float({ min: 0, max: 5 }),
        instructorId: instructors[faker.datatype.number({ min: 0, max: instructors.length - 1 })].id,
        categoryId: categories[faker.datatype.number({ min: 0, max: categories.length - 1 })].id,
      },
    });

    console.log(`Created course with ID: ${course.id}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
