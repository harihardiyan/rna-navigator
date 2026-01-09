# RNA-Navigator Pro: Biophysical Simulation Suite (v28.0)

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)
![Engine](https://img.shields.io/badge/engine-JAX--inspired-orange)
![Field](https://img.shields.io/badge/field-Biophysics-purple)
![Community](https://img.shields.io/badge/OpenRNA-Initiative-emerald)

> **Languages:** [Bahasa Indonesia](#bahasa-indonesia) | [English](#english) | [中文 (繁體)](#中文-繁體)

---

## Bahasa Indonesia

### Abstract
**RNA-Navigator Pro** adalah perangkat lunak simulasi biofisika tingkat akademik yang dirancang untuk penyaringan cepat (*rapid screening*) stabilitas tersier RNA dan analisis fluks kinetik. Suite ini menjembatani celah antara prediksi struktur sekunder statis dan simulasi *all-atom Molecular Dynamics* (MD) yang memakan waktu lama.

### Fitur Utama
1.  **Input Sequence**: Masukkan sekuens RNA (5' -> 3') untuk evaluasi motif.
2.  **Environmental Tuning**: Simulasi kondisi *in-vitro* dengan menyesuaikan Mg²⁺, suhu, dan *crowding index*.
3.  **JAX-Kernel Execution**: Optimasi energi bebas Gibbs (ΔG) berbasis gradien teoretis.

### Akurasi & Batasan
- **Estimasi RMSD**: Rentang teoretis 2.5 - 4.0 Å.
- **Validasi**: Hasil bersifat **teoretis**. Sangat disarankan untuk memvalidasi temuan dengan NMR/Cryo-EM.

---

## English

### Abstract
**RNA-Navigator Pro** is an academic-grade biophysical simulation suite designed for rapid screening of RNA tertiary stability and kinetic flux analysis. This toolkit bridges the gap between static secondary structure prediction and computationally expensive all-atom Molecular Dynamics (MD) simulations.

### Key Features
1.  **Sequence Input**: Analyze RNA motifs (5' -> 3' directionality).
2.  **Environmental Tuning**: Simulate *in-vitro* or *in-vivo* conditions by modulating Mg²⁺ saturation, temperature, and macromolecular crowding index.
3.  **JAX-Kernel Execution**: Theoretical gradient-based Gibbs Free Energy (ΔG) optimization.

### Accuracy & Limitations
- **RMSD Estimation**: Theoretical range of 2.5 - 4.0 Å compared to PDB references.
- **Validation**: Results are **computational heuristics**. Critical findings should be validated via experimental methods (NMR, X-ray, or Cryo-EM).

---

## 中文 (繁體)

### 摘要
**RNA-Navigator Pro** 是一款學術級生物物理模擬套件，旨在實現 RNA 三級結構穩定性的快速篩選與動力學通量分析。本工具填補了靜態二級結構預測與高運算成本的全原子分子動力學 (MD) 模擬之間的空白。

### 主要功能
1.  **序列輸入**: 分析 RNA 基序（5' -> 3' 方向）。
2.  **環境調節**: 通過調節鎂離子 (Mg²⁺) 飽和度、溫度和大分子擁擠指數來模擬體外或體內環境。
3.  **JAX 核心執行**: 基於理論梯度的吉布斯自由能 (ΔG) 優化引擎。

### 準確性與限制
- **RMSD 估算**: 與 PDB 參考結構相比，理論誤差範圍為 2.5 - 4.0 Å。
- **實驗驗證**: 模擬結果屬於**計算啟發式推理**。重大研究發現應通過實驗方法（如核磁共振 NMR 或冷凍電鏡 Cryo-EM）進行驗證。

---

## License
Distributed under the [MIT License](LICENSE).
*Developed for the OpenRNA Initiative. Reference Framework: JAX-RNA-BIOPHYS-28*