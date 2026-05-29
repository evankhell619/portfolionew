# Portfolio Dev

Portfolio Dev adalah website portfolio interaktif berbasis React + Vite untuk menampilkan profil, project case study, experience, tech stack, dan GitHub stats.

## Gambaran Singkat

Alur utamanya dibuat sederhana: pengunjung masuk ke halaman utama, membaca profil, melihat project dan detailnya, lalu mengecek experience serta tech stack.

Fitur utamanya:

- Animasi modern dengan GSAP + ScrollTrigger.
- Smooth scrolling dengan Lenis.
- Project gallery dengan detail berbasis route/modal.
- Section registry terpusat supaya navigasi antar bagian tetap konsisten.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- GSAP + ScrollTrigger
- Lenis
- React Router

## Prasyarat

- Node.js 22 atau lebih baru
- npm 10 atau lebih baru

## Mulai Dari Nol

### 1. Clone repository

```bash
git clone https://github.com/evan/Portfolio-dev.git
cd Portfolio-dev
```

### 2. Install dependency

```bash
npm install
```

### 3. Jalankan development server

```bash
npm run dev
```

Buka URL yang ditampilkan Vite, biasanya `http://localhost:5173`.

### 4. Build production

```bash
npm run build
```

Hasil build akan masuk ke folder `build/`.

### 5. Preview hasil build

```bash
npm run preview
```

### 6. Cek sebelum deploy

```bash
npm run check
```

Perintah ini menjalankan build production lalu audit dependency production.

## Script Yang Tersedia

- `npm run dev` untuk menjalankan development server.
- `npm run start` sama seperti `npm run dev`.
- `npm run build` untuk menghasilkan production build.
- `npm run preview` untuk preview hasil build lokal.
- `npm run check` untuk build + audit dependency.

## Struktur Project

```text
.
├── index.html
├── public/
├── src/
│   ├── components/
│   ├── components/projects/
│   ├── data/
│   ├── hooks/
│   ├── pages/
│   ├── projectDetails/
│   ├── services/
│   └── utils/
├── tailwind.config.js
├── vite.config.js
└── build/
```

## Cara Kerja Konten

Kalau kamu ingin mengubah isi portfolio tanpa mengutak-atik layout besar, fokus ke file berikut:

- Profile, experience, tech stack, projects, achievements, dan capabilities: `src/data/portfolioData.js`
- Metadata kartu project di gallery: `src/data/projectMeta.js`
- Konten detail project: `src/data/projectDetailsData.js`
- Daftar section untuk target navigasi: `src/data/sectionRegistry.js`
- Detail route custom per project: `src/projectDetails/projectRegistry.js`

### Menambah project baru

1. Tambahkan metadata project di `src/data/projectMeta.js`.
2. Tambahkan data detail dengan `slug` yang sama di `src/data/projectDetailsData.js`.
3. Jika butuh tampilan detail custom, buat komponen baru di `src/projectDetails/`.
4. Daftarkan komponen tersebut di `src/projectDetails/projectRegistry.js`.

### Menambah section baru

1. Tambahkan section ke `src/data/sectionRegistry.js`.
2. Pastikan komponen memiliki `elementId` yang cocok.
3. Navbar akan ikut memakai target section tersebut jika item navigasinya ditambahkan.

## Asset Penting

- Foto about: `public/profilee.webp`
- Foto preload hero: `public/profile.webp`
- Gambar OG/Twitter: `public/og-icon.png`
- CV: `public/cv.pdf`

## Deploy

Deploy hasil folder `build/` ke hosting statis seperti Netlify, Vercel, atau Cloudflare Pages.

Karena ini SPA, pastikan rewrite/fallback route diarahkan ke `index.html` supaya route seperti detail project tetap aman saat dibuka langsung.

## Troubleshooting

- Build tidak muncul di folder yang diharapkan: hasilnya ada di `build/`, bukan `dist/`.
- CV tidak sesuai: ganti file `public/cv.pdf`.
- GitHub stats kosong: kemungkinan kena rate limit API publik.

## License

Repository ini belum menyertakan lisensi open-source.
