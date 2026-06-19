# Digital Invitation Website

Website undangan digital yang modern dan elegan untuk acara Anda.

## 🎉 Fitur Utama
- 📅 **Display Detail Acara** - Tampilkan tanggal, waktu, lokasi, dan host acara
- ✅ **Sistem RSVP** - Tamu dapat mengkonfirmasi kehadiran mereka
- 👥 **Manajemen Tamu** - Kelola dan lihat daftar tamu yang telah mengkonfirmasi
- 📊 **Statistik Real-time** - Pantau jumlah tamu yang akan hadir
- 🎨 **Desain Responsif** - Terlihat sempurna di semua perangkat (desktop, tablet, mobile)
- 📱 **Mobile-friendly** - Dioptimalkan untuk pengalaman mobile yang sempurna
- 💾 **Local Storage** - Data tersimpan di browser, tidak memerlukan backend
- 📥 **Export CSV** - Export data tamu ke file CSV

## 📁 Struktur Folder
```
digital-invitation/
├── index.html          # File HTML utama
├── css/
│   └── style.css       # File CSS untuk styling
├── js/
│   └── script.js       # File JavaScript untuk fungsionalitas
├── assets/
│   └── images/         # Folder untuk gambar (opsional)
└── README.md           # File dokumentasi
```

## 🚀 Cara Menggunakan

### 1. Clone Repository
```bash
git clone https://github.com/mmjefri18-rgb/digital-invitation.git
cd digital-invitation
```

### 2. Buka File di Browser
- Buka file `index.html` langsung di browser Anda
- Atau gunakan live server (VS Code, Python, dll)

### 3. Sesuaikan Detail Acara
Edit file `js/script.js` dan ubah konfigurasi di bagian `eventConfig`:

```javascript
const eventConfig = {
    date: 'Sabtu, 15 Juni 2024',
    time: 'Pukul 18:00 - 22:00',
    location: 'Gedung Serbaguna, Jalan Merdeka No. 123',
    city: 'Jakarta, Indonesia',
    host: 'Nama Anda',
    description: 'Deskripsi acara Anda'
};
```

## 🎨 Kustomisasi

### Mengubah Warna Utama
Edit file `css/style.css` dan ganti warna gradient:
```css
/* Ubah dari #667eea dan #764ba2 ke warna pilihan Anda */
background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
```

### Mengubah Font
Ubah font family di `css/style.css`:
```css
font-family: 'Font Pilihan Anda', sans-serif;
```

### Menambah Fitur Baru
- Tambahkan HTML baru di `index.html`
- Tambahkan CSS di `css/style.css`
- Tambahkan JavaScript di `js/script.js`

## 📋 Fitur Form RSVP
Form mengumpulkan informasi berikut dari tamu:
- ✓ Nama Lengkap (Required)
- ✓ Email (Required)
- ✓ Nomor Telepon (Optional)
- ✓ Status Kehadiran (Required) - Hadir/Tidak Hadir/Mungkin Hadir
- ✓ Jumlah Tamu Tambahan (Optional)
- ✓ Preferensi Makanan/Catatan (Optional)

## 💾 Penyimpanan Data
Data tamu disimpan menggunakan **localStorage** browser:
- Tidak perlu backend/server
- Data tersimpan lokal di browser pengguna
- Persisten sampai browser dibersihkan

## 📊 Statistik Tamu
Website secara otomatis menampilkan:
- Total jumlah tamu (termasuk tamu tambahan)
- Jumlah tamu yang akan hadir
- Jumlah tamu yang tidak akan hadir

## 🔧 Fungsi JavaScript Tersedia

### `submitRSVP()`
Mengirim data RSVP dan menyimpan ke localStorage

### `loadGuestList()`
Memuat dan menampilkan daftar tamu

### `exportToCSV()`
Export data tamu ke file CSV
```javascript
exportToCSV(); // Panggil fungsi ini
```

### `clearAllData()`
Menghapus semua data tamu (gunakan dengan hati-hati!)
```javascript
clearAllData(); // Akan menanyakan konfirmasi
```

## 🌐 Deploy

### GitHub Pages
1. Push semua file ke repository GitHub
2. Buka Settings > Pages
3. Pilih branch `main` sebagai source
4. Website akan tersedia di `https://mmjefri18-rgb.github.io/digital-invitation`

### Alternatif Deploy
- **Vercel**: https://vercel.com
- **Netlify**: https://netlify.com
- **Firebase Hosting**: https://firebase.google.com/docs/hosting
- **AWS S3**: https://aws.amazon.com/s3/

## 📱 Responsive Design
Website telah dioptimalkan untuk:
- 📱 Mobile (320px - 480px)
- 📱 Tablet (481px - 768px)
- 🖥️ Desktop (769px+)

## ⚠️ Browser Compatibility
- ✅ Chrome (terbaru)
- ✅ Firefox (terbaru)
- ✅ Safari (terbaru)
- ✅ Edge (terbaru)

## 📝 Catatan Penting
- Data disimpan di localStorage browser, bukan di server
- Jika pengguna menghapus cache browser, data akan hilang
- Untuk menyimpan data permanen, Anda perlu menambahkan backend

## 🔒 Keamanan
- Validasi email dilakukan di client-side
- Untuk produksi, tambahkan validasi server-side
- Jangan simpan data sensitif di localStorage

## 📞 Dukungan & Update
Untuk pertanyaan atau saran, silakan buat issue di repository ini.

## 📄 Lisensi
Bebas digunakan untuk keperluan personal maupun komersial.

## 👨‍💻 Developer
Dibuat oleh: mmjefri18-rgb

---

**Dibuat dengan ❤️ untuk membuat undangan digital yang sempurna!**
