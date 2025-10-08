# Profzera Front-end

Sistema web para gerenciamento de publicações acadêmicas desenvolvido com React, TypeScript e Vite.

## 📋 Sobre o Projeto

O Profzera é uma plataforma que permite aos usuários criar, visualizar, editar e excluir publicações. O sistema possui três tipos de usuários com diferentes permissões:

- **Administrador (type: 0)**: Permissão completa (criar, editar, visualizar e excluir)
- **Professor (type: 1)**: Pode criar, editar e visualizar publicações
- **Aluno (type: 2)**: Pode apenas visualizar publicações

## 🚀 Tecnologias Utilizadas

### Core
- **React** 18.2.0 - Biblioteca JavaScript para construção de interfaces
- **TypeScript/JavaScript** - Tipagem estática e programação
- **Vite** 5.2.0 - Build tool e dev server

### Roteamento e Estado
- **React Router DOM** 7.9.3 - Gerenciamento de rotas
- **React Context API** - Gerenciamento de estado de autenticação

### Estilização
- **Styled Components** 6.1.11 - CSS-in-JS
- **React Icons** 5.5.0 - Biblioteca de ícones

### Formulários e Validação
- **Formik** 2.4.6 - Gerenciamento de formulários
- **Yup** 1.4.0 - Validação de schemas

### HTTP Client
- **Axios** 1.7.2 - Cliente HTTP para requisições à API

### Qualidade de Código
- **ESLint** 8.57.0 - Linter para JavaScript/TypeScript
- **eslint-plugin-react** 7.34.1
- **eslint-plugin-react-hooks** 4.6.0
- **eslint-plugin-react-refresh** 0.4.6

## 📁 Estrutura do Projeto
```
profzera-front/ 
├── public/ # Arquivos públicos estáticos 
├── src/ 
│ ├── assets/ # Imagens e recursos estáticos 
│ ├── components/ # Componentes reutilizáveis 
│ │ ├── Breadcrumb/ # Navegação breadcrumb 
│ │ ├── Button/ # Botões customizados 
│ │ ├── Card/ # Cards de publicações 
│ │ ├── CustomLink/ # Links estilizados 
│ │ ├── ErrorText/ # Texto de erro 
│ │ ├── Fieldset/ # Fieldset de formulário 
│ │ ├── Footer/ # Rodapé 
│ │ ├── GlobalStyles/ # Estilos globais 
│ │ ├── Header/ # Cabeçalho 
│ │ ├── Heading/ # Títulos 
│ │ ├── Input/ # Inputs de formulário 
│ │ ├── Label/ # Labels 
│ │ ├── Post/ # Container e formulário de posts 
│ │ ├── ProtectedRoute/ # Rotas protegidas 
│ │ ├── Search/ # Componentes de busca 
│ │ ├── Select/ # Select customizado 
│ │ ├── Textarea/ # Textarea customizado 
│ │ └── User/ # Componentes de usuário 
│ ├── contexts/ # Context API (Autenticação) 
│ ├── hooks/ # Custom hooks 
│ │ ├── useAuth.ts # Hook de autenticação 
│ │ ├── usePostDelete.ts # Hook para deletar posts 
│ │ └── usePostSearch.ts # Hook para buscar posts 
│ ├── pages/ # Páginas da aplicação 
│ │ ├── Posts/ # Páginas de publicações 
│ │ │ ├── [id]/ # Visualizar e editar publicação 
│ │ │ ├── Create.tsx 
│ │ │ └── index.tsx 
│ │ └── Users/ # Páginas de usuários 
│ │ ├── LogIn.tsx 
│ │ └── Register.tsx 
│ ├── reducers/ # Reducers para gerenciamento de estado 
│ │ ├── postReducer.ts 
│ │ └── types.ts 
│ ├── routes/ # Configuração de rotas 
│ ├── api.ts # Configuração do Axios 
│ ├── App.tsx # Componente principal 
│ └── main.jsx # Entry point 
├── .eslintrc.cjs # Configuração ESLint 
├── .gitignore # Arquivos ignorados pelo Git 
├── db.json # Banco de dados JSON (desenvolvimento) 
├── index.html # HTML principal 
├── package.json # Dependências e scripts 
├── package-lock.json # Lock de dependências 
└── vite.config.js # Configuração do Vite
```

## 🔧 Pré-requisitos

- Node.js (versão 16 ou superior)
- NPM (geralmente vem com o Node.js)
- Backend rodando em `http://localhost:8080/api/` (conforme configurado em `src/api.ts`)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio> cd profzera-front
``` 

2. Instale as dependências:
```bash 
npm install
```

## 🎮 Como Rodar o Projeto

### Modo Desenvolvimento
```bash
npm run dev
``` 

O projeto estará disponível em: `http://localhost:5173/` (porta padrão do Vite)

### Build para Produção
```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

### Preview da Build de Produção
```bash
npm run preview
``` 

### Linting
```bash
npm run lint
```

## 🌐 Rotas da Aplicação

- `/` - Redireciona para `/posts`
- `/posts` - Lista todas as publicações (pública)
- `/posts/create` - Criar nova publicação (protegida - Admin/Professor)
- `/posts/:id` - Visualizar publicação específica (pública)
- `/posts/:id/edit` - Editar publicação (protegida - Admin/Professor)
- `/register` - Cadastro de novo usuário
- `/login` - Login de usuário

## 🔐 Autenticação

O sistema utiliza Context API para gerenciar o estado de autenticação. Os dados do usuário são armazenados no `localStorage` para persistência entre sessões.

### Tipos de Usuário

- **0**: Administrador (todas as permissões)
- **1**: Professor (criar e editar)
- **2**: Aluno (apenas visualizar)

## 🎨 Funcionalidades

- ✅ Autenticação de usuários
- ✅ CRUD completo de publicações
- ✅ Sistema de permissões baseado em roles
- ✅ Busca de publicações em tempo real
- ✅ Interface responsiva
- ✅ Validação de formulários
- ✅ Breadcrumbs de navegação
- ✅ Rotas protegidas

## 📱 Responsividade

O projeto é totalmente responsivo, com breakpoints para:
- Desktop (1440px+)
- Laptop (1200px)
- Tablet (1024px, 768px)
- Mobile (576px, 480px, 375px, 320px)

## 🛠️ Scripts Disponíveis
```json 
{
  "dev": "vite", // Inicia servidor de desenvolvimento
  "build": "vite build", // Gera build de produção
  "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
  "preview": "vite preview" // Preview da build
}
``` 

