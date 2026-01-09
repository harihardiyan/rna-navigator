# RNA-Navigator Pro (Bahasa Indonesia)

## Abstrak
**RNA-Navigator Pro** adalah perangkat lunak simulasi biofisika tingkat akademik yang dirancang untuk penyaringan cepat (*rapid screening*) stabilitas tersier RNA dan analisis fluks kinetik. Suite ini menjembatani celah antara prediksi struktur sekunder statis dan simulasi *all-atom Molecular Dynamics* (MD) yang memakan waktu lama.

## Fitur Utama
- **Input Sequence**: Analisis sekuens RNA 5' ke 3'.
- **Environmental Tuning**: Simulasi kondisi *in-vitro* dengan menyesuaikan Mg²⁺, suhu, dan *crowding index*.
- **JAX-Kernel**: Optimasi energi bebas Gibbs (ΔG) berbasis gradien teoretis.

## Metodologi Komputasi
Aplikasi ini menggunakan model **Coarse-Grained**:
1. **Differentiable Physics**: Menghitung gradien energi bebas untuk mencari konformasi stabil.
2. **Kinetics**: Menghitung *observed rate* (k_obs) menggunakan modifikasi teori *Transition State*.

## Akurasi & Batasan
- **Estimasi RMSD**: Rentang teoretis 2.5 - 4.0 Å.
- **Validasi**: Hasil bersifat **teoretis**. Sangat disarankan untuk memvalidasi temuan kritis dengan eksperimen laboratorium (NMR/Cryo-EM).

## Lisensi
Didistribusikan di bawah [Lisensi MIT](LICENSE).