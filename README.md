# 🌸 FloraEdu SMA — Website Belajar Interaktif Pelajar SMA

Website belajar berbasis **HTML5, CSS3, dan JavaScript (Vanilla JS)** dengan tema warna **hijau–ungu** beraksen **dekorasi bunga**, dilengkapi fitur **Login & Daftar Akun**, **katalog materi SMA**, **pencarian & filter mapel**, **kuis singkat**, serta **pelacakan progres belajar**.

## ✨ Fitur Utama
- **Halaman Login & Daftar Akun (Demo):** Mendukung pendaftaran akun baru (nama, kelas SMA, email, kata sandi) dan tombol pengisian akun contoh pelajar.
- **Tema Hijau–Ungu & Hiasan Bunga:** Palet warna *emerald* dan *violet* dengan ilustrasi bunga SVG lembut.
- **Materi Pelajaran SMA Multi-Mapel:**
  - **Matematika:** Dasar Trigonometri & Sudut Istimewa, Turunan Fungsi Aljabar
  - **Fisika:** Hukum Newton tentang Gerak, Gelombang Mekanik & Bunyi
  - **Kimia:** Stoikiometri & Konsep Mol, Reaksi Eksoterm & Endoterm
  - **Biologi:** Struktur & Fungsi Organel Sel, Pewarisan Sifat & Hukum Mendel
  - **Bahasa Indonesia:** Menyusun Teks Argumentasi yang Efektif
  - **Bahasa Inggris:** Simple Past & Narrative Text
- **Pencarian & Filter:** Cari berdasarkan topik atau saring per mata pelajaran.
- **Latihan Cepat & Progres Tersimpan:** Setiap materi memiliki kuis pilihan ganda dan tombol *Tandai Selesai Dipelajari* yang disimpan di `localStorage`.

## 📁 Struktur Proyek
```text
portal-belajar-sma/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 Cara Menjalankan
1. Ekstrak file ZIP ke folder pilihanmu.
2. Klik dua kali `index.html` untuk membukanya di browser, atau jalankan menggunakan *Live Server* di VS Code.

## ⚠️ Catatan Keamanan (Mode Demo)
Penyimpanan akun dan progres pada proyek ini menggunakan `localStorage` browser untuk keperluan demonstrasi/pembelajaran lokal. Untuk produksi nyata, hubungkan autentikasi dan basis data ke layanan *backend* yang aman.
