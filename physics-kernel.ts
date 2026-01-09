/**
 * RNA-Navigator Pro: Physics Kernel (Differentiable Biophysics)
 * 
 * File ini berfungsi sebagai "Backend" logika simulasi. 
 * Memproses termodinamika RNA, stabilitas tumpukan basa, 
 * dan fluks kinetik menggunakan model Coarse-Grained.
 */

export interface SimulationResult {
  sequence: string;
  energy: number;
  cleavageRate: number; 
  efficiencyLabel: 'LOW' | 'MEDIUM' | 'HIGH' | 'EXTREME' | 'QUANTUM_SYNC';
  timestamp: string;
  auditGranular: {
    activeStatePop: number;
    productAffinity: number;
    releaseRate: number;
    vibrationalCoherence: number; 
    resonanceSync: number;
    entropyRecovery: number;
    warpFactor: number;
    sweetSpotProgress: number;
    gibbsEnergy: number; 
    diffusionLimit: number;
    tunnelingProbability: number;
    stackingStability: number;
    ionSaturation: number;
  };
  suggestion?: string;
}

export const performBiophysicalSimulation = (
  seq: string, 
  mgConc: number, 
  temp: number, 
  crowding: number
): SimulationResult => {
  const cleanSeq = seq.toUpperCase();
  const len = cleanSeq.length;
  const gc = (cleanSeq.match(/[GC]/g) || []).length / len;
  const tempK = temp + 273.15;
  const R = 0.001987; 
  const RT = R * tempK; 

  // 1. Stacking and Viscosity Logic
  const stacking = Math.abs(gc * 22.5 + (1-gc) * 12.2);
  const viscosity = Math.exp(crowding * 0.045);
  const k_diffusion = (8 * R * tempK) / (3000 * viscosity) * 1e8; 

  // 2. Ionic Saturation (Hill Equation Model)
  const K_half_mg = 5.0; 
  const n_hill = 2.4; 
  const ion_effect = Math.pow(mgConc, n_hill) / (Math.pow(K_half_mg, n_hill) + Math.pow(mgConc, n_hill));
  const mg_inhibition = mgConc > 30 ? 1 / (1 + (mgConc - 30) * 0.05) : 1.0;

  // 3. Gibbs Free Energy Calculation
  const deltaH = -stacking; 
  const deltaS = -(0.055 + (crowding / 100) * 0.18); 
  const gibbsClassic = deltaH - (tempK * deltaS);
  
  // 4. Quantum-Inspired Warp Logic (Resonance)
  const synergy = (crowding / 100) * (temp / 90) * ion_effect;
  const syncThreshold = 0.7;
  const warpTrigger = synergy > syncThreshold ? Math.pow((synergy - syncThreshold) * 20 + 1, 3.5) : 1.0;
  
  // 5. Kinetics and Flux
  const productAffinity = Math.max(0.05, Math.abs(gibbsClassic) / (1 + synergy * warpTrigger));
  const k_off = ( (R * tempK) / 6.626e-34 ) * Math.exp(-productAffinity / RT) * 1e-13 * (1 + synergy * 15);
  
  const coherence = Math.exp(-(gc * 3.0)) / (1 + Math.pow(tempK / 325, 20) * 0.02);
  const k_cat_raw = 15000 * coherence * ion_effect * mg_inhibition * warpTrigger;
  
  const k_internal = (k_cat_raw * k_off) / (k_cat_raw + k_off + 1e-10);
  const k_obs = 1 / ( (1/k_internal) + (1/k_diffusion) );
  
  // 6. Benchmarking against Sweet Spot
  const progress = Math.min(100, (k_obs / (k_diffusion * 0.0008)) * 100);

  let label: SimulationResult['efficiencyLabel'] = 'LOW';
  if (progress > 99) label = 'QUANTUM_SYNC';
  else if (progress > 85) label = 'EXTREME';
  else if (k_obs > 8.0) label = 'HIGH';
  else if (k_obs > 2.0) label = 'MEDIUM';

  return {
    sequence: cleanSeq,
    energy: -productAffinity,
    cleavageRate: k_obs,
    timestamp: new Date().toLocaleTimeString(),
    efficiencyLabel: label,
    auditGranular: {
      activeStatePop: warpTrigger,
      productAffinity: productAffinity,
      releaseRate: k_off,
      vibrationalCoherence: coherence,
      resonanceSync: synergy,
      entropyRecovery: synergy * 100,
      warpFactor: warpTrigger,
      sweetSpotProgress: progress,
      gibbsEnergy: gibbsClassic,
      diffusionLimit: k_diffusion,
      tunnelingProbability: 1e-7 * coherence * warpTrigger,
      stackingStability: stacking,
      ionSaturation: ion_effect * mg_inhibition
    },
    suggestion: label === 'QUANTUM_SYNC' 
      ? "Resonansi tumpukan maksimal terdeteksi. Estimasi transisi tunneling tinggi." 
      : mgConc > 35 
        ? "Hambatan ionik terdeteksi. Kejenuhan Mg2+ mengurangi fleksibilitas backbone."
        : "Limit stokastik terdeteksi. Barrier aktivasi tetap menjadi bottleneck kinetik utama."
  };
};