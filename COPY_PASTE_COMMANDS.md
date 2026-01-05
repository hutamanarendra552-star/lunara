# 🚀 COPY-PASTE COMMANDS - Instant Setup

Salin dan paste commands ini satu per satu di PowerShell untuk setup instan!

---

## ⚡ OPTION 1: FAST SETUP (All-In-One)

Salin dan jalankan semuanya sekaligus:

```powershell
cd c:\Users\MOTSURE\Documents\2.dk\lunara; pnpm install; pnpm db:push; pnpm dev
```

**Penjelasan:**
1. `cd ...` → Masuk folder project
2. `pnpm install` → Install dependencies
3. `pnpm db:push` → Setup database
4. `pnpm dev` → Jalankan development server

---

## ⚡ OPTION 2: STEP-BY-STEP (Recommended)

Jalankan satu command per baris:

### Step 1: Go to project folder
```powershell
cd c:\Users\MOTSURE\Documents\2.dk\lunara
```

### Step 2: Install dependencies
```powershell
pnpm install
```
*(Tunggu sampai selesai ~2-3 menit)*

### Step 3: Setup database
```powershell
pnpm db:push
```
*(Tunggu sampai selesai)*

### Step 4: Run development server
```powershell
pnpm dev
```

✅ **Done!** Lihat output di console untuk URL server

---

## 🔧 TROUBLESHOOTING COMMANDS

### Jika "pnpm not found"
```powershell
npm install -g pnpm
```

### Jika "DATABASE_URL is required"
```powershell
# Pastikan .env.local ada
Test-Path .env.local

# Lihat isinya
Get-Content .env.local
```

### Jika MySQL connection error
```powershell
# Test MySQL connection
mysql -u root -p lunara
# (Tekan Enter jika tidak ada password)
```

### Jika perlu restart
```powershell
# Clear cache
Remove-Item -Path node_modules -Recurse -Force; pnpm install

# Setup ulang
pnpm db:push

# Run
pnpm dev
```

---

## 📋 DAILY DEVELOPMENT COMMANDS

### Start development
```powershell
pnpm dev
```

### Check TypeScript errors
```powershell
pnpm check
```

### Format code
```powershell
pnpm format
```

### Run tests
```powershell
pnpm test
```

### Build for production
```powershell
pnpm build
```

### Start production build
```powershell
pnpm start
```

---

## 🗄️ DATABASE COMMANDS

### Generate and run migrations
```powershell
pnpm db:push
```

### Connect to MySQL directly
```powershell
mysql -u root -p lunara
```

### Check database in phpMyAdmin
```
Open browser: http://localhost/phpmyadmin
Select database: lunara
```

---

## 📦 PACKAGE COMMANDS

### Add new dependency
```powershell
pnpm add package-name
```

### Add dev dependency
```powershell
pnpm add -D package-name
```

### Remove dependency
```powershell
pnpm remove package-name
```

### Update all packages
```powershell
pnpm update
```

### List all packages
```powershell
pnpm list
```

---

## 🛠️ ADVANCED COMMANDS

### Kill process on port 3000
```powershell
# Windows - Find and kill process
Get-Process | Where-Object {$_.Port -eq 3000} | Stop-Process -Force

# Or use netstat to find
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Check Node version
```powershell
node --version
npm --version
pnpm --version
```

### Full clean reinstall
```powershell
# Remove everything
Remove-Item -Path node_modules -Recurse -Force
Remove-Item -Path pnpm-lock.yaml

# Reinstall fresh
pnpm install
pnpm db:push
pnpm dev
```

---

## 🌐 ACCESS URLS

### Backend Server
```
http://localhost:3000
```

### Frontend Dev Server  
```
http://localhost:5173
```

### API Endpoint
```
http://localhost:3000/api/trpc
```

### Database (phpMyAdmin)
```
http://localhost/phpmyadmin
```

---

## ⚙️ CONFIGURATION

### If MySQL has password
Edit `.env.local`:
```powershell
notepad .env.local
```

Change:
```
DATABASE_URL=mysql://root:password@localhost:3306/lunara
```

### If using different port
Set PORT environment variable:
```powershell
$env:PORT=3001; pnpm dev
```

### If MySQL on different host
Edit `.env.local`:
```
DATABASE_URL=mysql://root:@your-host:3306/lunara
```

---

## 💡 COMMON SETUPS

### First time setup
```powershell
cd c:\Users\MOTSURE\Documents\2.dk\lunara
pnpm install
pnpm db:push
pnpm dev
```

### After pulling new code
```powershell
pnpm install      # Install new deps if any
pnpm db:push      # Apply new migrations if any
pnpm dev          # Run server
```

### Before committing code
```powershell
pnpm check        # Check errors
pnpm format       # Format code
pnpm test         # Run tests
```

### Production build
```powershell
pnpm build        # Build
pnpm start        # Run built version
```

---

## 📝 COPY-PASTE TEMPLATE

Jika Anda punya MySQL password, gunakan template ini:

Edit `.env.local`:
```powershell
notepad .env.local
```

Replace with:
```
DATABASE_URL=mysql://root:YOUR_PASSWORD@localhost:3306/lunara
```

---

## ✅ VERIFICATION COMMANDS

### Check setup is correct
```powershell
# Check Node.js
node --version

# Check pnpm
pnpm --version

# Check TypeScript
pnpm check

# List installed packages
pnpm list
```

### Verify database connection
```powershell
# Run migrations (will connect to DB)
pnpm db:push

# Or try starting server
pnpm dev
```

---

## 🎯 QUICK REFERENCE

| Task | Command |
|------|---------|
| Go to project | `cd c:\Users\MOTSURE\Documents\2.dk\lunara` |
| Install deps | `pnpm install` |
| Setup DB | `pnpm db:push` |
| Run dev | `pnpm dev` |
| Check errors | `pnpm check` |
| Format code | `pnpm format` |
| Build prod | `pnpm build` |
| Run prod | `pnpm start` |
| Test | `pnpm test` |

---

## 🚀 READY!

Salin salah satu command di atas dan jalankan di PowerShell.

**Recommended:** Mulai dengan OPTION 2 (step-by-step) jika pertama kali.

Good luck! 🎉

---

*Copy-Paste Commands v1.0*
*Last Updated: November 2025*
