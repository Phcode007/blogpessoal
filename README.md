<img width="1536" height="1024" alt="ChatGPT Image 8 de out  de 2025, 19_35_10" src="https://github.com/user-attachments/assets/d4ccc6bd-34aa-40e0-878a-0e63ce5801d8" />

# 📝 Blog Pessoal API

API RESTful para um blog pessoal desenvolvida com NestJS, TypeORM e PostgreSQL/MySQL. Sistema completo com autenticação JWT, gerenciamento de usuários, postagens e temas.

## 🚀 Tecnologias

- **NestJS** - Framework Node.js progressivo
- **TypeORM** - ORM para TypeScript e JavaScript
- **PostgreSQL** - Banco de dados em produção
- **MySQL** - Banco de dados em desenvolvimento
- **JWT** - Autenticação e autorização
- **Bcrypt** - Criptografia de senhas
- **Swagger** - Documentação da API
- **Passport** - Middleware de autenticação

## 📋 Funcionalidades

### Autenticação
- ✅ Cadastro de usuários com senha criptografada
- ✅ Login com geração de token JWT
- ✅ Proteção de rotas com guards
- ✅ Token com expiração de 1 hora

### Usuários
- ✅ Listar todos os usuários
- ✅ Buscar usuário por ID
- ✅ Criar novo usuário
- ✅ Atualizar dados do usuário
- ✅ Validação de e-mail único

### Postagens
- ✅ CRUD completo de postagens
- ✅ Busca por título
- ✅ Relacionamento com tema e usuário
- ✅ Data de atualização automática

### Temas
- ✅ CRUD completo de temas
- ✅ Busca por descrição
- ✅ Relacionamento com postagens

## 🔧 Instalação

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn
- PostgreSQL (produção) ou MySQL (desenvolvimento)

### Passos

1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd blog-pessoal
```

2. Instale as dependências
```bash
npm install
```

3. Configure as variáveis de ambiente
```bash
# Crie um arquivo .env na raiz do projeto
DATABASE_URL=sua-url-do-banco-de-dados
```

4. Execute a aplicação
```bash
# Modo desenvolvimento
npm run start:dev

# Modo produção
npm run start:prod
```

## 📡 Endpoints da API

A aplicação estará disponível em `http://localhost:4000`

### Documentação Swagger
Acesse `http://localhost:4000/swagger` para visualizar a documentação interativa completa.

### Autenticação

#### Cadastrar Usuário
```http
POST /usuarios/cadastrar
Content-Type: application/json

{
  "nome": "João Silva",
  "usuario": "joao@email.com",
  "senha": "senha123",
  "foto": "url-da-foto"
}
```

#### Login
```http
POST /usuarios/logar
Content-Type: application/json

{
  "usuario": "joao@email.com",
  "senha": "senha123"
}
```

### Postagens (requer autenticação)

#### Listar todas
```http
GET /postagens
Authorization: Bearer {token}
```

#### Buscar por ID
```http
GET /postagens/:id
Authorization: Bearer {token}
```

#### Criar postagem
```http
POST /postagens
Authorization: Bearer {token}
Content-Type: application/json

{
  "titulo": "Minha primeira postagem",
  "texto": "Conteúdo da postagem",
  "tema": { "id": 1 },
  "usuario": { "id": 1 }
}
```

### Temas (requer autenticação)

#### Listar todos
```http
GET /temas
Authorization: Bearer {token}
```

#### Criar tema
```http
POST /temas
Authorization: Bearer {token}
Content-Type: application/json

{
  "descricao": "Tecnologia"
}
```

## 🗄️ Estrutura do Banco de Dados

### Tabela: tb_usuarios
- `id` - Identificador único
- `nome` - Nome completo
- `usuario` - E-mail (único)
- `senha` - Senha criptografada
- `foto` - URL da foto de perfil

### Tabela: tb_temas
- `id` - Identificador único
- `descricao` - Descrição do tema

### Tabela: tb_postagens
- `id` - Identificador único
- `titulo` - Título da postagem
- `texto` - Conteúdo
- `data` - Data de atualização
- `tema_id` - Relacionamento com tema
- `usuario_id` - Relacionamento com usuário

## 🔒 Segurança

- Senhas criptografadas com bcrypt (10 rounds)
- JWT com secret seguro
- Validação de dados com class-validator
- Guards para proteção de rotas
- SSL habilitado para conexão PostgreSQL

## 🧪 Testes

```bash
# Testes unitários
npm run test

# Testes e2e
npm run test:e2e

# Cobertura de testes
npm run test:cov
```

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run start:prod

# Build
npm run build

# Testes
npm run test
npm run test:e2e
npm run test:cov
```

## 🌐 Deploy

### Variáveis de Ambiente Necessárias
```env
DATABASE_URL=postgresql://user:password@host:port/database
```

A aplicação está configurada para usar:
- **PostgreSQL** em produção (via DATABASE_URL)
- **MySQL** em desenvolvimento (localhost)

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT.

## 👥 Autores

Desenvolvido com 💜 por Paulo Henrique Belarmino

## 📞 Contato

- Email: paulobelarmino047@gmail.com

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
