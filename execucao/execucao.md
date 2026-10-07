# Execução dos Testes
> Esta seção apresenta os resultados dos testes manuais e exploratórios realizados na aplicação.

## CT01 — Cupom válido

**Resultado:** PASSOU

| Item | Esperado | Obtido |
|---|---:|---:|
| Subtotal | R$ 59,90 | R$ 59,90 |
| Desconto | R$ 5,99 | R$ 5,99 |
| Frete | R$ 19,90 | R$ 19,90 |
| Total | R$ 73,81 | R$ 73,81 |

**Observação:** O cupom `BEMVINDO10` foi aplicado corretamente. O valor restante para frete grátis também foi conferido e correspondeu ao esperado: R$ 140,10.

## CT02 — Variações do cupom

**Resultado:** PASSOU

| Variação testada                                | Esperado         | Obtido    |
| ----------------------------------------------- | ---------------- | --------- |
| `BEMVINDO10`                                    | Aceitar          | Aceito    |
| Espaço antes                                    | Aceitar          | Aceito    |
| Espaço depois                                   | Aceitar          | Aceito    |
| Diferentes combinações de maiúsculas/minúsculas | Aceitar          | Aceito    |
| Espaços internos                                | Não especificado | Rejeitado |

**Observação:** O cupom foi aceito corretamente com diferentes combinações de maiúsculas/minúsculas e com espaços no início ou no final. Também foram testados espaços internos de forma exploratória, porém esse comportamento não é especificado na documentação e, portanto, não foi considerado um bug.

