# 🎨 PROJECT SETUP VISUAL OVERVIEW

Berikut adalah visualisasi lengkap setup project Lunara lokal Anda.

---

## 🏗️ ARCHITECTURE DIAGRAM

```
┌─────────────────────────────────────────────────────────┐
│                   LUNARA PROJECT SETUP                  │
└─────────────────────────────────────────────────────────┘

                    CLIENT (Port 5173)
                         ┌─────┐
                         │React│
                         │Vite │
                         └──┬──┘
                            │
            ┌───────────────┼───────────────┐
            │               │               │
        Components      Pages          Hooks
      (ui, etc)      (Home, etc)   (useAuth)

                    SERVER (Port 3000)
                         ┌────────┐
                         │Express │
                         │  tRPC  │
                         └───┬────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
     Routes             Context             Database
    /api/trpc        (Auth, etc)         (MySQL)
    /oauth/callback

                    DATABASE (Port 3306)
                         ┌────────┐
                         │ MySQL  │
                         │ lunara │
                         └───┬────┘
                             │
        ┌────────────────────┴────────────────────┐
        │                                         │
    users table                            (future tables)
    - id                                       TBD
    - openId
    - name, email
    - role, etc
```

---

## 📊 SETUP STATUS

```
✅ COMPLETED:

Frontend Setup
├─ ✅ Vite configured (vite.config.ts)
├─ ✅ React setup
├─ ✅ TypeScript enabled
├─ ✅ Tailwind CSS ready
└─ ✅ Components ready to use

Backend Setup
├─ ✅ Express configured
├─ ✅ tRPC API ready
├─ ✅ Context system ready
└─ ✅ OAuth routes ready

Database Setup
├─ ✅ MySQL connection configured
├─ ✅ Drizzle ORM setup
├─ ✅ Schema defined (users table)
└─ ✅ Ready for migrations

Environment Variables
├─ ✅ .env created
├─ ✅ .env.local created
├─ ✅ .env.example created
└─ ✅ DATABASE_URL configured

Documentation
├─ ✅ START_HERE.md (entry point)
├─ ✅ QUICKSTART.md (5-min guide)
├─ ✅ SETUP_LOKAL.md (detailed)
├─ ✅ COMMANDS.md (reference)
├─ ✅ MYSQL_PASSWORD_GUIDE.md (help)
├─ ✅ README_SETUP.md (index)
├─ ✅ CHECKLIST_SETUP.md (tracking)
├─ ✅ QUICK_REFERENCE.md (card)
└─ ✅ SETUP_SUMMARY.md (summary)
```

---

## 🔄 DATA FLOW DIAGRAM

```
┌─────────────┐
│   Browser   │ (http://localhost:3000)
└──────┬──────┘
       │ HTTP/JSON
       ▼
┌─────────────────────┐
│   React App         │ (Client)
│  - Pages            │
│  - Components       │
│  - Hooks            │
│  - tRPC Client      │
└──────┬──────────────┘
       │ tRPC RPC Calls
       ▼
┌─────────────────────┐
│   Express Server    │ (Backend)
│  - tRPC Router      │
│  - Context (Auth)   │
│  - OAuth Routes     │
└──────┬──────────────┘
       │ SQL Queries
       ▼
┌─────────────────────┐
│   MySQL Database    │
│  - lunara database  │
│  - users table      │
│  - (future tables)  │
└─────────────────────┘
```

---

## 📂 FILE ORGANIZATION

```
lunara/
│
├── 📖 DOCUMENTATION (Read These First!)
│   ├── START_HERE.md              ← Begin here!
│   ├── QUICKSTART.md              ← 5-minute start
│   ├── SETUP_LOKAL.md             ← Detailed guide
│   ├── README_SETUP.md            ← Index of all docs
│   ├── QUICK_REFERENCE.md         ← Quick lookup
│   ├── COMMANDS.md                ← Command reference
│   ├── MYSQL_PASSWORD_GUIDE.md    ← MySQL help
│   ├── CHECKLIST_SETUP.md         ← Setup tracking
│   ├── SETUP_SUMMARY.md           ← What was done
│   └── VISUAL_OVERVIEW.md         ← This file!
│
├── ⚙️ CONFIGURATION
│   ├── .env                       ← Main config (shared)
│   ├── .env.local                 ← Local override (gitignored)
│   ├── .env.example               ← Template
│   ├── package.json               ← Dependencies & scripts
│   ├── tsconfig.json              ← TypeScript config
│   ├── vite.config.ts             ← Frontend build config
│   ├── drizzle.config.ts          ← Database config
│   ├── vitest.config.ts           ← Test config
│   └── components.json            ← Component config
│
├── 🎨 CLIENT (Frontend)
│   └── client/
│       ├── index.html             ← Entry HTML
│       ├── src/
│       │   ├── main.tsx           ← Entry TypeScript
│       │   ├── App.tsx            ← Root component
│       │   ├── index.css          ← Global styles
│       │   ├── const.ts           ← Client constants
│       │   ├── components/        ← React components
│       │   ├── pages/             ← Page components
│       │   ├── hooks/             ← Custom hooks
│       │   ├── contexts/          ← React contexts
│       │   ├── _core/             ← Core logic
│       │   └── lib/               ← Utilities
│       └── public/                ← Static assets
│
├── 🔧 SERVER (Backend)
│   └── server/
│       ├── _core/
│       │   ├── index.ts           ← Server entry
│       │   ├── env.ts             ← Environment config
│       │   ├── context.ts         ← tRPC context
│       │   ├── trpc.ts            ← tRPC setup
│       │   ├── oauth.ts           ← OAuth routes
│       │   ├── vite.ts            ← Vite setup
│       │   ├── cookies.ts         ← Cookie handling
│       │   ├── llm.ts             ← LLM integration
│       │   └── ... (other modules)
│       ├── routers.ts             ← tRPC routers
│       ├── db.ts                  ← Database operations
│       └── storage.ts             ← File storage
│
├── 🗄️ DATABASE (Schema & Migrations)
│   └── drizzle/
│       ├── schema.ts              ← Table definitions
│       ├── relations.ts           ← Table relations
│       ├── migrations/            ← Auto-generated
│       └── meta/                  ← Migration metadata
│
├── 📦 SHARED CODE
│   └── shared/
│       ├── types.ts               ← Shared types
│       ├── const.ts               ← Shared constants
│       └── _core/
│           └── errors.ts          ← Error definitions
│
└── 🔨 BUILD & ASSETS
    ├── pnpm-lock.yaml             ← Dependency lock
    ├── patches/                   ← Dependency patches
    ├── dist/                      ← Build output (generated)
    └── node_modules/              ← Dependencies (generated)
```

---

## 🚀 EXECUTION FLOW

```
┌─────────────────────────────────────────────┐
│         USER RUNS: pnpm install             │
└────────┬────────────────────────────────────┘
         │ Installs all dependencies
         │ (see package.json)
         ▼
┌─────────────────────────────────────────────┐
│         USER RUNS: pnpm db:push             │
└────────┬────────────────────────────────────┘
         │ 1. Reads drizzle/schema.ts
         │ 2. Connects to MySQL via DATABASE_URL
         │ 3. Generates migrations
         │ 4. Creates tables in database
         ▼
┌─────────────────────────────────────────────┐
│         USER RUNS: pnpm dev                 │
└────────┬────────────────────────────────────┘
         │ 1. Starts Express server (Port 3000)
         │ 2. Sets up Vite dev server (Port 5173)
         │ 3. Enables hot reload
         │ 4. Initializes tRPC router
         ▼
┌─────────────────────────────────────────────┐
│   SERVER READY - http://localhost:3000      │
│   FRONTEND READY - http://localhost:5173    │
│                                             │
│   User can now:                             │
│   - Edit files                              │
│   - Browser auto-refreshes                  │
│   - Test API via tRPC calls                 │
│   - View database in phpMyAdmin             │
└─────────────────────────────────────────────┘
```

---

## 🗂️ KEY FILES EXPLAINED

### `.env` - Main Configuration
```
DATABASE_URL=mysql://root:@localhost:3306/lunara
VITE_APP_ID=local-dev-app-id
JWT_SECRET=local-dev-secret-key-change-in-production
NODE_ENV=development
```

### `.env.local` - Local Overrides (Gitignored)
```
DATABASE_URL=mysql://root:@localhost:3306/lunara
# (Can override .env values here)
```

### `drizzle.config.ts` - Database Configuration
```typescript
// Reads DATABASE_URL from .env
// Points to drizzle/schema.ts for table definitions
// Outputs migrations to drizzle/migrations/
```

### `package.json` - Scripts & Dependencies
```json
{
  "scripts": {
    "dev": "pnpm run backend & pnpm run frontend",
    "db:push": "drizzle-kit generate && drizzle-kit migrate"
  }
}
```

---

## 🔐 SECURITY MODEL

```
┌──────────────────────────────────────────┐
│     ENVIRONMENT VARIABLE MANAGEMENT     │
└──────────────────────────────────────────┘

.env (Committed)
├─ PUBLIC values
├─ Shared config
└─ No secrets

.env.local (GITIGNORED) ⭐
├─ PRIVATE/SECRET values
├─ Local credentials
├─ Database password (if any)
└─ NOT committed to git

.env.example (Committed)
├─ Template for developers
├─ Shows which vars needed
└─ No actual values

RESULT:
✅ Each developer has their own .env.local
✅ Credentials never shared or committed
✅ Production uses different .env.production
```

---

## 📊 TECHNOLOGY STACK

```
Frontend:
├─ React 19.1
├─ Vite 7
├─ TypeScript 5.9
├─ Tailwind CSS 4
└─ tRPC Client

Backend:
├─ Node.js (Express)
├─ tRPC 11
├─ TypeScript 5.9
└─ Drizzle ORM

Database:
├─ MySQL 3.15
└─ Drizzle Kit

Development:
├─ pnpm 10
├─ Vitest 2
└─ Prettier + ESLint
```

---

## ✅ PRE-LAUNCH CHECKLIST

Before you can run `pnpm dev`:

- [ ] MySQL server running on localhost:3306
- [ ] Database `lunara` created
- [ ] Node.js v18+ installed
- [ ] pnpm v10+ installed
- [ ] All dependencies installed (`pnpm install`)
- [ ] Database migrations applied (`pnpm db:push`)
- [ ] No error in console

---

## 🎯 NEXT STEPS

1. **Read:** START_HERE.md
2. **Understand:** QUICKSTART.md
3. **Setup:** Run `pnpm install && pnpm db:push && pnpm dev`
4. **Develop:** Edit files and code!
5. **Reference:** Use QUICK_REFERENCE.md or COMMANDS.md

---

## 🆘 HELP NAVIGATION

```
Problem                          → Solution File
────────────────────────────────────────────
Can't start?                     → QUICKSTART.md
MySQL connection error?          → SETUP_LOKAL.md
MySQL has password?              → MYSQL_PASSWORD_GUIDE.md
Which command should I use?      → COMMANDS.md
Complete overview needed?        → README_SETUP.md
Quick lookup?                    → QUICK_REFERENCE.md
Setup verification?              → CHECKLIST_SETUP.md
What was configured?             → SETUP_SUMMARY.md
```

---

## 🎉 YOU'RE ALL SET!

Everything is configured and ready to go.

**Next step:** Open START_HERE.md or QUICKSTART.md and begin! 🚀

---

*Visual Overview v1.0*
*Generated: November 2025*
