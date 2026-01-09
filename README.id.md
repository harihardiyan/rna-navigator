# RNA-Navigator Pro (Bahasa Indonesia)

## Abstrak
**RNA-Navigator Pro** adalah perangkat lunak simulasi biofisika tingkat akademik yang dirancang untuk penyaringan cepat (*rapid screening*) stabilitas tersier RNA dan analisis fluks kinetik.

## Arsitektur Sistem
Aplikasi ini menggunakan arsitektur **Clean Modular**:
- **Frontend (UI)**: Dibangun dengan React + Tailwind CSS (ada di `App.tsx`).
- **Core Engine (Backend-Logic)**: Seluruh perhitungan biofisika dipisahkan ke dalam `physics-kernel.ts`. Ini memungkinkan mesin simulasi untuk diuji secara independen atau dipindahkan ke server Node.js di masa depan.

## Fitur Utama
- **Input Sequence**: Analisis sekuens RNA 5' ke 3'.
- **Environmental Tuning**: Simulasi kondisi *in-vitro* dengan menyesuaikan Mg²⁺, suhu, dan *crowding index*.
- **JAX-Inspired Kernel**: Optimasi energi bebas Gibbs (ΔG) berbasis gradien teoretis yang dijalankan secara lokal di browser.

## Cara Menjalankan Aplikasi

### Prasyarat
Pastikan Anda telah menginstal [Node.js](https://nodejs.org/) (versi 18 atau lebih baru).

### Langkah Instalasi
1. **Instal Dependensi**
   ```bash
   npm install
   ```
2. **Jalankan Server Pengembangan**
   ```bash
   npm run dev
   ```

## Metodologi Komputasi
Kernel di `physics-kernel.ts` menggunakan model **Coarse-Grained**:
1. **Differentiable Physics**: Menghitung gradien energi bebas untuk mencari konformasi stabil.
2. **Kinetics**: Menghitung *observed rate* (k_obs) menggunakan modifikasi teori *Transition State*.

## Lisensi
Didistribusikan di bawah [Lisensi MIT](LICENSE).