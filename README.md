# Verzel Store — QA

Projeto de testes realizado como parte de um processo seletivo para QA, com foco na validação das funcionalidades da Verzel Store relacionadas a cupons, cálculo de descontos, frete, limite de quantidade e finalização de pedidos.

## Objetivo

Validar o comportamento da aplicação por meio de testes manuais, exploratórios e automatizados, identificando possíveis divergências em relação à documentação fornecida.

## Escopo

* Aplicação de cupons de desconto;
* Validação de cupons inválidos e expirados;
* Cálculo de descontos;
* Regras de frete grátis;
* Limite de quantidade de produtos;
* Validação de funcionalidades pela API;
* Finalização de pedidos;
* Automação de cenários com Playwright.

## Estrutura do projeto

| Pasta/Arquivo        | Descrição                                        |
| -------------------- | ------------------------------------------------ |
| `cenarios-de-teste/` | Cenários planejados e casos em Gherkin           |
| `execucao/`          | Registro dos testes executados e seus resultados |
| `bugs/`              | Bugs encontrados e suas evidências               |
| `automacao/`         | Testes automatizados com Playwright              |
| `README.md`          | Documentação geral do projeto                    |

## Cenários de teste

Os cenários planejados, suas prioridades e resultados estão disponíveis em:

**[Cenários de Teste](./cenarios-de-teste/cenarios.md)**

## Execução dos testes

Os resultados detalhados de cada cenário estão disponíveis em:

**[Execução dos Testes](./execucao/execucao.md)**

## Bugs encontrados

Foram identificados **2 bugs** durante a execução:

* **BUG-001:** Frete de R$ 19,90 cobrado para subtotal de exatamente R$ 200,00.
* **BUG-002:** API permite adicionar mais de 5 unidades do mesmo produto.

Detalhes e evidências:

**[Relatório de Bugs](./bugs/bugs.md)**

## Automação

Foram automatizados 3 cenários utilizando **Playwright**:

* CT01 — Cupom válido;
* CT02 — Variações do cupom;
* CT08 — Frete grátis para subtotal de R$ 200,00.

Os arquivos de automação estão em:

**[Pasta de Automação](./automacao/)**

### Como executar

Dentro da pasta `automacao`, instale as dependências:

```bash
npm install
```

Para executar os testes:

```bash
npx playwright test --project=chromium
```

Para executar com o navegador visível:

```bash
npx playwright test --headed --project=chromium
```

## Aplicação

**[Verzel Store](https://verzel-store.qa-test-verzel-store.workers.dev/)**

## Documentação da aplicação

**[Documentação da Verzel Store](https://verzel-store.qa-test-verzel-store.workers.dev/documentacao)**

## Uso de Inteligência Artificial

A Inteligência Artificial foi utilizada como ferramenta de apoio durante o desenvolvimento deste projeto, principalmente para auxiliar na organização da documentação, revisão dos testes e apoio na criação da automação utilizando **Playwright**. A execução dos testes, análise dos resultados e identificação dos bugs foram realizadas e validadas manualmente.
