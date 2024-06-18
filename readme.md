# Testes Automatizados com Selenium

Este repositório contém testes automatizados utilizando Selenium para interagir com um site específico e validar suas funcionalidades.

## Objetivo

Desenvolver habilidades práticas na criação e execução de testes automatizados para aplicações web utilizando Selenium.

## Site Escolhido

O site escolhido para os testes é [Picoshop](https://www.picoshop.com.br/).

## Funcionalidades Testadas

1. **Conseguir Desconto:**
   - Insere um e-mail para obter desconto.
   - Clica no botão para aplicar o desconto.
   - Assert: Verifica se a ação de obter desconto é realizada corretamente.

2. **Login no Sistema:**
   - Clica no link para acessar a página de login.
   - Insere as credenciais (campos de e-mail e senha estão no código fornecido).
   - Clica no botão de login.
   - Assert: Verifica se o login é bem-sucedido após clicar no botão de login.

3. **Acesso a Rota Não Existente:**
   - Tenta acessar uma rota inexistente no site.
   - Clica no botão para retornar à página inicial após o erro.
   - Assert: Confirma se a navegação de volta à página inicial após uma rota inexistente funciona corretamente.

4. **Selecionar Produto e Adicionar ao Carrinho:**
   - Clica em um link para acessar detalhes de um produto específico.
   - Adiciona o produto ao carrinho.
   - Assert: Verifica se o produto é adicionado corretamente ao carrinho após o clique.

5. **Navegação pelo Site:**
   - Clica em links para navegar pelas páginas "Sobre Nós" e página inicial.
   - Assert: Confirma se a navegação entre as páginas funciona corretamente.

## Ferramentas Utilizadas

- Selenium WebDriver
- Mocha (para execução dos testes)
- Chai (para asserções)
- dotenv (para configuração de variáveis de ambiente)

## Instruções de Execução

1. Clone este repositório: 
```
git clone https://github.com/Fernando-Gadelha/teste_selenium.git
```
2. Instale as dependências:
```
npm install
```
3. Execute os testes:
```
npm test
```

## Observações

Este projeto foi desenvolvido como parte de um exercício acadêmico/profissional para prática de testes automatizados com Selenium. Qualquer dúvida ou sugestão, entre em contato.
