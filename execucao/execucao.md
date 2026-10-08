# Execução dos Cenários de Teste

## CT01 — Cupom válido
**Objetivo:**
Verificar se o cupom `BEMVINDO10` é aplicado corretamente e gera desconto de 10% sobre o subtotal dos produtos.

**Dados utilizados:**

* Produto: Garrafa Térmica 750ml (P008)
* Quantidade: 1
* Cupom: `BEMVINDO10`

**Execução manual:**
O produto foi adicionado ao carrinho e o cupom `BEMVINDO10` foi aplicado. O sistema apresentou o desconto de R$ 5,00 sobre o subtotal de R$ 50,00.

**Resultado esperado:**
Aplicação do cupom com desconto de 10% sobre o subtotal.

**Resultado obtido:**
O cupom foi aplicado corretamente, apresentando desconto de R$ 5,00.

**Status:** PASSOU

**Automação:** PASSOU — cenário automatizado com Playwright utilizando Chromium.


## CT02 — Variações do cupom

**Objetivo:**
Verificar se o cupom funciona independentemente de letras maiúsculas/minúsculas e se espaços no início ou no final são ignorados.

**Dados utilizados:**

* Produto: Camiseta Essencial
* Cupom válido: `BEMVINDO10`

**Execução:**
Foram testadas diferentes formas de informar o cupom:

* `BEMVINDO10` → OK
* Espaço antes do cupom → OK
* Espaço depois do cupom → OK
* `bemvindo10` → OK
* `bemVindo10` → OK
* `Bemvindo10` → OK
* `BemVindo10` → OK
* `bem vindo10` → NÃO ACEITO
* `bem vindo 10` → NÃO ACEITO

**Resultado esperado:**
O cupom deve ser aceito independentemente de letras maiúsculas ou minúsculas e com espaços no início ou no final.

**Resultado obtido:**
Todas as variações previstas na documentação foram aceitas. As versões com espaços internos foram recusadas.

**Status:** PASSOU

**Automação:** PASSOU — o teste automatizado verificou as variações de maiúsculas, minúsculas e espaços do cupom `BEMVINDO10`.

**Observação:**
A documentação exige apenas a desconsideração de espaços no início e no final. Não há requisito para aceitar espaços internos, portanto esse comportamento não foi considerado um bug.

## CT03 — Cupom inexistente

**Objetivo:**
Verificar o comportamento do sistema ao informar um cupom que não existe.

**Dados utilizados:**

* Produto: Tênis Casual Urbano — R$ 189,90
* Cupom inválido: `TESTE`

**Execução:**
Foi adicionado o produto ao carrinho e informado o cupom `TESTE`.

Também foi realizada uma tentativa de aplicar o cupom sem preencher o campo.

**Resultado esperado:**
Para um cupom inexistente, o sistema deve informar que o cupom é inválido e não aplicar desconto.

**Resultado obtido:**
Ao informar `TESTE`, o sistema apresentou a mensagem **“Cupom inválido.”** e nenhum desconto foi aplicado.

Ao tentar aplicar sem informar um cupom, o sistema apresentou **“Informe cupom.”**

**Status:** PASSOU

**Observação:**
O fato de o total ultrapassar R$ 200,00 devido à inclusão do frete não concede frete grátis, pois a regra considera o subtotal dos produtos, antes do frete.



## CT04 — Cupom expirado

**Objetivo:**
Verificar se o sistema identifica corretamente um cupom expirado e impede a aplicação do desconto.

**Dados utilizados:**

* Produto: Tênis Casual Urbano
* Cupom: `VERAO2026`

**Execução:**
Foi adicionado o produto ao carrinho e aplicado o cupom `VERAO2026`.

**Resultado esperado:**
O sistema deve informar que o cupom está expirado e não aplicar desconto.

**Resultado obtido:**
O sistema apresentou a mensagem **“Cupom expirado.”** e nenhum desconto foi aplicado.

**Status:** PASSOU

**Observação:**
O comportamento está de acordo com o critério CA04.



## CT05 — Remoção do cupom e recálculo

**Objetivo:**
Verificar se a remoção de um cupom aplicado atualiza corretamente o desconto e o valor total do carrinho.

**Dados utilizados:**

* Produto: Tênis Casual Urbano — R$ 189,90
* Cupom: `BEMVINDO10`

**Execução:**
Primeiramente, o cupom `BEMVINDO10` foi aplicado ao produto.

Com o cupom aplicado:

* Subtotal: R$ 189,90
* Desconto: R$ 18,99
* Frete: R$ 19,90
* Total: R$ 190,81

Em seguida, o cupom foi removido.

Após a remoção:

* Subtotal: R$ 189,90
* Desconto: R$ 0,00
* Frete: R$ 19,90
* Total: R$ 209,80

**Resultado esperado:**
Ao remover o cupom, o desconto deve ser eliminado e os valores do carrinho devem ser recalculados.

**Resultado obtido:**
O desconto foi removido corretamente e o total foi recalculado de R$ 190,81 para R$ 209,80.

**Status:** PASSOU



## CT06 — Alteração do carrinho com cupom

**Objetivo:**
Verificar se o cálculo do carrinho permanece correto quando o conteúdo do carrinho é alterado antes ou depois da aplicação do cupom.

**Dados utilizados:**

* Produto: Tênis Casual Urbano
* Cupom: `BEMVINDO10`

**Execução:**
Foram testados dois fluxos:

1. Aplicação do cupom e, posteriormente, alteração do carrinho adicionando um produto.
2. Adição do produto ao carrinho e, posteriormente, aplicação do cupom.

**Resultado esperado:**
O sistema deve recalcular corretamente os valores do carrinho independentemente da ordem em que o produto e o cupom são adicionados.

**Resultado obtido:**
Nos dois fluxos testados, o sistema funcionou normalmente e realizou os cálculos corretamente.

**Status:** PASSOU



## CT07 — Compra abaixo de R$ 200

**Objetivo:**
Verificar a aplicação do frete de R$ 19,90 em compras cujo subtotal seja inferior a R$ 200,00, incluindo valores próximos e distantes do limite de frete grátis.

**Dados utilizados:**

Foram realizados testes com diferentes produtos e valores de subtotal:

* **Tênis Casual Urbano:** R$ 189,90
* **Kit 3 Pares de Meias:** R$ 29,90
* **Boné Aba Curva:** 4 unidades × R$ 49,90 = R$ 199,60

**Execução:**
Inicialmente, foi utilizado o Tênis Casual Urbano, com valor de R$ 189,90, por ser um produto com preço próximo ao limite de R$ 200,00. Em seguida, foi utilizado o Kit 3 Pares de Meias, no valor de R$ 29,90, para verificar o comportamento do frete em um subtotal significativamente inferior ao limite.

Por fim, foram adicionadas 4 unidades do Boné Aba Curva, totalizando R$ 199,60, para verificar o comportamento do sistema em uma situação em que faltavam apenas R$ 0,40 para atingir o frete grátis.

**Resultado esperado:**
Para qualquer subtotal inferior a R$ 200,00, o sistema deve aplicar frete de R$ 19,90 e informar quanto falta para atingir o valor necessário para frete grátis.

**Resultado obtido:**
Nos três testes, o sistema manteve corretamente o frete de R$ 19,90 enquanto o subtotal permaneceu abaixo de R$ 200,00.

No teste com 4 unidades do Boné Aba Curva, o subtotal foi de R$ 199,60 e o sistema informou corretamente:

**“Faltam R$ 0,40 para o frete grátis.”**

**Status:** PASSOU

**Observação:**
O limite de R$ 200,00 é calculado sobre o subtotal dos produtos. O valor do frete não é considerado para atingir o limite de frete grátis.



## CT08 — Compra de R$ 200

**Objetivo:**
Verificar se uma compra com subtotal exatamente igual a R$ 200,00 recebe frete grátis.

**Dados utilizados:**

* Produto: Mochila Urbana 20L — R$ 100,00
* Quantidade: 2
* Subtotal: R$ 200,00
* Cupom: `BEMVINDO10`

**Execução:**
Foram adicionadas 2 unidades da Mochila Urbana 20L, totalizando R$ 200,00 de subtotal. Em seguida, foi aplicado o cupom `BEMVINDO10`.

O sistema apresentou:

* Subtotal: R$ 200,00
* Desconto: R$ 20,00
* Frete: R$ 19,90
* Total: R$ 199,90
* Valor restante para frete grátis: R$ 0,00

**Resultado esperado:**
Como o subtotal é exatamente R$ 200,00, o frete deve ser grátis, mesmo após a aplicação do desconto.

**Resultado obtido:**
O sistema reconheceu que faltavam R$ 0,00 para atingir o frete grátis, porém continuou cobrando R$ 19,90 de frete.

**Status:** FALHOU

Automação: FALHOU — o teste automatizado identificou que o frete permaneceu em R$ 19,90 para um subtotal de R$ 200,00, caracterizando o BUG-001.

**Observação:**
Foi identificado um bug: o sistema não aplica frete grátis quando o subtotal é exatamente R$ 200,00. A regra determina que valores **maiores ou iguais a R$ 200,00** devem receber frete grátis.

## CT09 — Compra acima de R$ 200

**Objetivo:**
Verificar se compras com subtotal superior a R$ 200,00 recebem frete grátis.

**Dados utilizados:**

* Produto: Jaqueta Corta-Vento — R$ 229,90

**Execução:**
A Jaqueta Corta-Vento foi adicionada ao carrinho, totalizando R$ 229,90 de subtotal.

**Resultado esperado:**
Como o subtotal é superior a R$ 200,00, o sistema deve aplicar frete grátis.

**Resultado obtido:**
O sistema aplicou corretamente o frete grátis.

**Status:** PASSOU



## CT10 — Valor restante para frete grátis

**Objetivo:**
Verificar se o sistema calcula corretamente quanto falta para que o subtotal atinja R$ 200,00.

**Dados utilizados:**

* Kit 3 Pares de Meias — R$ 29,90
* Calça Jeans Slim — R$ 139,90
* Subtotal: R$ 169,80

**Execução:**
Os dois produtos foram adicionados ao carrinho.

O sistema apresentou a mensagem:

**“Faltam R$ 30,20 para o frete grátis.”**

Cálculo esperado:

R$ 200,00 − R$ 169,80 = **R$ 30,20**

**Resultado esperado:**
O sistema deve informar corretamente o valor restante para atingir R$ 200,00.

**Resultado obtido:**
O sistema informou corretamente que faltavam R$ 30,20.

**Status:** PASSOU

**Observação:**
O cálculo está de acordo com a regra de frete grátis definida na documentação.


## CT11 — Frete grátis considerando subtotal antes do desconto

**Objetivo:**
Verificar se o sistema considera o subtotal dos produtos antes da aplicação do cupom ao determinar o direito ao frete grátis.

**Dados utilizados:**

* Produto: Mochila Urbana 20L — R$ 100,00
* Quantidade: 2
* Subtotal: R$ 200,00
* Cupom: `BEMVINDO10`

**Execução:**
Foram adicionadas 2 unidades da Mochila Urbana 20L, totalizando R$ 200,00 de subtotal. Em seguida, foi aplicado o cupom `BEMVINDO10`, que concede 10% de desconto.

**Resultado esperado:**
Como o subtotal antes do desconto é exatamente R$ 200,00, o sistema deve considerar o pedido elegível ao frete grátis.

O resultado esperado seria:

* Subtotal: R$ 200,00
* Desconto: R$ 20,00
* Frete: R$ 0,00
* Total: R$ 180,00

**Resultado obtido:**
O sistema manteve o frete de R$ 19,90 mesmo com o subtotal de R$ 200,00. Após a aplicação do cupom, o resultado ficou:

* Subtotal: R$ 200,00
* Desconto: R$ 20,00
* Frete: R$ 19,90
* Total: R$ 199,90

**Status:** FALHOU

**Observação:**
O sistema não aplicou o frete grátis para um subtotal de R$ 200,00, contrariando a regra de que valores maiores ou iguais a R$ 200,00 devem receber frete grátis. O comportamento também indica que a aplicação do cupom não corrigiu o cálculo do frete. Além disso, o CT11 e CT08 possuem o mesmo tipo de falha.

## CT12 — Desconto aplicado somente ao subtotal

**Objetivo:**
Verificar se o desconto do cupom é aplicado somente sobre o subtotal dos produtos, sem alterar o valor do frete.

**Dados utilizados:**

* Produto: Garrafa Térmica 750ml — R$ 50,00
* Cupom: `BEMVINDO10`
* Frete: R$ 19,90

**Execução:**
Foi adicionada uma Garrafa Térmica 750ml ao carrinho e aplicado o cupom `BEMVINDO10`, que concede 10% de desconto.

**Resultado esperado:**
O desconto de 10% deve ser aplicado somente sobre o valor do produto, mantendo o frete em R$ 19,90.

**Resultado obtido:**
O sistema apresentou:

* Subtotal: R$ 50,00
* Desconto: R$ 5,00
* Valor dos produtos após desconto: R$ 45,00
* Frete: R$ 19,90
* Total: R$ 64,90

O frete permaneceu em R$ 19,90 e não sofreu desconto.

**Status:** PASSOU

**Observação:**
O comportamento está de acordo com a CA09, que determina que o desconto do cupom não deve ser aplicado sobre o valor do


## CT13 — Limite de quantidade por produto

**Objetivo:**
Verificar se o sistema permite adicionar no máximo 5 unidades do mesmo produto ao carrinho.

**Dados utilizados:**

* Garrafa Térmica 750ml
* Demais produtos disponíveis na loja

**Execução:**
A Garrafa Térmica 750ml foi adicionada ao carrinho sucessivamente. O sistema permitiu adicionar até 5 unidades do produto.

Ao tentar adicionar a 6ª unidade, o sistema bloqueou a ação.

O mesmo procedimento foi realizado com os demais produtos disponíveis na loja. Todos permitiram até 5 unidades e bloquearam a tentativa de adicionar a 6ª unidade.

**Resultado esperado:**
O sistema deve permitir no máximo 5 unidades de cada produto por pedido e impedir a adição de uma 6ª unidade.

**Resultado obtido:**
Todos os produtos testados permitiram a adição de até 5 unidades e bloquearam corretamente a 6ª unidade.

**Status:** PASSOU

**Observação:**
O comportamento está de acordo com a CA10, que estabelece o limite máximo de 5 unidades do mesmo produto por pedido.


## CT14 — Limite de quantidade pela API

**Objetivo:**
Verificar se a API também impede que um mesmo produto seja enviado com quantidade superior ao limite de 5 unidades por pedido.

**Dados utilizados:**

* Produto: Garrafa Térmica 750ml (P008)
* Quantidade enviada: 6 unidades
* Endpoint: `POST /api/carrinho/calcular`

**Execução:**
Foi enviada uma requisição `POST` para o endpoint `/api/carrinho/calcular`, informando 6 unidades da Garrafa Térmica 750ml.

**Resultado esperado:**
A API deve rejeitar a quantidade superior ao limite permitido de 5 unidades, retornando um erro de validação.

**Resultado obtido:**
A API aceitou a requisição com 6 unidades e realizou o cálculo normalmente:

* Quantidade: 6
* Subtotal: R$ 300,00
* Frete: R$ 0,00
* Total: R$ 300,00

Não foi retornado erro de quantidade excedida.

**Status:** FALHOU

**Observação:**
Foi identificada uma inconsistência entre a interface e a API. A interface bloqueia a 6ª unidade, conforme verificado no CT13, porém a API aceita uma requisição contendo 6 unidades do mesmo produto. A documentação estabelece que o limite de 5 unidades deve ser respeitado tanto pela UI quanto pela API.

## CT15 — Finalização do pedido

**Objetivo:**
Verificar se um pedido válido pode ser finalizado corretamente pela interface e pela API, apresentando a confirmação, o número do pedido e os valores calculados corretamente.

**Dados utilizados:**
**Teste pela interface:**

* Produto: Camiseta Essencial
* Quantidade: 1
* Subtotal: R$ 59,90
* Desconto: R$ 0,00
* Frete: R$ 19,90
* Total: R$ 79,80

**Teste pela API:**

* Endpoint: `POST /api/pedidos`
* Produto: Mochila Urbana 20L (P005)
* Quantidade: 1
* Cupom: `BEMVINDO10`

**Execução:**
Primeiramente, foi realizado um pedido válido pela interface da aplicação. O pedido foi finalizado normalmente e apresentou uma confirmação com número de pedido e resumo dos valores.

Em seguida, foi realizada uma requisição `POST /api/pedidos` pelo Postman, utilizando um produto válido, dados de cliente válidos e o cupom `BEMVINDO10`.

**Resultado esperado:**
O sistema deve confirmar o pedido, gerar um número no formato `VZ-000000` e apresentar corretamente os itens e valores da compra. Pela API, a requisição deve retornar status `201`.

**Resultado obtido:**

**Interface:**
O sistema apresentou **“Pedido confirmado”** e gerou o pedido **VZ-473991**.

* Subtotal: R$ 59,90
* Desconto: R$ 0,00
* Frete: R$ 19,90
* Total: R$ 79,80

**API:**
A API confirmou o pedido e retornou o número **VZ-847937**, juntamente com os dados do cliente, item e resumo dos valores.

* Subtotal: R$ 100,00
* Desconto: R$ 10,00
* Frete: R$ 19,90
* Total: R$ 109,90
* Cupom: aplicado corretamente

**Status:** PASSOU

**Observação:**
O fluxo de finalização apresentou comportamento esperado tanto pela interface quanto pela API. Os valores retornados pela API estão de acordo com o cálculo esperado para o produto e o cupom utilizado.
