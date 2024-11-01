# Essentia

## Project Description
**Essentia** is a web application developed to facilitate order management in restaurants. With this application, users can place product orders efficiently and quickly. The platform was built with modern technologies to ensure performance, security, and scalability.

## Technologies Used
- **Next.js**: React framework for server-side rendering and building modern applications.
- **Bun**: Ultra-fast JavaScript runtime and package manager.
- **Prisma**: ORM that simplifies database access.
- **PostgreSQL**: Robust relational database system.
- **Nginx**: Web server and reverse proxy to manage requests and provide SSL.
- **Docker** and **Docker Compose**: Used for container orchestration and easy deployment.

## Project Structure
```plaintext
essentia/
├── app/                    # Frontend code and Next.js routes
│   ├── layout.tsx          # Main layout of the application
│   ├── page.tsx            # Main Next.js page
│   └── page.module.css     # Page-specific styles
├── docker/                 # Docker configurations and scripts
│   ├── Dockerfile          # Dockerfile to configure the application environment
│   ├── nginx.conf          # Nginx reverse proxy configuration
│   └── ssl/                # SSL certificates
│       ├── essentia.crt
│       └── essentia.key
├── node_modules/           # Node.js modules (auto-generated)
├── prisma/                 # Prisma ORM configuration
│   ├── schema.prisma       # Database schema
│   └── migrations/         # Database migrations
├── public/                 # Static files and public assets
├── src/                    # Main source code
│   ├── api-core/           # Backend logic, controllers, and services
│   │   ├── config/         # Backend configurations (e.g., database setup)
│   │   ├── controllers/    # HTTP request controllers
│   │   ├── database/       # Database connections and direct interactions
│   │   ├── jobs/           # Async tasks and cron jobs
│   │   ├── middlewares/    # Authentication and validation middlewares
│   │   ├── repositories/   # Data access repositories
│   │   ├── services/       # Business logic and backend services
│   │   └── types/          # Backend-specific type definitions
│   ├── assets/             # Media files and other assets
│   ├── components/         # Reusable application components
│   ├── fonts/              # Fonts used in the application
│   ├── hooks/              # Custom hooks for specific functionalities
│   ├── styles/             # Global and utility styles
│   ├── types/              # Shared TypeScript types and interfaces
│   └── utils/              # Utility functions and helpers
├── .dockerignore           # Files and folders ignored by Docker
├── .env                    # Environment variables (do not commit)
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Files and folders ignored by Git
├── babel.config.ts         # Babel configuration
├── bun.lockb               # Bun lock file (package manager)
├── docker-compose.yml      # Docker Compose orchestration file
├── LICENSE                 # Project license
├── next-env.d.ts           # Type declarations for Next.js
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
├── README.md               # Project documentation
└── tsconfig.json           # TypeScript configuration
```

## Main Features
- **Order management**: Allows users to place product orders in the restaurant.
- **Product listing**: View available products for ordering.
- **Authentication and access control**: User login and access control module.
- **Real-time order management**: Instant updates of placed orders.

## Environment Setup
Before running the project, make sure you have the following prerequisites:

### Prerequisites
- **Docker** e **Docker Compose**
- **Bun** (for local development)

### `.env` Configuration
Create a `.env` file in the project root with the following environment variables:
```dotenv
# Database settings
DB_USERNAME=essentia
DB_PASSWORD=essentia
DB_DATABASE=essentia
DB_HOST=db
DB_PORT=5432
DB_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_DATABASE}

NEXT_PUBLIC_API_BASE_URL=http://localhost:3000

```

## How to Run the Project
1. Clone this repository:
   ```bash
   git clone https://github.com/seu-usuario/essentia.git
   ```

2. Navigate to the project directory:
   ```bash
   cd essentia
   ```

3. Start the containers using Docker Compose:
   ```bash
   docker-compose up --build
   ```

4. Access the application in your browser:
   ```
   http://localhost:3000
   ```


## License
This project is provided for educational and personal use only. Reproduction, distribution, or commercial use is not allowed without prior authorization from the authors.

For more details about the terms of use, refer to the `LICENSE` file or contact the project maintainers.
