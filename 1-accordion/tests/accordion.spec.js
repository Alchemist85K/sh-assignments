// @ts-check
import { test, expect } from '@playwright/test';

test.describe('Accordion', () => {
  test('init accordion', async ({ page }) => {
    await page.goto('http://127.0.0.1:8080/');

    await expect(page.locator('[name=section1]')).toBeHidden();
    await expect(page.locator('[name=section2]')).toBeHidden();
    await expect(page.locator('[name=section3]')).toBeHidden();
  });

  test('open section1 when clicking button', async ({ page }) => {
    await page.goto('http://127.0.0.1:8080/');

    await page.getByText('Section 1 - HTML').click();
    await expect(page.locator('[name=section1]')).toBeVisible();

    await page.getByText('Section 2 - CSS').click();
    await expect(page.locator('[name=section2]')).toBeVisible();

    await page.getByText('Section 3 - JavaScript').click();
    await expect(page.locator('[name=section3]')).toBeVisible();
  });

  test('toggle section when clicking button', async ({ page }) => {
    await page.goto('http://127.0.0.1:8080/');

    await expect(page.locator('[name=section1]')).toBeHidden();
    await expect(page.locator('[name=section2]')).toBeHidden();
    await expect(page.locator('[name=section3]')).toBeHidden();

    await page.getByText('Section 1 - HTML').click();

    await expect(page.locator('[name=section1]')).toBeVisible();
    await expect(page.locator('[name=section2]')).toBeHidden();
    await expect(page.locator('[name=section3]')).toBeHidden();

    await page.getByText('Section 1 - HTML').click();

    await expect(page.locator('[name=section1]')).toBeHidden();
    await expect(page.locator('[name=section2]')).toBeHidden();
    await expect(page.locator('[name=section3]')).toBeHidden();
  });

  test('close section when clicking another accordion', async ({ page }) => {
    await page.goto('http://127.0.0.1:8080/');

    await page.getByText('Section 1 - HTML').click();

    await expect(page.locator('[name=section1]')).toBeVisible();
    await expect(page.locator('[name=section2]')).toBeHidden();
    await expect(page.locator('[name=section3]')).toBeHidden();

    await page.getByText('Section 2 - CSS').click();

    await expect(page.locator('[name=section1]')).toBeHidden();
    await expect(page.locator('[name=section2]')).toBeVisible();
    await expect(page.locator('[name=section3]')).toBeHidden();

    await page.getByText('Section 3 - JavaScript').click();

    await expect(page.locator('[name=section1]')).toBeHidden();
    await expect(page.locator('[name=section2]')).toBeHidden();
    await expect(page.locator('[name=section3]')).toBeVisible();

    await page.getByText('Section 3 - JavaScript').click();
    await expect(page.locator('[name=section1]')).toBeHidden();
    await expect(page.locator('[name=section2]')).toBeHidden();
    await expect(page.locator('[name=section3]')).toBeHidden();
  });
});
