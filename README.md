# Essentia

## Descrição do projeto
O **Essentia** é uma aplicação web desenvolvida para facilitar o gerenciamento de pedidos em restaurantes. Com essa aplicação, os usuários podem realizar pedidos de produtos de forma eficiente e rápida. A plataforma foi construída com tecnologias modernas para garantir desempenho, segurança e escalabilidade. 

## Tecnologias utilizadas
- **Next.js**: Framework React para renderização do lado do servidor e construção de aplicações modernas.
- **Bun**: Gerenciador de pacotes e ambiente de execução de JavaScript ultrarrápido.
- **Prisma**: ORM que simplifica o acesso ao banco de dados.
- **PostgreSQL**: Sistema de banco de dados relacional robusto.
- **Nginx**: Servidor web e proxy reverso para gerenciar solicitações e fornecer SSL.
- **Docker** e **Docker Compose**: Utilizados para orquestração de containers e fácil deploy.

## Estrutura do projeto
```plaintext
essentia/
├── app/                    # Código do frontend e rotas do Next.js
│   ├── components/         # Componentes reutilizáveis da aplicação
│   ├── pages/              # Páginas e rotas do Next.js
│   └── styles/             # Estilos globais e específicos da aplicação
├── core-api/               # Lógica do backend, controladores e serviços
│   ├── controllers/        # Controladores de requisições
│   ├── models/             # Definição de modelos de dados
│   └── middlewares/        # Middlewares de autenticação e outros
├── prisma/                 # Configuração do Prisma ORM
│   ├── schema.prisma       # Esquema do banco de dados
│   └── migrations/         # Migrações do banco de dados
├── docker/                 # Configurações e scripts do Docker
│   ├── Dockerfile          # Dockerfile para configurar o ambiente da aplicação
│   ├── nginx.conf          # Configuração do Nginx para proxy reverso
│   └── ssl/                # Certificados SSL
│       ├── essentia.crt
│       └── essentia.key
├── public/                 # Arquivos estáticos e assets públicos
├── .env                    # Variáveis de ambiente (não comitar)
├── docker-compose.yml      # Arquivo de orquestração do Docker Compose
└── README.md               # Documentação do projeto
```


## Funcionalidades principais
- **Gerenciamento de pedidos**: Permite aos usuários fazerem pedidos de produtos no restaurante.
- **Listagem de produtos**: Visualização de produtos disponíveis para pedido.
- **Autenticação e controle de acesso**: Módulo para login e controle de acesso do usuário.
- **Gerenciamento de pedidos em tempo real**: Atualizações instantâneas dos pedidos feitos.

## Configuração do Ambiente
Antes de executar o projeto, certifique-se de ter os seguintes pré-requisitos:

### Pré-requisitos
- **Docker** e **Docker Compose**
- **Bun** (para desenvolvimento local)

### Configuração do `.env`
Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis de ambiente:
```dotenv
# Configurações do Banco de Dados
DB_USERNAME=essentia
DB_PASSWORD=essentia
DB_DATABASE=essentia
DB_HOST=db
DB_PORT=5432
DB_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}

NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

```

## Como executar o projeto
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/essentia.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd essentia
   ```

3. Suba os containers com Docker Compose:
   ```bash
   docker-compose up --build
   ```

4. Acesse a aplicação em seu navegador:
   ```
   http://localhost:3000
   ```


## Licença
Este projeto é disponibilizado para uso exclusivamente educacional e pessoal. A reprodução, distribuição ou uso comercial não é permitido sem a autorização prévia dos autores. 

Para mais detalhes sobre os termos de uso, consulte o arquivo `LICENSE` ou entre em contato com os mantenedores do projeto.
