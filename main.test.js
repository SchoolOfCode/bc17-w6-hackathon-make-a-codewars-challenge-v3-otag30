import { test } from "vitest"; //`test` is a function located within the Vitest package. It allows to define test cases.

/* Check if Vitest is detecting your test file and the test within it by calling "test()". 
By default, tests pass and only fail if something went wrong or didn't meet our expectations.*/

test("main test should pass", () => {
  // console.log("test")
});

import { petCare } from "./main";

test("Feed pet will decrease hunger and increase energy", () => {
  expect(petCare("Feed", "Hunger", "Energy")).toMatch("Hunger ⬇️ + Energy ⬆️"); //toMatch asserts if a string matches a regular expression or a string
});

test("Play with pet will increase hapinnes and decrease energy", () => {
  expect(petCare("Play", "Hapiness", "Energy")).toMatch(
    "Happiness ⬆️ + Energy ⬇️"
  );
});

test("Pet Rest increases energy and increases hunger", () => {
  expect(petCare("Rest", "Energy", "Hunger")).toMatch("Energy ⬆️ + Hunger ⬆️");
});

/*import { test, expect } from "vitest";
import { checkLength } from "./main.js";

test("should return -1 for strings with an odd length", () => {
  const expected = -1;
  const actual = checkLength("table");
  expect(actual).toBe(expected);
});

test("should return 1 for strings with an even length", () => {
  const expected = 1;
  const actual = checkLength("wizard");
  expect(actual).toBe(expected);
});*/
