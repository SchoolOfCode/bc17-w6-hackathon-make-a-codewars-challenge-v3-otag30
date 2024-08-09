import { test } from "vitest"; //`test` is a function located within the Vitest package. It allows to define test cases.

/* Check if Vitest is detecting your test file and the test within it by calling "test()". 
By default, tests pass and only fail if something went wrong or didn't meet our expectations.*/

test("main test should pass", () => {
  // console.log("test")
});

import { petCare } from "./main";

test("Click Feed pet will decrease hunger and increase energy", () => {
  expect(petCare("Feed", "Hunger", "Energy")).toMatch("Hunger ⬇️ + Energy ⬆️"); //toMatch asserts if a string matches a regular expression or a string
});

test("Click Play with pet will increase happinnes and decrease energy", () => {
  expect(petCare("Play", "Happiness", "Energy")).toMatch(
    "Happiness ⬆️ + Energy ⬇️"
  );
});

test("Click Pet Rest increases energy and increases hunger", () => {
  expect(petCare("Rest", "Energy", "Hunger")).toMatch("Energy ⬆️ + Hunger ⬆️");
});
