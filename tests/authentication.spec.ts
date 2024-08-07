import{test, expect} from  '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://demoqa.com/login');
    
});

test.describe('Authentication',() => {
    test.only('Successfull login', async ({page}) => {
    await page.getByAltText('michald').isVisible(),
    expect(page.getByRole('button', {name: 'Log out'})).toBeVisible();
 });
});
