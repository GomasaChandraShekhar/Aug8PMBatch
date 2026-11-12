import { test, expect } from '@playwright/test';
import { faker, fakerEN_IN } from '@faker-js/faker';

test("Faker Test Data", async ({ page }) => {

    console.log(fakerEN_IN.person.fullName());
    console.log(fakerEN_IN.phone.number());
    console.log(fakerEN_IN.location.state());
    console.log(fakerEN_IN.internet.email());
    console.log(faker.string.uuid());


});



