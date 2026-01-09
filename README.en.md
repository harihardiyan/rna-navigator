# RNA-Navigator Pro (English)

## Abstract
**RNA-Navigator Pro** is an academic-grade biophysical simulation suite designed for rapid screening of RNA tertiary stability and kinetic flux analysis. This toolkit bridges the gap between static secondary structure prediction and computationally expensive all-atom Molecular Dynamics (MD) simulations.

## Key Features
- **Sequence Input**: Analyze RNA motifs in 5' -> 3' directionality.
- **Environmental Tuning**: Simulate *in-vitro* or *in-vivo* conditions by modulating Mg²⁺ saturation, temperature, and macromolecular crowding index.
- **JAX-Kernel Execution**: Theoretical gradient-based Gibbs Free Energy (ΔG) optimization engine.

## Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or newer).

### Installation Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/rna-navigator-pro.git
   cd rna-navigator-pro
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

### Basic Usage
1. Enter your RNA sequence (A, U, G, C characters only) in the **Sequencing_Input** area.
2. Adjust environmental parameters using the provided sliders.
3. Click **"Run Biophysical Audit"** to trigger the JAX-inspired physics kernel.
4. Review the ΔG and kinetic flux metrics in the main dashboard.

## Computational Methodology
The application utilizes a **Coarse-Grained** model:
1. **Differentiable Physics**: Calculates energy free gradients to identify stable conformations.
2. **Kinetics**: Computes the *observed rate* (k_obs) using modified Transition State Theory accounting for diffusion limits.

## Accuracy & Limitations
- **RMSD Estimation**: Theoretical range of 2.5 - 4.0 Å compared to PDB references.
- **Validation**: Results are **computational heuristics**. Findings should be validated via experimental methods (NMR, X-ray, or Cryo-EM).

## License
Distributed under the [MIT License](LICENSE).