# Running Playwright Tests

## Task 1: List All Tests Without Running Them

### Command

```bash
npx playwright test --list
```

### Result

- 33 tests listed (11 tests × 3 browsers).
- No tests executed.

**Status: PASS**

---

## Task 2: Run Internet Login Tests on Chromium

### Command

```bash
npx playwright test internet-login.spec.ts --project=chromium
```

### Result

- Passed: 3
- Failed: 0

**Status: PASS**

---

## Task 3: Run One Test by Line Number

### Command

```bash
npx playwright test saucedemo-sort:35 --project=chromium
```

### Result

- Passed: 1
- Failed: 0

**Status: PASS**

---

## Task 4: Run Tests Containing "error" on Chromium

### Command

```bash
npx playwright test --project=chromium -g "error"
```

### Result

- Tests run: [Add actual result]
- Passed: [Add actual result]
- Failed: [Add actual result]
- Matching test names: [Add actual test names]

**Status: PENDING**

---

## Task 5: Run Sorting Tests Excluding Cart

### Command

```bash
npx playwright test --project=chromium -g "sort" --grep-invert "cart"
```

### Result

- Passed: 2
- Failed: 0

**Status: PASS**

---

## Task 6: Break a Test, Fix It, and Run Last Failed

### Commands

```bash
npx playwright test --project=chromium
npx playwright test --last-failed --project=chromium
```

### Result

- Intentionally broke one test.
- Confirmed that the test failed.
- Fixed the test.
- Ran only the previously failed test using `--last-failed`.
- Passed: 1
- Failed: 0

**Status: PASS**

---

## Task 7: Repeat Sorting Tests Five Times

### Command

```bash
npx playwright test -g "sort" --project=chromium --repeat-each=5
```

### Result

- Passed: 15
- Failed: 0
- No flaky tests observed during these runs.

**Status: PASS**

### Explanation

The test `cheapest product can be added to the cart` also ran because Playwright's `-g "sort"` searches the full test title, including the `describe` group name.

Our group name is `Sauce Demo sorting`, so all three tests matched the word "sort".

Repeating each test five times resulted in 15 executions.

---

## Task 8: Use `test.only`

### Command

```bash
npx playwright test saucedemo-sort --project=chromium
```

### Result

- Only 1 test ran because of `test.only`.
- Removed `test.only` after completing the exercise.

**Status: PASS**

---

## Final Summary

| Task | Description | Result |
|---|---|---|
| 1 | List all tests | 33 listed |
| 2 | Internet login on Chromium | 3 passed |
| 3 | Run test by line number | 1 passed |
| 4 | Run tests containing "error" | Pending result |
| 5 | Sorting tests excluding cart | 2 passed |
| 6 | Break, fix, and run last failed | 1 passed |
| 7 | Repeat sorting tests 5 times | 15 passed |
| 8 | Use `test.only` | 1 test ran |

## Conclusion

Practiced different Playwright CLI commands for listing, filtering, selecting, debugging, and repeating tests.

Learned how `-g`, `--grep-invert`, `--last-failed`, `--repeat-each`, and `test.only` help control test execution.