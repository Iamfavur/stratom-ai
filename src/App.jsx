import React, { useState } from 'react';
import { 
  Search, FileText, Video, Mic, Image as ImageIcon, 
  ShieldCheck, Database, Cpu, ChevronRight, Lock, 
  Workflow, Layers, Server, Terminal, ArrowRight, 
  CheckCircle2, Building, Scale, Clapperboard, HelpCircle 
} from 'lucide-react';

const App = () => {
  const [email, setEmail] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState('idle');
  const [activeTab, setActiveTab] = useState('video');
  const [apiMethod, setApiMethod] = useState('POST');

  const handleJoinWaitlist = (e) => {
    e.preventDefault();
    if(email) {
      setWaitlistStatus('submitted');
      setTimeout(() => setWaitlistStatus('idle'), 4000);
      setEmail('');
    }
  };

  const codeSnippets = {
    POST: `curl -X POST "https://api.stratom.ai/v2/ingest" \\
  -H "Authorization: Bearer $STRATOM_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@/workspace/assets/training_session_04.mp4" \\
  -F "pipeline_config={\\"vlm_enabled\\":true,\\"asr_engine\\":\\"whisper-large-v3\\"}"`,
    GET: `curl -X GET "https://api.stratom.ai/v2/search?query=unauthorized+access+detection+in+warehouse" \\
  -H "Authorization: Bearer $STRATOM_API_KEY" \\
  -H "Accept: application/json"`
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-50 antialiased">
      
      {/* --- Top Utility Bar --- */}
      <div className="bg-slate-900/60 border-b border-slate-800/40 text-[11px] font-mono py-1.5 px-6 text-center text-slate-500 tracking-wider">
        SECURITY PROTOCOL: ENCRYPTED AT REST VIA AES-256-GCM // ISOLATED TENANT MULTI-REGIONAL DEPLOYMENT
      </div>

      {/* --- Navigation --- */}
      <nav className="sticky top-0 w-full z-50 border-b border-slate-900 bg-slate-950/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-cyan-950/50">
              <Database className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-black text-white tracking-tight">STRATOM<span className="text-cyan-500 font-medium">.AI</span></span>
          </div>
          
          <div className="hidden lg:flex gap-8 text-xs font-semibold uppercase tracking-wider text-slate-400">
            <a href="#pipeline" className="hover:text-cyan-400 transition-colors">Ingestion Hub</a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">Core Architecture</a>
            <a href="#solutions" className="hover:text-cyan-400 transition-colors">Enterprise Use Cases</a>
            <a href="#developer" className="hover:text-cyan-400 transition-colors">Developer Console</a>
            <a href="#governance" className="hover:text-cyan-400 transition-colors">Compliance</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#waitlist-section" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-cyan-950/40">
              Request Enterprise Access
            </a>
          </div>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-24 overflow-hidden border-b border-slate-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/40 via-slate-950 to-slate-950">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-full blur-[160px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium mb-8 shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-mono text-[11px] tracking-wider uppercase text-slate-300">Enterprise Orchestration Core v2.4</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]">
            Unified Context Engine for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Multimodal Organizational Data
            </span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 mb-14 leading-relaxed font-normal">
            Stratom automates the collection, pipeline structuring, and deep contextual mapping of complex, unstructured assets. Run cross-media semantic search parameters across vast pools of videos, static images, spatial blueprints, raw audio records, and core legal documentation via isolated enterprise architecture.
          </p>

          {/* Inline Waitlist Callout */}
          <div id="waitlist-section" className="max-w-xl mx-auto bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80 shadow-2xl backdrop-blur-md">
            <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                required
                placeholder="Enter corporate email configuration..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-950/60 border border-slate-800 rounded-lg text-white px-4 py-3 text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 font-mono transition-colors"
              />
              <button 
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-7 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {waitlistStatus === 'submitted' ? 'Pipeline Initialized' : 'Request Infrastructure Review'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
          
          <div className="mt-6 flex justify-center items-center gap-8 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
            <span>SOC2 TYPE II PENDING</span>
            <span>•</span>
            <span>ISO 27001 FRAMEWORK</span>
            <span>•</span>
            <span>GDPR PRIVACY ARCHITECTURE</span>
          </div>
        </div>
      </section>

      {/* --- Multimodal Processing Hub --- */}
      <section id="pipeline" className="py-28 border-b border-slate-900 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold uppercase text-cyan-500 tracking-widest mb-3 font-mono">// INGESTION LAYER</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">Automated Multi-Channel Extraction</h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Stratom extracts deeply buried semantic context out of visual, spoken, and textual records simultaneously. Raw streams are analyzed through high-parameter, isolated neural models to synthesize uniform metadata logs.
            </p>
          </div>

          {/* Interactive Feature Showcase Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-3">
              {[
                { id: 'video', label: 'Asynchronous Video Extraction', icon: Video, desc: 'Keyframe tagging and spatial anomaly detection' },
                { id: 'audio', label: 'Speech Intelligence Engine', icon: Mic, desc: 'Acoustic timestamp mapping and multi-speaker extraction' },
                { id: 'document', label: 'Hierarchical Document Parser', icon: FileText, desc: 'Complex table structure normalization and semantic partitioning' },
                { id: 'image', label: 'Computer Vision Asset Tagging', icon: ImageIcon, desc: 'Regulatory compliance auditing and safety visual metrics' }
              ].map((tab) => {
                const IconComp = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-200 ${
                      isSelected 
                        ? 'bg-slate-900 border-cyan-800 shadow-xl shadow-cyan-950/20' 
                        : 'bg-transparent border-slate-900 hover:border-slate-800 hover:bg-slate-900/30'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-lg border ${isSelected ? 'bg-cyan-950/50 border-cyan-800 text-cyan-400' : 'bg-slate-950 border-slate-800 text-slate-500'}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className={`text-sm font-bold tracking-tight ${isSelected ? 'text-white' : 'text-slate-400'}`}>{tab.label}</h4>
                        <p className="text-xs text-slate-500 mt-1">{tab.desc}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-8 bg-slate-900/40 border border-slate-900 rounded-2xl p-8 min-h-[400px] flex flex-col justify-between relative overflow-hidden backdrop-blur-sm shadow-inner">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-900/5 rounded-full blur-3xl pointer-events-none"></div>
              
              {activeTab === 'video' && (
                <>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-900/60 px-3 py-1 rounded-md w-fit mb-6">
                      <Cpu className="w-3.5 h-3.5" /> MODEL PIPELINE: STRATOM-VISION-LARGE (VLM)
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Deep Processing for Security and Training Media</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Rather than basic keyword matches, Stratom evaluates continuous media streams frame-by-frame. It utilizes proprietary Vision-Language models to parse behaviors, identify protective workplace compliance assets (e.g., specific PPE components), map spatial layout updates, and flags security breaches inside operational logs.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Automated Temporal Segmenting</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Multi-Camera Vector Coregistration</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Scene Text Recog & OCR Extractor</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Dense Visual Frame Annotation</div>
                    </div>
                  </div>
                  <div className="mt-8 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-500">
                    <span className="text-cyan-500">Inference Metric:</span> ~240 FPS localized vector processing across decentralized enterprise cluster node frameworks.
                  </div>
                </>
              )}

              {activeTab === 'audio' && (
                <>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-3 py-1 rounded-md w-fit mb-6">
                      <Cpu className="w-3.5 h-3.5" /> MODEL PIPELINE: SPEECH-TO-TEXT OPTIMIZED CORE
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Acoustic Alignment & Meeting Synchronization</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Converts operational conversations, raw diagnostic recordings, legal audio logs, and customer support channels into clean data assets. Speaker tokenization maps statements precisely, allowing full context indexing in our centralized database layers.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> High-Density Diarization Engine</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Jargon & Terminology Compensation</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Microsecond Temporal Timestamping</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cross-lingual Direct Vector Translation</div>
                    </div>
                  </div>
                  <div className="mt-8 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-500">
                    <span className="text-emerald-500">Inference Metric:</span> Native error rate reductions down below 2.4% across noisy infrastructure streams.
                  </div>
                </>
              )}

              {activeTab === 'document' && (
                <>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-violet-400 bg-violet-950/40 border border-violet-900/60 px-3 py-1 rounded-md w-fit mb-6">
                      <Cpu className="w-3.5 h-3.5" /> MODEL PIPELINE: STRUCT-PARSE LLM CORE
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Sub-Document Structural Hierarchy Mapping</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Traditional systems lose orientation inside large complex document architecture. Stratom decomposes massive asset manuals, compliance certifications, and internal knowledge indices into context-retaining multi-dimensional graphs.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> High-Fidelity Complex Table OCR</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Footnote & Cross-Ref Compilation</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Sliding Window Text Segmentation</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Metadata Invariant Generation</div>
                    </div>
                  </div>
                  <div className="mt-8 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-500">
                    <span className="text-violet-500">Inference Metric:</span> Intact data restoration across tabular structures tracking up to 99.1% clarity.
                  </div>
                </>
              )}

              {activeTab === 'image' && (
                <>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-900/60 px-3 py-1 rounded-md w-fit mb-6">
                      <Cpu className="w-3.5 h-3.5" /> MODEL PIPELINE: SHAPE-METRIC OBJECT DETECTOR
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Spatial Inspection & Anomaly Profiling</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Transforms static asset captures, compliance checklists, site inspection imagery, and logistical inventories into dynamic nodes. Features are isolated, contextualized, and automatically tagged based on target metric compliance.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Multi-Scale Material Analysis</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Volumetric Object Profiling</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Micro-defect Visual Identification</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Dense Geometric Component Mapping</div>
                    </div>
                  </div>
                  <div className="mt-8 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-500">
                    <span className="text-amber-500">Inference Metric:</span> Absolute object-level classification intervals running inside 45ms.
                  </div>
                </>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* --- Architectural Deep-Dive --- */}
      <section id="architecture" className="py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold uppercase text-cyan-500 tracking-widest mb-3 font-mono">// CORE ENGINEERING BACKBONE</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">The Multimodal RAG Topology</h3>
            <p className="text-slate-400 text-sm md:text-base">
              Stratom doesn't just pass strings to external third-party language wrappers. We orchestrate secure, deterministic data extraction processes designed for highly scalable data environments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-8 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs text-cyan-400 font-bold">01</div>
              <Layers className="w-8 h-8 text-cyan-500 mb-6 mt-2" />
              <h4 className="text-lg font-bold text-white mb-3">Isolated Vector Vaults</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Organizational datasets are isolated within single-tenant database layers using specialized dense-vector algorithms. Multi-tenancy parameters are locked down completely at the system kernel level.
              </p>
              <div className="font-mono text-[10px] text-slate-600 bg-slate-950 p-3 rounded-lg border border-slate-900">
                DATABASE: pgvector / qdrant_cluster_node <br />
                ISOLATION_INDEX: tenant_id_secure_hash
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-8 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs text-blue-400 font-bold">02</div>
              <Cpu className="w-8 h-8 text-blue-500 mb-6 mt-2" />
              <h4 className="text-lg font-bold text-white mb-3">GPU Activation Caching</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                To maximize search speeds across thousands of linear media hours, visual embeddings are mapped onto accelerated memory clusters to maintain near-zero latency overheads.
              </p>
              <div className="font-mono text-[10px] text-slate-600 bg-slate-950 p-3 rounded-lg border border-slate-900">
                HARDWARE: NVIDIA HGX H100 / A100 clusters <br />
                CACHE_STRATEGY: Layer-wise token compression
              </div>
            </div>

            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-8 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs text-indigo-400 font-bold">03</div>
              <Workflow className="w-8 h-8 text-indigo-500 mb-6 mt-2" />
              <h4 className="text-lg font-bold text-white mb-3">Deterministic Alignment</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Stratom cross-references model extractions back against source timestamps and vector nodes, fully mitigating hallucinations by fencing text generation strictly to factual metadata.
              </p>
              <div className="font-mono text-[10px] text-slate-600 bg-slate-950 p-3 rounded-lg border border-slate-900">
                ALIGNMENT: Truth-bound reference mapping <br />
                HALLUCINATION_GUARD: Strict boolean validation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Solutions By Industry --- */}
      <section id="solutions" className="py-28 bg-slate-900/20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold uppercase text-cyan-500 tracking-widest mb-3 font-mono">// BUSINESS APPLICABILITY</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">Built for High-Stakes Operations</h3>
            <p className="text-slate-400 text-base">
              Stratom adapts seamlessly across industry configurations where operational data mapping cannot tolerate structural errors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ind 1 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800/60 flex flex-col justify-between">
              <div>
                <Building className="w-7 h-7 text-cyan-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Infrastructure & Energy</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Index vast diagnostic media archives, structural pipeline blueprints, thermal sensor data, and heavy industrial logging. Enable ground crews to instantly query historical mechanical failures and maintenance logs using simple voice prompts.
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-500 tracking-wider uppercase border-t border-slate-800 pt-4">
                Target: Refinery & Asset Complexes
              </div>
            </div>

            {/* Ind 2 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800/60 flex flex-col justify-between">
              <div>
                <Scale className="w-7 h-7 text-blue-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Corporate Audit & Compliance</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Cross-reference multi-thousand page regulatory compliance documents against historical internal financial workflows, spatial logs, and executive team transcripts to automatically spot operational liabilities and regulatory deviation risks.
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-500 tracking-wider uppercase border-t border-slate-800 pt-4">
                Target: Risk & Governance Units
              </div>
            </div>

            {/* Ind 3 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800/60 flex flex-col justify-between">
              <div>
                <Clapperboard className="w-7 h-7 text-indigo-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Enterprise Media Archives</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Convert massive legacy asset catalogs, corporate video panels, external media streams, and training pipelines into deeply indexed internal libraries. Locate specific scenes, visual occurrences, or verbal terms in seconds.
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-500 tracking-wider uppercase border-t border-slate-800 pt-4">
                Target: Knowledge & Training Systems
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Developer Console Section --- */}
      <section id="developer" className="py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold uppercase text-cyan-500 tracking-widest mb-3 font-mono">// FOR ENGINEERING TEAMS</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Developer First Architecture</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Integrate Stratom directly into your modern continuous integration pipelines. Our low-overhead REST and gRPC endpoints allow engineering divisions to feed asset pipelines, track model outputs, and run structural semantic validation testing natively.
            </p>
            
            <div className="space-y-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                GraphQL and REST multi-channel streaming abstractions
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                Native webhooks for completed media processing metrics
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                Full metadata payload customizations via JSON configurations
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-500" />
                  <span className="font-mono text-xs text-slate-400">stratom_core_api_v2.sh</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setApiMethod('POST')}
                    className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold ${apiMethod === 'POST' ? 'bg-cyan-950 text-cyan-400 border border-cyan-900' : 'text-slate-500'}`}
                  >
                    POST /ingest
                  </button>
                  <button 
                    onClick={() => setApiMethod('GET')}
                    className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold ${apiMethod === 'GET' ? 'bg-cyan-950 text-cyan-400 border border-cyan-900' : 'text-slate-500'}`}
                  >
                    GET /search
                  </button>
                </div>
              </div>
              <div className="p-6 font-mono text-xs text-slate-300 overflow-x-auto bg-slate-950/40">
                <pre className="whitespace-pre">{codeSnippets[apiMethod]}</pre>
              </div>
              <div className="bg-slate-950 border-t border-slate-800/80 p-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Response payload: Application/Json</span>
                <span className="text-emerald-500">HTTP 202 Accepted</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Enterprise Security & Governance --- */}
      <section id="governance" className="py-28 bg-slate-900/10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 md:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-900/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-3xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400 text-xs font-mono mb-6">
                <Server className="w-3.5 h-3.5 text-cyan-400" /> INFRASTRUCTURE ISOLATION
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                Zero Data Commingling Guarantee
              </h3>
              
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10">
                Under no circumstances is tenant data pooled or forwarded to external foundational model sets. Stratom sets up customized network security barriers around your environment, ensuring absolute model compliance and airtight regulatory audit trails.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 text-xs">
                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan-400" /> TLS 1.3 & AES-256 Controls
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    Data pipelines are systematically encrypted throughout transfer sequences and operational rest windows.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Identity Provider Binding
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    Integrate seamlessly with native OpenID, SAML, and corporate SSO directory settings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Detailed FAQ Infrastructure --- */}
      <section className="py-28 bg-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <HelpCircle className="w-8 h-8 text-cyan-500 mx-auto mb-4" />
            <h3 className="text-3xl font-black text-white tracking-tight">Frequently Evaluated Architecture</h3>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How does Stratom run visual object indexing across thousands of media hours securely?",
                a: "Stratom breaks media into discrete keyframe matrix states using local foundational models. Frame metrics are converted directly into uniform vector weights within your company's dedicated infrastructure node, maximizing indexing speeds without risking structural information leakage."
              },
              {
                q: "Can the semantic indexing features map proprietary technical schematics?",
                a: "Yes. Our structural layout models identify granular patterns, text notes, and relative metrics within uploaded PDF drawings, CAD documentation, blueprints, and industrial checklists, making them queryable instantly."
              },
              {
                q: "What deployment models does STRATOM AI LTD support for compliance?",
                a: "We natively support dedicated multi-region cloud configurations across AWS and Azure infrastructure networks, fully aligning with enterprise information safety mandates."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-slate-900/40 border border-slate-900 p-6 rounded-xl">
                <h4 className="text-base font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer & Compliance Ledger --- */}
      <footer className="bg-slate-950 pt-20 pb-10 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-7 h-7 rounded bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">STRATOM<span className="text-cyan-500 font-normal">.AI</span></span>
              </div>
              <p className="text-xs text-slate-500 max-w-sm leading-relaxed mb-6">
                STRATOM AI LTD delivers specialized multimodal context graph infrastructure for international enterprise organizations requiring total information privacy and deterministic output guarantees.
              </p>
            </div>
            
            <div className="md:col-span-3 col-span-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">Platform Nodes</h5>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">Vision Tokenizer</a></li>
                <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">Acoustic Alignment Engine</a></li>
                <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">Document Partition Matrix</a></li>
                <li><a href="#developer" className="hover:text-cyan-400 transition-colors">Core Coregistration APIs</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 col-span-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">Regulatory Data</h5>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Corporate Registration: **STRATOM AI LTD** <br />
                System Status: <span className="text-emerald-500 font-mono">All Node Clusters Functional [100.00%]</span>
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-600">
            <p>&copy; {new Date().getFullYear()} STRATOM AI LTD. All regulatory compliance rights enforced under sovereign data protection rules.</p>
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3 text-slate-600" />
              <span>SECURE ENDPOINT VALIDATION</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;