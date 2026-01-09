# RNA-Navigator Pro (Bahasa Indonesia)

## Abstrak
**RNA-Navigator Pro** adalah perangkat lunak simulasi biofisika tingkat akademik yang dirancang untuk penyaringan cepat (*rapid screening*) stabilitas tersier RNA dan analisis fluks kinetik. Suite ini menjembatani celah antara prediksi struktur sekunder statis dan simulasi *all-atom Molecular Dynamics* (MD) yang memakan waktu lama.

## Fitur Utama
- **Input Sequence**: Analisis sekuens RNA 5' ke 3'.
- **Environmental Tuning**: Simulasi kondisi *in-vitro* dengan menyesuaikan Mg²⁺, suhu, dan *crowding index*.
- **JAX-Kernel**: Optimasi energi bebas Gibbs (ΔG) berbasis gradien teoretis.

## Cara Menjalankan Aplikasi

### Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 atau lebih baru).

### Langkah Instalasi
1. **Klon Repositori**
   ```bash
   git clone https://github.com/username/rna-navigator-pro.git
   cd rna-navigator-pro
   ```

2. **Instal Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Server Pengembangan**
   ```bash
   npm run dev
   ```
   Aplikasi akan berjalan di `http://localhost:5173`.

### Panduan Penggunaan
1. Masukkan sekuens RNA (hanya karakter A, U, G, C) pada kolom **Sequencing_Input**.
2. Sesuaikan parameter lingkungan (Magnesium, Suhu, dan Crowding) menggunakan slider.
3. Klik **"Run Biophysical Audit"** untuk memulai kalkulasi kernel JAX.
4. Lihat hasil ΔG dan laju kinetik pada panel dashboard.

## Metodologi Komputasi
Aplikasi ini menggunakan model **Coarse-Grained**:
1. **Differentiable Physics**: Menghitung gradien energi bebas untuk mencari konformasi stabil.
2. **Kinetics**: Menghitung *observed rate* (k_obs) menggunakan modifikasi teori *Transition State*.

## Akurasi & Batasan
- **Estimasi RMSD**: Rentang teoretis 2.5 - 4.0 Å.
- **Validasi**: Hasil bersifat **teoretis**. Sangat disarankan untuk memvalidasi temuan kritis dengan eksperimen laboratorium (NMR/Cryo-EM).

## Lisensi
Didistribusikan di bawah [Lisensi MIT](LICENSE).