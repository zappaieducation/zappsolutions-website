# replit.md

## Overview

This is a modern full-stack web application built with React, Express, and PostgreSQL. The application appears to be a business website for "ZaPP Solutions" - an AI consulting company that helps organizations become AI-first through strategy, training, and custom development. The site includes a landing page with services showcase, AI agents display, statistics, and a contact form that stores submissions in a PostgreSQL database.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite with custom configuration

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Schema Validation**: Zod for runtime type checking
- **Development**: Hot module replacement via Vite integration

### Project Structure
- **Monorepo Design**: Single repository with separate client, server, and shared directories
- **Client**: React frontend in `/client` directory
- **Server**: Express backend in `/server` directory  
- **Shared**: Common schemas and types in `/shared` directory
- **Component System**: shadcn/ui components in `/client/src/components/ui`

## Key Components

### Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in `/shared/schema.ts` with Zod validation
- **Tables**: 
  - `contacts` - stores contact form submissions with company details
  - `users` - basic user table (legacy/future use)
- **Storage**: Dual implementation with in-memory storage for development and database storage for production

### API Layer
- **Contact Management**: 
  - `POST /api/contact` - submit contact form
  - `GET /api/contacts` - retrieve all contacts
  - `GET /api/contacts/:id` - retrieve specific contact
- **Validation**: Server-side validation using Zod schemas
- **Error Handling**: Centralized error handling middleware

### Frontend Features
- **Landing Page**: Hero section, services showcase, AI agents display
- **Contact Form**: Multi-field form with validation for business inquiries
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component Library**: Comprehensive UI components from shadcn/ui
- **Toast Notifications**: User feedback for form submissions

## Data Flow

1. **User Interaction**: User fills out contact form on landing page
2. **Client Validation**: React Hook Form validates using Zod schemas
3. **API Request**: Form data sent to `/api/contact` endpoint
4. **Server Validation**: Express validates data against shared Zod schema
5. **Database Storage**: Contact information stored in PostgreSQL via Drizzle ORM
6. **Response**: Success/error response sent back to client
7. **UI Feedback**: Toast notification shows submission status

## External Dependencies

### Core Dependencies
- **UI Framework**: Radix UI primitives for accessible components
- **Database**: Neon Database for serverless PostgreSQL
- **Validation**: Zod for schema validation and type safety
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React for consistent iconography

### Development Dependencies
- **Build Tools**: Vite, esbuild for production builds
- **Type Checking**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (implied by structure)

## Deployment Strategy

### Build Process
- **Client Build**: Vite builds React app to `/dist/public`
- **Server Build**: esbuild bundles Express server to `/dist/index.js`
- **Database Migrations**: Drizzle Kit manages schema changes

### Environment Configuration
- **Database URL**: Required environment variable for PostgreSQL connection
- **Development**: Local development with Vite dev server and Express
- **Production**: Bundled server serving static assets and API routes

### Key Scripts
- `npm run dev` - Development mode with hot reloading
- `npm run build` - Production build for both client and server
- `npm run start` - Production server startup
- `npm run db:push` - Push database schema changes

### Hosting Considerations
- **Static Assets**: Client build output can be served by Express or CDN
- **Database**: Requires PostgreSQL-compatible database (configured for Neon)
- **Environment**: Node.js runtime with ES modules support
- **Session Storage**: Configured for PostgreSQL session storage (connect-pg-simple)

The application is designed for easy deployment on platforms like Replit, Vercel, or any Node.js hosting service with PostgreSQL database support.