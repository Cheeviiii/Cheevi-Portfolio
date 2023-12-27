# Portfolio pessoal

Esse é meu portfolio onde mostro alguns dos meus projetos e sobre mim e minhas skills.

## Tecnológias usadas

- NextJS
- TailwindCSS
- Prisma

## Pré-requisitos

Antes de começar, certifique-se que tenha o seguinte instalado em sua maquina:

- Node.JS [Download](http://nodejs.org)

## Como iniciar o projeto

1. **Clone o repostório:**

```bash
git clone https://github.com/Cheeviiii/Portfolio.git
```

2. **Acesse o diretório do projeto:**

```bash
cd portfolio
```

3. **Instale as dependências:**

```bash
yarn install
# ou
npm install
```

4. **Crie uma .env na raiz do projeto**
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=SECRET_KEY

AUTH_USERNAME=USERNAME
AUTH_PASSWORD=PASSWORD
NEXT_PUBLIC_API_KEY=SUA_API_KEY_AQUI
NEXT_PUBLIC_GITHUB_TOKEN=TOKEN_GITHUB

DATABASE_URL=URL_DO_POSTGRESSQL
```

5. **Inicie o servidor de desenvolvimento:**

```bash
yarn run start
# ou
npm run start
```

6. **Abra o aplicativo em seu navegador em:** http://localhost:3000
