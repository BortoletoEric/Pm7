# PM7 Engenharia - Portfólio e Landing Page

Este repositório contém o código-fonte da aplicação web (landing page/portfólio) da PM7 Engenharia. Baseado na estrutura de arquivos, o projeto é desenvolvido em **React**, **TypeScript** e empacotado via **Vite**.

## Tecnologias Utilizadas
- **Frontend:** React, TypeScript
- **Build Tool:** Vite
- **Estilização:** CSS (index.css, style.css)

## Estrutura de Diretórios (`src/`)

- **/components:** Componentes de interface da aplicação.
   - Seções da página: `AboutSection.tsx`, `ClientsSection.tsx`, `ContactSection.tsx`, `CredentialsSection.tsx`, `Hero.tsx`, `ProjectsSection.tsx`, `ServicesSection.tsx`.
   - Layout e Modais: `Header.tsx`, `Footer.tsx`, `ProjectModal.tsx`, `CompanyCustomizerModal.tsx`, `ScopeEstimatorModal.tsx`, `WhatsAppFloating.tsx`.
- **/controllers:** Lógica de negócio e manipulação de estado (`formController.js`, `portfolioController.js`).
- **/data:** Dados estáticos e de configuração de conteúdo (`companyData.ts`, `projects.js`).
- **/config:** Arquivos de configuração da empresa (`company.js`).
- **/services:** Serviços de integração, incluindo templates de e-mail (`emailTemplate.js`).
- **/utils:** Funções utilitárias e scripts auxiliares (`modal.js`).

## Instalação e Execução

1. Instale as dependências do projeto:
```bash
npm install
```

2. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

3. Para compilar o projeto para produção:
```bash
npm run build
```
