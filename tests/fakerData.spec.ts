import { test } from '@playwright/test';
import { faker, fakerEN_IN } from '@faker-js/faker';

test("Faker Test Data", async () => {

    console.log(faker.person.fullName());
    console.log(faker.phone.number());
    console.log(faker.location.state());
    console.log(faker.internet.email());
    console.log(faker.string.uuid());

});



