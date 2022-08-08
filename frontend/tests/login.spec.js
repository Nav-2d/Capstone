import { test, expect } from "@playwright/test";

test("Login successfully", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator('[placeholder="Enter your email address"]').click();
  await page
    .locator('[placeholder="Enter your email address"]')
    .fill("navdeep@gmail.com");
  await page.locator('[placeholder="Enter your password"]').click();
  await page.locator('[placeholder="Enter your password"]').fill("navdeep");
  await page.locator('button:has-text("Sign In")').click();
  await expect(page).toHaveURL("http://localhost:3000/timetable-dashboard");
});

test("add new timetable and delete", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator('[placeholder="Enter your email address"]').click();
  await page
    .locator('[placeholder="Enter your email address"]')
    .fill("navdeep@gmail.com");
  await page.locator('[placeholder="Enter your password"]').click();
  await page.locator('[placeholder="Enter your password"]').fill("navdeep");
  await page.locator('button:has-text("Sign In")').click();
  await expect(page).toHaveURL("http://localhost:3000/timetable-dashboard");

  await page.locator('a:has-text("Add")').click();
  await expect(page).toHaveURL("http://localhost:3000/add-timetable");
  await page.locator('input[name="term_code"]').click();
  await page.locator('input[name="term_code"]').fill("testterm");
  await page.locator('input[name="subject"]').click();
  await page.locator('input[name="subject"]').fill("testsubject");
  await page.locator("text=Save").click();
  await expect(page).toHaveURL("http://localhost:3000/timetable-dashboard");
  await page.locator("text=testterm").waitFor();
  await expect(page.locator("text=testterm")).toBeVisible();

  await page
    .locator("tr", {
      has: page.locator("text=testterm"),
    })
    .locator("button", { hasText: "Delete" })
    .click();
  await page.locator("#delete").click();
});

test("Logout successfully", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.locator('[placeholder="Enter your email address"]').click();
  await page
    .locator('[placeholder="Enter your email address"]')
    .fill("navdeep@gmail.com");
  await page.locator('[placeholder="Enter your password"]').click();
  await page.locator('[placeholder="Enter your password"]').fill("navdeep");
  await page.locator('button:has-text("Sign In")').click();
  await expect(page).toHaveURL("http://localhost:3000/timetable-dashboard");
  await page.locator("text=Logout").click();
  await expect(page).toHaveURL("http://localhost:3000/");
});
