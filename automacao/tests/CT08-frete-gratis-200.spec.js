const { test, expect } = require('@playwright/test');

test('CT08 - frete gratis para subtotal de R$ 200', async ({ page }) => {
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

    await page.getByRole('article', { name: 'Mochila Urbana 20L' })
        .getByRole('button', { name: 'Adicionar ao carrinho' })
        .click();

    await page.getByRole('link', { name: /Carrinho/ }).click();

    await page.getByRole('button', {
        name: 'Aumentar quantidade de Mochila Urbana 20L'
    }).click();

   
    await expect(page.getByText('R$ 200,00').first()).toBeVisible();

    
    const frete = page.getByRole('term', { name: 'Frete' })
        .locator('..')
        .getByRole('definition');

    await expect(frete).toHaveText('R$ 0,00');
});