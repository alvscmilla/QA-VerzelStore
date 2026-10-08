const { test, expect } = require('@playwright/test');

test('CT01 - aplicar cupom válido BEMVINDO10', async ({ page }) => {
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

    // Adiciona a Garrafa Térmica ao carrinho
    await page.getByRole('article', { name: 'Garrafa Térmica 750ml' })
        .getByRole('button', { name: 'Adicionar ao carrinho' })
        .click();

    // Abre o carrinho
    await page.getByRole('link', { name: /Carrinho/ }).click();

    // Informa o cupom
    await page.getByLabel('Cupom de desconto').fill('BEMVINDO10');

    // Aplica o cupom
    await page.getByRole('button', { name: /aplicar/i }).click();

    // Verifica se o desconto foi aplicado
    await expect(page.getByText('Desconto (BEMVINDO10)')).toBeVisible();
    await expect(page.getByText('- R$ 5,00')).toBeVisible();
});