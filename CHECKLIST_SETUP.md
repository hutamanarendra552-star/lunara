# ✅ CHECKLIST SETUP LOKAL LUNARA

Ikuti langkah-langkah berikut untuk setup project Lunara secara lokal.

## 📦 Step 1: Install Dependencies (Hanya 1x)

- [ ] MySQL Server running di `localhost:3306` ✓ (Sudah Anda buat)
- [ ] Database `lunara` sudah ada di phpMyAdmin ✓ (Sudah Anda buat)
- [ ] Node.js v18+ installed
  ```powershell
  node --version
  ```
- [ ] pnpm installed
  ```powershell
  npm install -g pnpm
  pnpm --version
  ```

## 🔧 Step 2: Setup Files (Sudah Dilakukan)

- [x] `.env` dibuat dengan DATABASE_URL
- [x] `.env.local` dibuat dengan kredensial lokal
- [x] `.env.example` sebagai referensi
- [x] `SETUP_LOKAL.md` sebagai panduan lengkap

## 📥 Step 3: Install Project Dependencies

```powershell
cd c:\Users\MOTSURE\Documents\2.dk\lunara
pnpm install
```

Tunggu proses install selesai (bisa beberapa menit).

## 🗄️ Step 4: Setup Database

```powershell
pnpm db:push
```

Ini akan:
- Generate migration files
- Jalankan migration untuk create table `users`
- Jika ada error: pastikan MySQL server running dan DATABASE_URL benar

## 🚀 Step 5: Run Development Server

Buka **2 terminal** terpisah di folder project:

**Terminal 1 - Backend Server**
```powershell
pnpm dev
```
Server akan mulai running di `http://localhost:3000` (atau port lain jika busy)

**Terminal 2 - Frontend (optional, tergantung setup Vite)**
```powershell
# Jika ada vite dev server terpisah
pnpm run dev
```

## ✨ Step 6: Verifikasi Setup Berhasil

- [ ] Backend server running di `http://localhost:3000`
- [ ] Tidak ada error di console
- [ ] Database table `users` tercipta (cek di phpMyAdmin)
- [ ] Tidak ada "DATABASE_URL is required" error

## 🐛 Troubleshooting

### ❌ Error: DATABASE_URL is required
**Solution:**
- Pastikan `.env.local` ada di root folder
- Cek isi DATABASE_URL benar: `mysql://root:@localhost:3306/lunara`
- Restart terminal dan coba lagi

### ❌ MySQL Connection Refused
**Solution:**
- Buka phpMyAdmin: `http://localhost/phpmyadmin`
- Pastikan database `lunara` sudah ada
- Jika MySQL tidak running:
  - **XAMPP**: Buka Control Panel, klik Start untuk MySQL
  - **WAMP**: Klik start untuk MySQL

### ❌ Port 3000 Already in Use
**Solution:**
- Server otomatis cari port lain (3001, 3002, dll)
- Atau close aplikasi yang pakai port 3000
- Atau set custom port: `PORT=3001 pnpm dev`

### ❌ "No such file or directory" Error
**Solution:**
- Pastikan sedang di folder project yang benar:
  ```powershell
  cd c:\Users\MOTSURE\Documents\2.dk\lunara
  pwd  # Pastikan output sesuai
  ```

## 📚 Informasi Berguna

| File | Deskripsi |
|------|-----------|
| `.env` | Public config (di-commit) |
| `.env.local` | Lokal config (NOT di-commit, di .gitignore) |
| `.env.example` | Template variabel yang diperlukan |
| `SETUP_LOKAL.md` | Panduan lengkap setup lokal |
| `vite.config.ts` | Frontend build config |
| `drizzle.config.ts` | Database ORM config |
| `package.json` | Dependencies & scripts |

## 🔗 Useful Links

- **PhpMyAdmin**: http://localhost/phpmyadmin
- **VS Code**: [Download](https://code.visualstudio.com/)
- **Drizzle Docs**: https://orm.drizzle.team/
- **tRPC Docs**: https://trpc.io/

## ⚡ Quick Commands Reference

```powershell
# Install dependencies
pnpm install

# Setup database
pnpm db:push

# Run development server
pnpm dev

# Check TypeScript errors
pnpm check

# Format code
pnpm format

# Run tests
pnpm test

# Build for production
pnpm build

# Start production build
pnpm start
```

---

## ✅ Semuanya Siap!

Jika semua checklist sudah done, project siap untuk development! 🎉

Pertanyaan atau error? Cek **SETUP_LOKAL.md** untuk penjelasan lebih detail.
