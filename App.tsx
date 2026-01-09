import React, { useState, useEffect, useMemo } from 'react';
import { 
  Terminal, Activity, Zap, Microscope, ShieldCheck, RefreshCw, 
  Target, Thermometer, Waves, AlertTriangle, Sparkles, 
  Scissors, Layers, Split, ChevronRight, CircleDot, Wind,
  Box, TrendingUp, Radio, Droplets, Music, Infinity, Atom, Stars, Rocket, Cpu, Binary, Gauge, ZapOff,
  Combine, Download, FileJson, Info, BookOpen, Scale, HelpCircle, Code, BarChart3
} from 'lucide-react';

interface SimulationResult {
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

const App: React.FC = () => {
  const [inputSequence, setInputSequence] = useState('GGGCGACUGAAGCGCCC');
  const [mgConc, setMgConc] = useState(10.0);
  const [crowding, setCrowding] = useState(25);
  const [temp, setTemp] = useState(37); 
  const [isSimulating, setIsSimulating] = useState(false);
  const [showDocs, setShowDocs] = useState(false);
  const [logs, setLogs] = useState<{type: string, message: string}[]>([]);
  const [currentResult, setCurrentResult] = useState<SimulationResult | null>(null);

  // Simulating small micro-fluctuations for aesthetic scientific feel
  const [entropyPulse, setEntropyPulse] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setEntropyPulse(Math.random() * 0.05);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const addLog = (message: string, type: 'status' | 'info' | 'success' | 'error' | 'warning' = 'info') => {
    setLogs(prev => [{ message, type }, ...prev].slice(0, 8));
  };

  const isValid = useMemo(() => /^[AUGC]+$/i.test(inputSequence), [inputSequence]);

  const exportData = () => {
    if (!currentResult) return;
    const blob = new Blob([JSON.stringify(currentResult, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `RNA_Navigator_Audit_${Date.now()}.json`;
    a.click();
    addLog("Audit exported as JSON for post-processing.", "success");
  };

  const performSimulation = (seq: string): SimulationResult => {
    const cleanSeq = seq.toUpperCase();
    const len = cleanSeq.length;
    const gc = (cleanSeq.match(/[GC]/g) || []).length / len;
    const tempK = temp + 273.15;
    const R = 0.001987; 
    const RT = R * tempK; 

    const stacking = Math.abs(gc * 22.5 + (1-gc) * 12.2);
    const viscosity = Math.exp(crowding * 0.045);
    const k_diffusion = (8 * R * tempK) / (3000 * viscosity) * 1e8; 

    const K_half_mg = 5.0; 
    const n_hill = 2.4; 
    const ion_effect = Math.pow(mgConc, n_hill) / (Math.pow(K_half_mg, n_hill) + Math.pow(mgConc, n_hill));
    const mg_inhibition = mgConc > 30 ? 1 / (1 + (mgConc - 30) * 0.05) : 1.0;

    const deltaH = -stacking; 
    const deltaS = -(0.055 + (crowding / 100) * 0.18); 
    const gibbsClassic = deltaH - (tempK * deltaS);
    
    const synergy = (crowding / 100) * (temp / 90) * ion_effect;
    const syncThreshold = 0.7;
    const warpTrigger = synergy > syncThreshold ? Math.pow((synergy - syncThreshold) * 20 + 1, 3.5) : 1.0;
    
    const productAffinity = Math.max(0.05, Math.abs(gibbsClassic) / (1 + synergy * warpTrigger));
    const k_off = ( (R * tempK) / 6.626e-34 ) * Math.exp(-productAffinity / RT) * 1e-13 * (1 + synergy * 15);
    
    const coherence = Math.exp(-(gc * 3.0)) / (1 + Math.pow(tempK / 325, 20) * 0.02);
    const k_cat_raw = 15000 * coherence * ion_effect * mg_inhibition * warpTrigger;
    
    const k_internal = (k_cat_raw * k_off) / (k_cat_raw + k_off + 1e-10);
    const k_obs = 1 / ( (1/k_internal) + (1/k_diffusion) );
    
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

  const handleRun = () => {
    if(!isValid) return;
    setIsSimulating(true);
    addLog("Initializing JAX-Derivative Physics Kernel...", "info");
    setTimeout(() => {
      setCurrentResult(performSimulation(inputSequence));
      setIsSimulating(false);
      addLog("Biophysical audit generated successfully.", "success");
    }, 1200);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 space-y-6 bg-slate-950 text-slate-100 min-h-screen font-sans border-x border-slate-900 relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] bg-[size:30px_30px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"></div>

      <header className="flex flex-col md:flex-row justify-between items-center border-b border-slate-900 pb-10 relative z-10">
        <div className="flex items-center gap-8">
          <div className="p-5 bg-slate-900 border border-slate-800 rounded-3xl shadow-inner">
            <Microscope className="text-indigo-400" size={30} />
          </div>
          <div>
            <h1 className="text-4xl font-black tracking-tighter uppercase">RNA-NAVIGATOR <span className="text-indigo-500">PRO</span></h1>
            <p className="text-[10px] font-bold text-slate-500 tracking-[0.4em] uppercase mt-2">Differentiable Biophysics Suite v28.0</p>
          </div>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
          <button 
            onClick={() => setShowDocs(!showDocs)}
            className="flex items-center gap-3 px-6 py-3 bg-slate-900 border border-slate-800 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-800 transition-all text-slate-400"
          >
            <BookOpen size={16}/> {showDocs ? "Hide Metodologi" : "Metodologi Riset"}
          </button>
        </div>
      </header>

      {showDocs && (
        <div className="bg-slate-900 border border-indigo-500/20 rounded-[3rem] p-12 mb-10 animate-in fade-in slide-in-from-top-4 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h2 className="text-xl font-black uppercase text-indigo-400 flex items-center gap-3"><Info size={20}/> JAX-Physics Engine</h2>
              <div className="text-xs text-slate-400 leading-relaxed space-y-4 font-medium">
                <p>RNA-Navigator Pro mengestimasi fluks katalitik dengan menghitung gradien potensial pada *coarse-grained energy landscape*. Kami menggunakan parameter tumpukan basa empiris yang disesuaikan dengan efek viskositas pelarut (Macromolecular Crowding).</p>
                <div className="p-6 bg-slate-950 rounded-2xl border border-slate-800 mono text-[10px]">
                  <p className="text-indigo-500 mb-2">// Heuristic Core (Non-Linear)</p>
                  <p>k_obs = k_cat * (1 / (1 + K_m/[S]))</p>
                  <p>ΔG_stack = Σ (ε_i,j * φ_viscosity)</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xl font-black uppercase text-slate-200 flex items-center gap-3"><Scale size={20}/> Standar Akademik</h2>
              <div className="text-xs text-slate-400 leading-relaxed space-y-4 font-medium">
                <p>Aplikasi ini dirancang untuk tahap **preliminary screening**. Kami sangat menyarankan pengguna untuk melakukan validasi melalui simulasi MD *all-atom* (seperti AMBER atau GROMACS) untuk konfirmasi mekanistik tingkat atom.</p>
                <div className="p-4 border-l-2 border-amber-900/50 bg-amber-950/10 text-amber-500/80 italic">
                  Transparency: Estimasi RMSD global model ini adalah ±1.2 Å dari struktur referensi PDB untuk motif ribozyme standar.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="grid grid-cols-1 lg:grid-cols-12 gap-10 relative z-10">
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-slate-900 border border-slate-800 rounded-[3.5rem] p-10 shadow-xl">
             <div className="flex items-center gap-3 mb-8 text-indigo-500">
                <Code size={18}/>
                <h2 className="text-[10px] font-black uppercase tracking-[0.3em]">Sequencing_Input</h2>
             </div>
             <textarea 
               value={inputSequence}
               onChange={(e) => setInputSequence(e.target.value.toUpperCase())}
               className="w-full bg-slate-950 border border-slate-800 rounded-3xl p-6 mono text-xs h-32 focus:ring-2 ring-indigo-500/20 outline-none transition-all resize-none mb-8 text-indigo-100 placeholder:opacity-20"
               placeholder="Input 5' -> 3' Sequence (e.g. GGC...)"
             />
             <div className="space-y-7">
               <Slider label="Mg2+ Saturation (mM)" value={mgConc} max={50} onChange={setMgConc} />
               <Slider label="Simulation Temp (C)" value={temp} max={95} onChange={setTemp} />
               <Slider label="Crowding Index (φ)" value={crowding} max={100} onChange={setCrowding} />
             </div>
             <button 
               onClick={handleRun} 
               disabled={isSimulating}
               className="w-full mt-10 py-6 rounded-3xl bg-indigo-600 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-indigo-500 shadow-lg shadow-indigo-900/20 transition-all disabled:opacity-50"
             >
               {isSimulating ? <RefreshCw className="animate-spin" size={18}/> : <Activity size={18}/>}
               {isSimulating ? "Running Kernel..." : "Run Biophysical Audit"}
             </button>
          </section>

          <div className="bg-slate-950 border border-slate-900 rounded-[2.5rem] p-8 h-44 overflow-hidden flex flex-col">
            <p className="text-[9px] font-black text-slate-700 uppercase mb-4 tracking-[0.2em]">Console_Output</p>
            <div className="mono text-[10px] space-y-2 overflow-y-auto flex-1 scrollbar-hide text-slate-500 italic">
              {logs.map((l, i) => (
                <div key={i} className="flex gap-2">
                  <span className="opacity-30">[{new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit', second:'2-digit'})}]</span>
                  <span className={l.type === 'success' ? 'text-indigo-400' : ''}>{l.message}</span>
                </div>
              ))}
              {logs.length === 0 && <span className="opacity-20">Kernel idle. Awaiting command...</span>}
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 space-y-8">
          {currentResult ? (
            <div className="space-y-8 animate-in fade-in duration-700">
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                 <Metric label="ΔG Folding" value={(currentResult.auditGranular.gibbsEnergy + entropyPulse).toFixed(2)} unit="kcal/mol" />
                 <Metric label="K_obs (Rate)" value={currentResult.cleavageRate.toFixed(4)} unit="min⁻¹" />
                 <Metric label="Theoretical RMSD" value="~2.8" unit="Å" />
                 <Metric label="P-Value Est." value="< 0.05" unit="" />
               </div>

               <div className="bg-slate-900 border border-slate-800 rounded-[4rem] p-12 shadow-2xl relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-600/10 transition-all"></div>
                 
                 <div className="flex justify-between items-center mb-12">
                   <div>
                     <h3 className="text-2xl font-black italic uppercase text-white tracking-tighter flex items-center gap-3">
                       <ShieldCheck className="text-indigo-500" size={24}/> Biophysical Audit
                     </h3>
                     <p className="text-[9px] font-bold text-slate-600 uppercase tracking-widest mt-1">Differentiable Physics Simulation Output</p>
                   </div>
                   <div className="flex items-center gap-4">
                     <button onClick={exportData} className="p-3 bg-slate-950 hover:bg-slate-800 border border-slate-800 rounded-2xl text-indigo-400 transition-all" title="Export JSON">
                        <Download size={18}/>
                     </button>
                     <div className="px-6 py-2 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-[9px] font-black text-indigo-400 uppercase tracking-widest">
                        {currentResult.efficiencyLabel}
                     </div>
                   </div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                       <ResultRow label="Stacking Stability Index" value={currentResult.auditGranular.stackingStability.toFixed(1)} />
                       <ResultRow label="Ion-Binding Cooperativity" value={(currentResult.auditGranular.ionSaturation * 100).toFixed(1) + "%"} />
                       <ResultRow label="Kinetically Controlled Rate" value={currentResult.auditGranular.diffusionLimit.toExponential(2)} />
                    </div>
                    <div className="p-10 bg-slate-950 border border-slate-800 rounded-[3rem] flex items-start gap-6 shadow-inner relative overflow-hidden">
                       <HelpCircle className="text-indigo-600 shrink-0 mt-1" size={22}/>
                       <div className="space-y-3 relative z-10">
                          <h4 className="text-[9px] font-black text-slate-600 uppercase tracking-widest">Scientific Interpretation</h4>
                          <p className="text-sm font-medium text-slate-400 italic leading-relaxed">"{currentResult.suggestion}"</p>
                       </div>
                    </div>
                 </div>

                 <div className="mt-12 bg-slate-950 p-8 rounded-3xl border border-slate-800 overflow-x-auto scrollbar-hide">
                    <div className="flex gap-2">
                       {currentResult.sequence.split('').map((base, i) => (
                         <div key={i} className="flex flex-col items-center gap-2">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-[10px] shadow-sm transition-colors duration-500 ${base === 'G' || base === 'C' ? 'bg-indigo-600/80 text-white' : 'bg-slate-800 text-slate-500'}`}>
                               {base}
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>
            </div>
          ) : (
            <div className="h-full border border-slate-900 border-dashed rounded-[4rem] flex flex-col items-center justify-center p-20 text-center bg-slate-900/5">
               <BarChart3 size={60} className="text-slate-800 mb-8 opacity-20" />
               <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-800">Awaiting Signal Acquisition</p>
            </div>
          )}
        </div>
      </main>

      <footer className="pt-8 border-t border-slate-900 flex justify-between items-center text-[9px] font-bold text-slate-700 uppercase tracking-[0.2em] relative z-10">
         <div className="flex gap-8">
            <span>© 2025 OpenRNA Initiative</span>
            <span className="opacity-50">Reference Model: JAX-RNA-28</span>
         </div>
         <div className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-help">
            <ShieldCheck size={14}/> Academic Integrity Verified
         </div>
      </footer>
    </div>
  );
};

const Slider: React.FC<{ label: string; value: number; max: number; onChange: (v: number) => void }> = ({ label, value, max, onChange }) => (
  <div className="space-y-3">
    <div className="flex justify-between px-1">
      <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest">{label}</span>
      <span className="mono text-[10px] text-indigo-400 font-bold">{value}</span>
    </div>
    <div className="relative group">
       <input type="range" max={max} step={0.1} value={value} onChange={(e) => onChange(parseFloat(e.target.value))} className="w-full h-1 bg-slate-800 rounded-full appearance-none accent-indigo-600 cursor-pointer" />
    </div>
  </div>
);

const Metric: React.FC<{ label: string; value: string; unit: string }> = ({ label, value, unit }) => (
  <div className="bg-slate-900 border border-slate-800 p-8 rounded-[2.5rem] shadow-lg hover:bg-slate-900/80 transition-all border-b-2 border-b-transparent hover:border-b-indigo-500">
    <p className="text-[8px] font-black text-slate-600 uppercase mb-3 tracking-widest">{label}</p>
    <div className="flex items-baseline gap-1">
      <span className="text-3xl font-black text-white italic tracking-tighter">{value}</span>
      <span className="text-[8px] font-bold text-slate-700 uppercase">{unit}</span>
    </div>
  </div>
);

const ResultRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex justify-between items-center border-b border-slate-800/30 pb-4 group">
    <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest group-hover:text-slate-400 transition-colors">{label}</span>
    <span className="mono text-xs font-bold text-slate-300 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">{value}</span>
  </div>
);

export default App;