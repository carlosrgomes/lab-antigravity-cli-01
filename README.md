# Tutorial Prático: Refatorando Sistemas Legados com Agentes de IA

Este guia é um tutorial passo a passo para desenvolvedores que desejam aprender a utilizar **Agentes de IA (como o Antigravity/Gemini)** para modernizar sistemas legados. 

Vamos usar como exemplo prático a refatoração de um e-commerce dos anos 90, transformando-o em um site de padrão visual "Premium", responsivo, e preparando a infraestrutura (Docker) para cloud, tudo isso orquestrado via chat com a IA.

---

## Passo 1: O Segredo do Sucesso (Preparando o Contexto)

A diferença entre a IA gerar um "código genérico" e um "código excepcional" está no contexto que você fornece a ela. Antes de iniciar o chat, crie regras claras (ex: um arquivo `GEMINI.md` na raiz do projeto) ou configure _Skills_.

**Exemplo do que passamos para o Agente neste projeto:**
- **Regra de Ouro (Aesthetics First):** *O design final tem que causar um efeito WOW. Proibido usar cores primárias secas, use paletas modernas (HSL). Use Google Fonts, glassmorphism e sombras elegantes.*
- **Arquitetura Front:** *HTML5 semântico rigoroso. Proibido o uso de `<table>` para layout ou tags como `<font>` e `<center>`.*

> **Dica Pro:** Trate o agente de IA como um Desenvolvedor Sênior recém-contratado. Quanto mais clara a diretriz da empresa, melhor o resultado.

---

## Passo 2: O Mega-Prompt (Refatoração + Infraestrutura)

Em vez de pedir as coisas fragmentadas ("faça o css", depois "faça o docker"), você pode e deve agrupar tarefas relacionadas num mesmo prompt para economizar tempo. Como o contexto (passo 1) já tem as regras de design e de HTML, basta focar no "o quê" precisa ser feito.

💬 **Prompt que você deve usar:**
> *"refatore o projeto aplicando as diretrizes de design do GEMINI.md e logo em seguida já crie a infraestrutura DevOps para subir isso num container docker (usando nginx)"*

🤖 **Como a IA vai agir:**
1. A IA entrará em **Planning Mode** e criará um `implementation_plan.md` gigantesco com a proposta técnica para ambas as tarefas.
2. Após você aprovar com um `[Approved]`, a IA vai programar as duas frentes sozinha:
   - **Frontend:** Criará o arquivo `style.css`, usará `CSS Grid`, aplicará responsividade, cores curadas e animações de hover.
   - **Infraestrutura:** Gerará o `Dockerfile` (usando `nginx:alpine`), `.dockerignore` e `docker-compose.yml`.

---

## Passo 3: Executando Comandos na Máquina Real

Agentes de desenvolvimento avançados não só cospem texto, eles interagem com a máquina via terminal. Vamos pedir para a IA subir o nosso container recém-criado.

💬 **Prompt que você deve usar:**
> *"suba para teste e abra o chrome"*

🤖 **Como a IA vai agir:**
1. A IA abrirá um shell em _background_ e executará o comando: `docker-compose up -d --build`.
2. Ela vai ler o log para garantir que o container não deu erro.
3. Usará comandos do sistema operacional (ex: `open -a "Google Chrome" http://localhost:8080` no Mac) para abrir o navegador literalmente na sua tela com o projeto rodando.

---

## Passo 4: Teardown (Desmontando o ambiente)

Ao finalizar a validação, use a IA para limpar a sujeira e manter seu ambiente organizado.

💬 **Prompt que você deve usar:**
> *"pode baixar"* ou *"pare os containers de teste e limpe os recursos"*

🤖 **Como a IA vai agir:**
1. Executará um `docker-compose down`.
2. Reportará que a porta 8080 foi liberada e a network de teste foi removida com segurança.

---

## 🎯 Conclusão

Trabalhar com **Agentic AI Coding** muda a dinâmica de escrever linha a linha para atuar como um Arquiteto de Software. O ciclo ideal é:
1. Definir o padrão de qualidade (Contexto/Skills).
2. Delegar o problema via prompt claro.
3. Revisar o plano (Planning Mode).
4. Validar as execuções (Código, Comandos, Browsers). 

Experimente aplicar essa estrutura nos seus próximos sistemas legados!
