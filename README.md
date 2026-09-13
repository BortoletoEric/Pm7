# PM7 Engenharia - Portfólio e Landing Page

Este repositório contém o código-fonte da aplicação web (landing page/portfólio) da PM7 Engenharia. Baseado na estrutura de arquivos, o projeto foi refatorado e agora é desenvolvido utilizando **HTML, CSS e JavaScript nativo** (Vanilla JS).

## Tecnologias Utilizadas
- **Linguagens:** HTML5, CSS3, JavaScript (Nativo/Vanilla)
- **Estrutura:** Arquitetura baseada em pastas para modularidade (`src/controllers`, `src/data`, `src/config`).

## Estrutura de Diretórios (`src/`)

- **/controllers:** Lógica de negócio e scripts que controlam o comportamento da página (`formController.js`).
- **/data:** Arquivos contendo dados estáticos, como informações da empresa e portfólio de projetos (`projects.js`).
- **/config:** Arquivos de configuração geral (`company.js`).
- **/services:** Integrações de serviços, como envio e formatação de e-mails (`emailTemplate.js`).
- **/assets (Raiz):** O arquivo principal `index.html` e folhas de estilo como `style.css` encontram-se na raiz do projeto.

## Como Testar Localmente

Como o projeto agora é construído inteiramente com tecnologias web nativas, o processo de execução é muito simples e não requer Node.js, `npm` ou processos de *build* para visualização básica.

### Opção 1: Usando o Five Server (ou Live Server) no VS Code - A Prática Recomendada

Esta é a forma mais prática e eficiente para desenvolvedores web visualizarem projetos em JavaScript nativo.

1. Abra a pasta do projeto (`PM7`) no seu **Visual Studio Code**.
2. Certifique-se de que a extensão **Five Server** (ou **Live Server**) está instalada.
3. No painel de arquivos (Explorer) à esquerda, clique com o botão direito no arquivo **`index.html`** que está na raiz do projeto.
4. Selecione a opção **"Open with Five Server"** (ou "Open with Live Server").
5. O navegador padrão será aberto automaticamente (geralmente no endereço `http://127.0.0.1:5500` ou similar), e qualquer alteração feita nos arquivos será atualizada em tempo real (Hot Reload).

### Opção 2: Visualização Direta no Navegador

Como não há um servidor de desenvolvimento obrigatório, você pode simplesmente:
1. Navegar até a pasta do projeto no seu explorador de arquivos (Windows Explorer, Finder, etc.).
2. Dar um duplo clique no arquivo **`index.html`** para abri-lo diretamente no seu navegador.
   *Nota: Alguns recursos modernos do JavaScript (como ES Modules usando `import/export`, caso o projeto os utilize) podem ser bloqueados por políticas de CORS se abertos diretamente via protocolo `file://`. A Opção 1 é sempre a mais garantida.*