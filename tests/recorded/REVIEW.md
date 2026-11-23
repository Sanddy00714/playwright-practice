Exercise 4 – Reviewing My Recorded Tests

I went through all three recorded tests and checked them using the 7-point checklist. I found that Playwright Codegen makes recording actions easy, but the generated code still needs some cleaning up and improvement.

saucedemo-sort.spec.ts
#	Check	Problem found	How I'd fix it
1	Name	The test is just called test, so it doesn't explain what it checks.	Rename it to cheapest product can be added to the cart.
2	URLs	It doesn't check whether the correct pages open after login or when going to the cart.	Add URL assertions for the inventory and cart pages.
3	Selectors	Some selectors are quite long, and the code uses a complicated div locator to click the username information.	Use simpler and more reliable locators, preferably accessible locators where possible.
4	Assertions	It selects the low-to-high sorting option but never checks whether the products are actually sorted correctly.	Check that the product prices are in ascending order before adding an item.
5	Test independence	The test uses login details directly, which is fine, but the unnecessary copy and paste actions make it look like it depends on manual steps.	Remove those actions and keep the login process independent.
6	Waiting	There are no obvious fixed waits, which is good, but the test could use more meaningful assertions to wait for the expected results.	Use Playwright's auto-waiting and web-first assertions.
7	Readability	The code has unnecessary clicks, keyboard shortcuts, and repeated locator calls.	Remove unnecessary actions and use clearer variable names.

My thoughts:

The biggest problem I noticed is that the test selects Price (low to high) but doesn't actually check whether the sorting worked. It just adds the Sauce Labs Onesie to the cart. If the sorting feature was broken, the test could still pass. I should check the product prices before adding an item.

internet-login.spec.ts
#	Check	Problem found	How I'd fix it
1	Name	The test name is only test, so it's not very descriptive.	Rename it to valid user can log in successfully.
2	URLs	It doesn't verify that the user reaches the secure area after logging in.	Add an assertion to check that the URL ends in /secure.
3	Selectors	The recorded locators use getByRole, which is readable, but the button locator includes an unusual icon character.	Use a cleaner button locator, such as getByRole('button', { name: 'Login' }).
4	Assertions	It checks the success message, which is good, but doesn't check the secure page URL.	Keep the success message assertion and add a URL assertion.
5	Test independence	The test enters its own login details, so it can run independently.	Keep the login setup inside this test.
6	Waiting	There are no unnecessary fixed waits.	Continue using Playwright's automatic waiting.
7	Readability	There are extra clicks, a Tab press, and a Logout action that isn't really needed to prove successful login.	Remove unnecessary actions and keep the test focused on successful login.

My thoughts:

This test is mostly doing the right thing because it checks the green success message. However, I think it would be better to also check that the browser actually reaches the secure page. The Logout action can be removed because the main purpose of this test is to verify successful login.

internet-bad-login.spec.ts
#	Check	Problem found	How I'd fix it
1	Name	The test is called test, which doesn't explain what it does.	Rename it to invalid login credentials display error messages.
2	URLs	It doesn't check where the application redirects after an unsuccessful login.	Add a URL assertion to verify that the user stays on or returns to /login.
3	Selectors	The Login button locator contains an unusual icon character, making it less clear.	Use a cleaner locator based on the button's accessible name.
4	Assertions	It checks the password error and username error, which is good, but the assertions include the close icon character.	Assert the actual error messages without depending on the close icon.
5	Test independence	Both invalid login attempts are inside one test, so the second attempt depends on the first attempt finishing.	Separate the invalid password and invalid username scenarios into independent tests.
6	Waiting	There are no fixed waits, which is good.	Continue using Playwright's auto-waiting.
7	Readability	It repeats the login process twice and uses extra clicks and a Tab press.	Remove unnecessary actions and make each login scenario easier to understand.

My thoughts:

I noticed that this test checks two different situations: an incorrect password and an incorrect username. This is useful, but I think they should be separate tests so it's easier to understand which scenario failed. I also noticed that the password entered in the first attempt is superSecretPassword!, which has a lowercase s, instead of the correct password's uppercase S. This is fine for an invalid-password test, but the test should clearly explain that this is intentional.

Final thoughts

After reviewing all three tests, I realised that recording actions is only the first step. A good automated test should also check that the application behaves as expected.


