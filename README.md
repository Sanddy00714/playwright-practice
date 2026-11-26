Playwright Practice

This repository contains my Playwright automation practice project using TypeScript. I built automated tests to verify login functionality, error handling, product sorting, shopping cart operations, and checkout workflows.

The goal is to learn reliable end-to-end testing and understand how tests behave across different browsers.

Tech
Playwright with TypeScript
Node.js and npm
Chromium, Firefox, and WebKit
Visual Studio Code
Git and GitHub
Sites under test
Sauce Demo
The Internet
How to run

Install project dependencies:

bash
npm install

Install Playwright browsers:

bash
npx playwright install

Run all tests:

bash
npm test

Open Playwright UI mode:

bash
npx playwright test --ui

Run tests only on Chromium:

bash
npx playwright test --project=chromium

Run tests with repeated execution:

bash
npx playwright test --project=chromium --repeat-each=10

Tests
File What it covers
tests/login.spec.ts Sauce Demo login, logout, locked-out users, adding products to the cart, and checkout validation.
tests/internet-login.spec.ts Valid login, incorrect username, and incorrect password scenarios on The Internet.
tests/saucedemo-sort.spec.ts Sorting products by price from high to low and low to high, and adding the cheapest product to the cart.
Stability

Completed two stability testing runs successfully.

Run 1 – Chromium:

Command: npx playwright test --project=chromium --repeat-each=10
110 tests passed.
0 failures.

Run 2 – Cross-browser:

Command: npx playwright test --repeat-each=3
Chromium: 33/33 passed.
Firefox: 33/33 passed.
WebKit: 33/33 passed.
Total: 99/99 passed.

Overall result: 209/209 test executions passed (100%).

No failures or browser-specific compatibility issues were observed during these stability runs.

What I learned in Week 4
A recorded test is not necessarily a finished test. I learned to review and verify generated code instead of assuming everything is correct.
Watching tests fail is important because it helps identify problems before trusting the automation.
JavaScript sorting requires the correct comparison logic. I learned the difference between a - b and b - a for ascending and descending price order.
Playwright's -g option allows me to run tests by matching their group or test name, making debugging easier.
Playwright UI mode helps me inspect test execution visually, understand failures, and verify that the shopping cart badge correctly displays 1.

Week 4 completed: Practiced writing, debugging, repeating, and validating Playwright tests across three browsers.
