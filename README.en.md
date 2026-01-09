# RNA-Navigator Pro (English)

## Abstract
**RNA-Navigator Pro** is an academic-grade biophysical simulation suite designed for rapid screening of RNA tertiary stability and kinetic flux analysis.

## System Architecture
The suite follows a **Clean Modular** architecture:
- **Frontend (UI)**: React-based interface with Tailwind CSS (located in `App.tsx`).
- **Core Engine (Backend-Logic)**: All biophysical computations are decoupled into `physics-kernel.ts`. This allows the engine to be used as a standalone library.

## Getting Started

### 1. Full Application (UI + Kernel)
To run the complete interactive dashboard:
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Modular Kernel Usage
The `physics-kernel.ts` is designed to be portable. You can import `performBiophysicalSimulation` into any TypeScript/JavaScript environment (like a CLI tool or a backend server) without dependencies on React.

## Computational Methodology
The engine in `physics-kernel.ts` utilizes a **Coarse-Grained** model:
1. **Differentiable Physics**: Calculates energy free gradients.
2. **Kinetics**: Computes the *observed rate* (k_obs).

## License
Distributed under the [MIT License](LICENSE).