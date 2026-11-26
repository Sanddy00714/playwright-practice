# Playwright Stability Test Results

## Run 1: Chromium Stability Test

### Command

```powershell
npx playwright test --project=chromium --repeat-each=10
```

### Configuration

- Browser: Chromium
- Original tests: 11
- Repetitions: 10
- Workers: 4
- Expected runs: 110

### Results

| Metric   |      Result |
| -------- | ----------: |
| Passed   |         110 |
| Failed   |           0 |
| Total    |         110 |
| Duration | 1.4 minutes |

**Status: PASS**

All 11 tests passed 10 consecutive repetitions on Chromium.

---

## Run 2: Cross-Browser Stability Test

### Command

```powershell
npx playwright test --repeat-each=3
```

### Configuration

- Browsers: Chromium, Firefox, WebKit
- Original tests: 11
- Repetitions: 3
- Workers: 4
- Expected runs: 99

### Results

| Browser   | Passed | Failed |  Total |
| --------- | -----: | -----: | -----: |
| Chromium  |     33 |      0 |     33 |
| Firefox   |     33 |      0 |     33 |
| WebKit    |     33 |      0 |     33 |
| **Total** | **99** |  **0** | **99** |

**Duration:** 2.4 minutes

**Status: PASS**

All tests passed across all three browsers.

No browser-specific failures were observed.

---

## Failure Investigation

No failures occurred in either final stability run.

### Flaky test found and fixed

**Test:** `saucedemo-sort.spec.ts` › cheapest product can be added to the cart

**Symptom:** It usually passed, but failed once during `--repeat-each=10` with a strict mode violation: the product-name locator matched 6 elements instead of 1.

**Root cause:** Timing. The assertion ran before the cart page had loaded, so it found the 6 product names still on the products page.

**First attempt (didn't work):** Scoping the locator to the item card. On the products page there are still 6 cards, so the race could still happen.

**Fix:** Wait for the cart page first with `await expect(page).toHaveURL(/cart\.html/)`, then check `toHaveCount(1)` before checking the name.

**Verification:** Re-ran it with `--repeat-each=20`, and every run passed.

## Final Stability Summary

| Metric                  |  Result |
| ----------------------- | ------: |
| Chromium repeated tests | 110/110 |
| Cross-browser tests     |   99/99 |
| Total executions        |     209 |
| Total passed            |     209 |
| Total failed            |       0 |
| Success rate            |    100% |

**FINAL STATUS: PASS**

All 209 test executions passed successfully.

The Playwright test suite demonstrates consistent behavior across Chromium, Firefox, and WebKit in these test runs.
