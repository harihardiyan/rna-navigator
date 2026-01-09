# RNA-Navigator Pro (English)

## Abstract
**RNA-Navigator Pro** is an academic-grade biophysical simulation suite designed for rapid screening of RNA tertiary stability and kinetic flux analysis.

## System Architecture
The suite follows a **Clean Modular** architecture:
- **Frontend (UI)**: React-based interface with Tailwind CSS (located in `App.tsx`).
- **Core Engine (Backend-Logic)**: All biophysical computations are decoupled into `physics-kernel.ts`. This allows the simulation engine to be unit-tested independently or migrated to a Node.js backend if needed.

## Key Features
- **Sequence Input**: Analyze RNA motifs in 5' -> 3' directionality.
- **Environmental Tuning**: Simulate *in-vitro* conditions by modulating Mg²⁺ saturation, temperature, and macromolecular crowding.
- **JAX-Inspired Execution**: Theoretical gradient-based Gibbs Free Energy (ΔG) optimization engine running locally.

## Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or newer).

### Installation Steps
1. **Install Dependencies**
   ```bash
   npm install
   ```
2. **Start Development Server**
   ```bash
   npm run dev
   ```

## Computational Methodology
The engine in `physics-kernel.ts` utilizes a **Coarse-Grained** model:
1. **Differentiable Physics**: Calculates energy free gradients to identify stable conformations.
2. **Kinetics**: Computes the *observed rate* (k_obs) using modified Transition State Theory.

## License
Distributed under the [MIT License](LICENSE).