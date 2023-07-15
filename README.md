# Group F

## Tech Stacks

- Frontend:
  - Next.js static build

- Backend:
  - Nest.js
  - postgresql

## Build Script

- Frontend:

  1. Build

     ```bash
     npm run build
     ```

  2. Start server

     ```bash
     npm start
     ```

- Backend:

  1. Update database schema

     ```bash
     npx prisma db push
     ```

  2. Generate Prisma Client

     ```bash
     npx prisma generate
     ```

  3. Build nestjs

     ```bash
     npm run build
     ```

  4. Running server

     ```bash
     npm start
     ```
