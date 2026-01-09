# RNA-Navigator Pro (Bahasa Indonesia)

## Abstrak
**RNA-Navigator Pro** adalah perangkat lunak simulasi biofisika tingkat akademik yang dirancang untuk penyaringan cepat (*rapid screening*) stabilitas tersier RNA dan analisis fluks kinetik.

## Arsitektur Sistem
Aplikasi ini menggunakan arsitektur **Clean Modular**:
- **Frontend (UI)**: Dibangun dengan React + Tailwind CSS (ada di `App.tsx`).
- **Core Engine (Backend-Logic)**: Seluruh perhitungan biofisika dipisahkan ke dalam `physics-kernel.ts`. Ini memungkinkan mesin simulasi untuk diuji secara independen atau dipindahkan ke server di masa depan.

## Cara Menjalankan Aplikasi

### 1. Lingkungan Pengembangan (Frontend + Kernel)
Untuk menjalankan aplikasi secara utuh dengan antarmuka grafis:
```bash
# Instal dependensi
npm install

# Jalankan server pengembangan
npm run dev
```

### 2. Pengujian Mesin (Kernel Only)
Karena logika backend berada di `physics-kernel.ts`, Anda dapat mengimpor fungsi `performBiophysicalSimulation` ke dalam skrip pengujian atau lingkungan Node.js tanpa perlu menjalankan UI.

## Metodologi Komputasi
Kernel di `physics-kernel.ts` menggunakan model **Coarse-Grained**:
1. **Differentiable Physics**: Menghitung gradien energi bebas untuk mencari konformasi stabil.
2. **Kinetics**: Menghitung *observed rate* (k_obs) menggunakan modifikasi teori *Transition State*.

## Lisensi
Didistribusikan di bawah [Lisensi MIT](LICENSE).