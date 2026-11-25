Running Playwright Tests
Task 1: List all tests without running them

Command:

bash
npx playwright test --list

Result:

33 tests listed (11 tests × 3 browsers).
No tests executed.
Task 2: Run Internet login tests on Chromium

Command:

bash
npx playwright test internet-login.spec.ts --project=chromium

Result:

3 passed
0 failed
Task 3: Run one test by line number

Command:

bash
npx playwright test saucedemo-sort:35 --project=chromium

Result:

1 passed
0 failed
Task 4: Run tests containing "error" on Chromium

Command:

bash
npx playwright test --project=chromium -g "error"

Result:

Tests run: [Add actual result]
Passed: [Add actual result]
Failed: [Add actual result]
Matching test names: [Add actual test names]
Task 5: Run sorting tests excluding cart

Command:

bash
npx playwright test --project=chromium -g "sort" --grep-invert "cart"

Result:

2 passed
0 failed
Task 6: Break a test, fix it, and run last failed

Commands:

bash
npx playwright test --project=chromium
npx playwright test --last-failed --project=chromium

Result:

Intentionally broke one test.
Confirmed that the test failed.
Fixed the test.
Ran only the previously failed test using --last-failed.
1 passed after fixing.
Task 7: Repeat sorting tests five times

Command:

bash
npx playwright test -g "sort" --project=chromium --repeat-each=5

Result:

15 passed
0 failed
No flaky tests observed during these runs.

Explanation:

The test cheapest product can be added to the cart also ran because Playwright's -g "sort" searches the full test title, including the describe group name.

Our group name is Sauce Demo sorting, so all three tests matched the word "sort". Repeating each test five times resulted in 15 executions.

Task 8: Use test.only

Command:

bash
npx playwright test saucedemo-sort --project=chromium

Result:

Only 1 test ran because of test.only.
Removed test.only after completing the exercise.
