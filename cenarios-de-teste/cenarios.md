# Cenários de Teste

Validar as principais funcionalidades da Verzel Store relacionadas à aplicação de cupons, cálculo de descontos, regras de frete, limite de produtos no carrinho e finalização de pedidos, verificando se o comportamento da aplicação está de acordo com a documentação fornecida.

| ID   | Cenário                          | Prioridade | Execução                                     | Status |
| ---- | -------------------------------- | ---------- | -------------------------------------------- | ------ |
| CT01 | Cupom válido                     | Alta       | [Ver execução](../execucao/execucao.md#ct01) | PASSOU |
| CT02 | Variações do cupom               | Média      | [Ver execução](../execucao/execucao.md#ct02) | PASSOU |
| CT03 | Cupom inexistente                | Média      | [Ver execução](../execucao/execucao.md#ct03) | PASSOU |
| CT04 | Cupom expirado                   | Média      | [Ver execução](../execucao/execucao.md#ct04) | PASSOU |
| CT05 | Remoção do cupom                 | Média      | [Ver execução](../execucao/execucao.md#ct05) | PASSOU |
| CT06 | Alteração do carrinho com cupom  | Média      | [Ver execução](../execucao/execucao.md#ct06) | PASSOU |
| CT07 | Compra abaixo de R$ 200          | Alta       | [Ver execução](../execucao/execucao.md#ct07) | PASSOU |
| CT08 | Compra de R$ 200                 | Alta       | [Ver execução](../execucao/execucao.md#ct08) | FALHOU |
| CT09 | Compra acima de R$ 200           | Alta       | [Ver execução](../execucao/execucao.md#ct09) | PASSOU |
| CT10 | Valor restante para frete grátis | Média      | [Ver execução](../execucao/execucao.md#ct10) | PASSOU |
| CT11 | Frete + desconto                 | Alta       | [Ver execução](../execucao/execucao.md#ct11) | FALHOU |
| CT12 | Desconto no frete                | Alta       | [Ver execução](../execucao/execucao.md#ct12) | PASSOU |
| CT13 | Limite de quantidade             | Alta       | [Ver execução](../execucao/execucao.md#ct13) | PASSOU |
| CT14 | Limite de quantidade pela API    | Alta       | [Ver execução](../execucao/execucao.md#ct14) | FALHOU |
| CT15 | Finalização do pedido            | Alta       | [Ver execução](../execucao/execucao.md#ct15) | PASSOU |
