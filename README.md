# Tutorial: Modernização de Sistemas Legados com IA (Antigravity)

Este repositório documenta um caso de uso real de refatoração de um sistema web legado (com design típico dos anos 90) para um padrão moderno, performático e em container utilizando Agentes de IA. 

Abaixo você encontra o passo a passo detalhado, como o contexto foi estabelecido e os prompts exatos utilizados para guiar a IA durante todo o processo.

---

## 1. Preparação do Ambiente e Contexto (Regras)

A parte mais importante para o sucesso de uma refatoração automatizada é fornecer diretrizes estritas. Para que a IA não fizesse algo genérico, criamos regras (como o arquivo `GEMINI.md` ou configurando "Skills" locais). 

**O que foi definido no contexto da IA:**
- **Stack:** HTML5 Semântico, CSS3 Vanilla Moderno (CSS Variables, Flexbox, Grid), JavaScript Vanilla.
- **Aesthetics (Diretriz Crítica):** O design precisava ser "Premium" (Efeito WOW). Proibição do uso de cores cruas. Uso obrigatório de fontes modernas (Google Fonts), sombras modernas e Glassmorphism.
- **HTML Semântico:** Proibição de layouts em tabelas (`<table>`), tags obsoletas como `<font>` e `<center>`.
- **Acessibilidade & SEO:** Uso de tags `<main>`, `<header>`, `<footer>`, e atributos `alt` em imagens.

## 2. Passo a Passo da Refatoração Frontend

Com as regras de *Modern HTML Specialist* e *Modern Design Specialist* embutidas no contexto do Agente, iniciamos a refatoração do código fonte (o arquivo legadão `index.html` original do projeto).

### Prompt 1: O Gatilho da Refatoração

**User:**
> "refatore o projeto"

**Ação da IA (Planning Mode):**
Ao invés de sair alterando código de forma cega, a IA entrou em *Planning Mode*.
1. Inspecionou o projeto e viu os arquivos (`index.html`, os gifs e imagens antigas).
2. Analisou o HTML e identificou a necessidade de aplicar a folha de estilos do zero.
3. Criou um arquivo **`implementation_plan.md`** detalhando como construiria o `style.css` focado em "Aesthetics First" (uso de Grid, variáveis CSS, micro-interações de hover).

**User:**
> "[Approved] implementation_plan.md"

**Execução e Resultados:**
- A IA criou o `style.css`.
- O layout das imagens em tabela virou um poderoso **CSS Grid** responsivo (Mobile-First).
- Foram adicionadas animações (os cards "flutuam" ao passar o mouse).
- Adicionou-se Glassmorphism no cabeçalho.
- Um resumo do que foi feito foi documentado automaticamente em um `walkthrough.md`.

## 3. Passo a Passo do DevOps (Conteinerização)

O próximo passo era tirar o site de uma "pasta" e colocá-lo em uma arquitetura moderna capaz de rodar em nuvem. Para isso, adicionamos Docker.

### Prompt 2: Configuração de Docker

**User:**
> "rodou o devops para subir em container precisa ter isso"

**Ação da IA (Planning Mode):**
Novamente, a IA planejou a arquitetura ideal. Para sites estáticos HTML/CSS, o ideal não é um Node.js ou Apache pesado, mas sim um Nginx Alpine leve.
1. Criou um `implementation_plan.md` descrevendo a adição do `Dockerfile`, `.dockerignore` e `docker-compose.yml`.

**User:**
> "[Approved] implementation_plan.md"

**Execução e Resultados:**
- **`Dockerfile`**: Utilizando `nginx:alpine` para máxima performance.
- **`.dockerignore`**: Blindando a imagem de carregar arquivos como `.git` e `.gemini`.
- **`docker-compose.yml`**: Expondo a porta interna do Nginx (80) para a porta `8080` local, usando a diretiva `build: .` e `restart: always`.

### Prompt 3: Subindo o Ambiente

**User:**
> "suba para teste e abra o chrome"

**Execução e Resultados:**
A IA utilizou suas ferramentas de terminal interno para executar comandos reais na máquina:
1. Executou `docker-compose up -d --build`.
2. O container Nginx foi construído e ligado na porta `8080` em *background*.
3. Executou `open -a "Google Chrome" http://localhost:8080` e abriu o navegador na tela do usuário automaticamente para validação do site online.

---

## 4. Finalização e Boas Práticas

Após a conclusão dos testes visuais no navegador, o usuário solicitou para derrubar o sistema temporário.

### Prompt 4: Desligando a Infraestrutura

**User:**
> "pode baixar"

**Execução e Resultados:**
A IA rodou o comando de teardown (`docker-compose down`) no terminal, parando o Nginx e apagando a network criada, limpando o ambiente local de forma segura.

---

## Resumo dos Arquivos Gerados pelo Agente
- `style.css`: A folha de estilo completamente do zero usando variáveis e animações premium.
- `Dockerfile`: Configuração otimizada para Nginx.
- `.dockerignore`: Proteção do ambiente.
- `docker-compose.yml`: Orquestração de desenvolvimento local.
- `.gemini/artifacts/*`: Pasta onde o agente armazena todo o ciclo de pensamento, planejamento (`implementation_plan.md`), tarefas (`task.md`) e resumos (`walkthrough.md`).
