# 📝 COMMAND REFERENCE

Daftar lengkap semua command yang Anda butuhkan.

## 🎯 Essential Commands

```powershell
# Install dependencies (hanya pertama kali)
pnpm install

# Setup database migrations
pnpm db:push

# Run development server
pnpm dev

# Format code
pnpm format

# Check TypeScript errors
pnpm check
```

## 🔨 Development Commands

```powershell
# Run server in dev mode (watch for changes)
pnpm dev

# Build for production
pnpm build

# Start production build
pnpm start

# Run tests
pnpm test

# Check code style
pnpm check
```

## 🗄️ Database Commands

```powershell
# Generate and run migrations
pnpm db:push

# View database schema
# (Open phpmyadmin: http://localhost/phpmyadmin)
```

## 📦 Package Management

```powershell
# Install new package
pnpm add package-name

# Install dev dependency
pnpm add -D package-name

# Remove package
pnpm remove package-name

# Update packages
pnpm update

# List installed packages
pnpm list
```

## 🔧 Troubleshooting Commands

```powershell
# Clear pnpm cache
pnpm store prune

# Reinstall dependencies
pnpm install --force

# Clear node_modules and reinstall
Remove-Item -Path node_modules -Recurse -Force; pnpm install

# Check TypeScript compilation
pnpm check

# Format all files
pnpm format
```

## 🌐 Access Points

- **Frontend**: http://localhost:5173 (Vite dev server)
- **Backend**: http://localhost:3000 (Express server)
- **API**: http://localhost:3000/api/trpc
- **Database**: http://localhost/phpmyadmin

## 🚀 Typical Workflow

```powershell
# Day 1: First time setup
cd c:\Users\MOTSURE\Documents\2.dk\lunara
pnpm install
pnpm db:push
pnpm dev

# Day 2+: Regular development
pnpm dev        # Run this every time you start work

# Before commit
pnpm check      # Check for TypeScript errors
pnpm format     # Format code
pnpm test       # Run tests
```

## 💡 Pro Tips

- Jangan close terminal ketika `pnpm dev` running
- Buka terminal baru jika ingin run command lain
- Changes otomatis reload di browser (hot reload)
- Lihat error di console jika ada issues

---

**Quick reference done! Happy coding! 🎉**
