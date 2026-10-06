# Cenários de Teste

> Validar as principais funcionalidades da Verzel Store relacionadas à aplicação de cupons, cálculo de descontos, regras de frete, limite de produtos no carrinho e finalização de pedidos, verificando se o comportamento da aplicação está de acordo com a documentação fornecida.
 
| ID       | Cenário                          | O que será testado                                                             |
| -------- | -------------------------------- | ------------------------------------------------------------------------------ |
| **CT01** | Cupom válido                     | Aplicar `BEMVINDO10` e verificar o desconto de 10%.                            |
| **CT02** | Variações do cupom               | Testar maiúsculas, minúsculas e espaços antes/depois do código.                |
| **CT03** | Cupom inexistente                | Verificar mensagem de cupom inválido e ausência de desconto.                   |
| **CT04** | Cupom expirado                   | Verificar mensagem de cupom expirado e ausência de desconto.                   |
| **CT05** | Mais de um cupom                 | Verificar se apenas um cupom pode ser aplicado por vez.                        |
| **CT06** | Remoção do cupom                 | Remover um cupom aplicado e verificar o recálculo dos valores.                 |
| **CT07** | Compra abaixo de R$ 200          | Verificar aplicação do frete de R$ 19,90.                                      |
| **CT08** | Compra de R$ 200                 | Verificar se o valor exato de R$ 200 concede frete grátis.                     |
| **CT09** | Compra acima de R$ 200           | Verificar se compras acima de R$ 200 possuem frete grátis.                     |
| **CT10** | Valor restante para frete grátis | Verificar o cálculo de quanto falta para atingir R$ 200.                       |
| **CT11** | Frete + desconto                 | Verificar se o frete grátis considera o subtotal antes do desconto.            |
| **CT12** | Desconto no frete                | Verificar se o cupom desconta apenas o subtotal dos produtos.                  |
| **CT13** | Limite de quantidade             | Verificar se até 5 unidades do mesmo produto podem ser adicionadas.            |
| **CT14** | Exceder limite de quantidade     | Tentar adicionar 6 unidades e verificar se o sistema bloqueia.                 |
| **CT15** | Finalização do pedido            | Realizar um pedido válido e verificar confirmação, valores e número do pedido. |

