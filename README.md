# SaaS Starter Kit

A modern, production-ready SaaS starter template built with Next.js, PostgreSQL, and Drizzle ORM. Designed for speed, DX, and extensibility.

## The Stack

- [Next.js](https://nextjs.org/) for **Frontend**
- [TailwindCSS](https://tailwindcss.com/) for **Styling**
- [Shadnc/UI](https://ui.shadcn.com/) as **Component Library**
- [Next.js API Routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) for **Backend**
- [PostgreSQL](https://www.postgresql.org/) for **Database**
- [Drizzle-ORM](https://orm.drizzle.team/) for **Database Access**
- [Better-Auth](https://better-auth.com/) for **Authentication**
- [Biome](https://biomejs.dev/) for **Formatting and Linting**
- [@t3-oss/env-nextjs](https://www.npmjs.com/package/@t3-oss/env-nextjs) for type-safe Environment Variables

## Getting Started

1. Fork and Clone Repo
   
   ```bash
   git clone https://github.com/[username]/saas-starter-kit.git
   ```
   
3. Install Dependencies (PNPM)
   
   ```bash
   pnpm install
   ```
   
5. Copy the contents of `.env.sample` into a new file named `.env`, then update the values with your own configuration.
6. Generate and apply the database schema (you can either use a cloud-hosted database or spin up a local PostgreSQL container using `pnpm run docker:up`. If needed, adjust the `docker-compose.yml` to fit your project setup).

   ```bash
   pnpm run db:generate
   pnpm run db:migrate
   ```

7. Run the local server

   ```bash
   pnpm run dev
   ```
