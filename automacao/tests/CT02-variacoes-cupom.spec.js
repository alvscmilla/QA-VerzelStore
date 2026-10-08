const { test, expect } = require('@playwright/test');

test('CT02 - variações do cupom BEMVINDO10', async ({ page }) => {
    await page.goto('https://verzel-store.qa-test-verzel-store.workers.dev/');

    // Adiciona a Garrafa Térmica ao carrinho
    await page.getByRole('article', { name: 'Garrafa Térmica 750ml' })
        .getByRole('button', { name: 'Adicionar ao carrinho' })
        .click();

    // Abre o carrinho
    await page.getByRole('link', { name: /Carrinho/ }).click();

    // Testa o cupom em letras minúsculas
    await page.getByLabel('Cupom de desconto').fill('bemvindo10');
    await page.getByRole('button', { name: /aplicar/i }).click();

    await expect(page.getByText('Desconto (BEMVINDO10)')).toBeVisible();
    await expect(page.getByText('- R$ 5,00')).toBeVisible();

    // Remove o cupom
    await page.getByRole('button', { name: 'Remover cupom' }).click();

    // Testa o cupom com espaços antes e depois
    await page.getByLabel('Cupom de desconto').fill(' BEMVINDO10 ');
    await page.getByRole('button', { name: /aplicar/i }).click();

    await expect(page.getByText('Desconto (BEMVINDO10)')).toBeVisible();
    await expect(page.getByText('- R$ 5,00')).toBeVisible();
});