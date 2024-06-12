# URL Shortener
Este é um projeto de encurtador de URLs, desenvolvido usando Node.js, Express, Mongoose e MongoDB.

## Funcionalidades
- Encurtar URLs longas em URLs mais curtas.
- Redirecionar URLs curtas para suas URLs originais.

## Pré-requisitos
- Node.js instalado
- MongoDB Atlas configurado
- Conta no MongoDB Atlas com URI de conexão

## Configuração
1. Clone o repositório:
   git clone https://github.com/Rupelio/encurtador-url.git
   cd encurtador-url
2. Instale as dependências:
   npm install express mongoose dotenv shortid
3. Crie um arquivo `.env` na raiz do projeto e adicione a URI do MongoDB:
   DB_USER=<DB_USER>:
   DB_PASSWORD=<DB_PASSWORD>
   
## Executando o Projeto
1. Inicie o servidor:
   npm start
2. Abra o navegador e acesse `http://localhost:5000` para ver a aplicação em execução.
Estrutura do Projeto
- `server/app.js`: Configuração do servidor Express.
- `server/routes/index.js`: Definição das rotas para encurtar e redirecionar URLs.
- `server/models/url.js`: Modelo Mongoose para armazenar URLs no MongoDB.
- `public/`: Contém os arquivos front-end (HTML, CSS, JS).

## Endpoints
- `POST /shorten`: Encurta uma URL. Corpo da requisição deve conter um JSON com a URL original.
  {
    "original_url": "https://www.exemplo.com"
  }
- `GET /:short_url`: Redireciona a URL curta para a URL original.

## Tecnologias Utilizadas
- Node.js
- Express
- Mongoose
- MongoDB
- HTML/CSS/JavaScript

## Contribuição
1. Faça um fork do repositório.
2. Crie uma nova branch com as suas alterações: `git checkout -b minha-branch`.
3. Commit suas alterações: `git commit -m "Minha nova funcionalidade"`.
4. Faça o push para a branch: `git push origin minha-branch`.
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Contato
Para mais informações, entre em contato pelo [rupeliojunior445@gmail.com](mailto:rupeliojunior445@gmail.com).
