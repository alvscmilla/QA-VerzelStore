# Bugs Encontrados

## BUG-001 — Frete cobrado mesmo com subtotal de R$ 200,00

**Cenário relacionado:** CT08 — Compra de R$ 200
**Status:** Aberto

### Descrição

O sistema cobra frete de R$ 19,90 mesmo quando o subtotal dos produtos é exatamente R$ 200,00, apesar da documentação informar que compras com subtotal **maior ou igual a R$ 200,00** devem possuir frete grátis.

### Pré-condições

* Acessar a Verzel Store.
* Adicionar 2 unidades da **Mochila Urbana 20L (P005)**.
* Aplicar o cupom `BEMVINDO10`.

### Passos para reprodução

1. Adicionar 2 unidades da Mochila Urbana 20L ao carrinho.
2. Verificar o subtotal de R$ 200,00.
3. Aplicar o cupom `BEMVINDO10`.
4. Verificar o valor do frete e o total da compra.

### Resultado esperado

Como o subtotal dos produtos é exatamente **R$ 200,00**, o sistema deveria aplicar **frete grátis**, conforme a regra de frete da documentação.

Com o desconto de 10%:

* Subtotal: R$ 200,00
* Desconto: R$ 20,00
* Frete: R$ 0,00
* Total esperado: **R$ 180,00**

### Resultado obtido

O sistema manteve o frete de **R$ 19,90**, mesmo informando que faltavam **R$ 0,00** para obter frete grátis.

Valores observados:

* Subtotal: R$ 200,00
* Desconto: R$ 20,00
* Frete: R$ 19,90
* Total: **R$ 199,90**

### Evidência

`../evidencias/bugs/BUG-001-frete-200.png`

---

## BUG-002 — API permite adicionar mais de 5 unidades do mesmo produto

**Cenário relacionado:** CT14 — Limite de quantidade pela API
**Status:** Aberto

