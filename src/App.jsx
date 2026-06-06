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
    POST: `curl -X POST "https://api.stratom.ai/v2/upload" \\
  -H "Authorization: Bearer $STRATOM_API_KEY" \\
  -H "Content-Type: multipart/form-data" \\
  -F "file=@/workspace/assets/training_video.mp4"`,
    GET: `curl -X GET "https://api.stratom.ai/v2/search?question=what+is+our+leave+policy" \\
  -H "Authorization: Bearer $STRATOM_API_KEY" \\
  -H "Accept: application/json"`
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-900 selection:text-cyan-50 antialiased">
      
      {/* --- Top Utility Bar --- */}
      <div className="bg-slate-900/60 border-b border-slate-800/40 text-[11px] font-mono py-1.5 px-6 text-center text-slate-500 tracking-wider">
        SECURITY NOTICE: ALL UPLOADS ARE FULLY ENCRYPTED AND KEPT 100% PRIVATE TO YOUR COMPANY
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
            <a href="#pipeline" className="hover:text-cyan-400 transition-colors">How It Works</a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">Why It's Safe</a>
            <a href="#solutions" className="hover:text-cyan-400 transition-colors">Use Cases</a>
            <a href="#developer" className="hover:text-cyan-400 transition-colors">For IT Teams</a>
            <a href="#governance" className="hover:text-cyan-400 transition-colors">Security</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#waitlist-section" className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-cyan-950/40">
              Request Access
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
            <span className="font-mono text-[11px] tracking-wider uppercase text-slate-300">Stratom Enterprise Platform v2.4</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]">
            The Smart Search Engine for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400">
              Everything Your Company Knows
            </span>
          </h1>
          
          <p className="max-w-4xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 mb-14 leading-relaxed font-normal">
            Stop wasting hours looking for information. Stratom securely reads your company's videos, meeting recordings, PDFs, and images, allowing your employees to ask questions and find exact answers in seconds.
          </p>

          {/* Inline Waitlist Callout */}
          <div id="waitlist-section" className="max-w-xl mx-auto bg-slate-900/80 p-2.5 rounded-xl border border-slate-800/80 shadow-2xl backdrop-blur-md">
            <form onSubmit={handleJoinWaitlist} className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                required
                placeholder="Enter your work email address..." 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-slate-950/60 border border-slate-800 rounded-lg text-white px-4 py-3 text-sm placeholder:text-slate-600 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button 
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-500 text-white px-7 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {waitlistStatus === 'submitted' ? 'Joined Waitlist!' : 'Request Early Access'}
                <ChevronRight className="w-4 h-4" />
              </button>
            </form>
          </div>
          
          <div className="mt-6 flex justify-center items-center gap-8 text-[11px] font-mono tracking-widest text-slate-500 uppercase">
            <span>SOC2 COMPLIANT READY</span>
            <span>•</span>
            <span>PRIVATE CLOUD HOSTING</span>
            <span>•</span>
            <span>ZERO DATA SHARING</span>
          </div>
        </div>
      </section>

      {/* --- Multimodal Processing Hub --- */}
      <section id="pipeline" className="py-28 border-b border-slate-900 bg-slate-900/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold uppercase text-cyan-500 tracking-widest mb-3 font-mono">// HOW STRATOM WORKS</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">Upload Any File. Find Any Answer.</h3>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Our AI watches, listens, and reads just like a human would. It takes your messy, unorganized files and turns them into a smart, searchable library for your whole team.
            </p>
          </div>

          {/* Interactive Feature Showcase Layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-3">
              {[
                { id: 'video', label: 'Smart Video Search', icon: Video, desc: 'Find exact moments in training or security videos.' },
                { id: 'audio', label: 'Meeting Transcripts', icon: Mic, desc: 'Turn recorded calls and meetings into searchable text.' },
                { id: 'document', label: 'Deep Document Reading', icon: FileText, desc: 'Instantly find answers inside 100-page manuals or PDFs.' },
                { id: 'image', label: 'Photo & Image Scanning', icon: ImageIcon, desc: 'Automatically tag and organize site photos and blueprints.' }
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
                      <Cpu className="w-3.5 h-3.5" /> FEATURE: SMART VIDEO
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Stop skipping through hours of footage.</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Instead of manually watching long videos to find what you need, Stratom watches for you. You can upload Zoom recordings, training videos, or security footage, and our AI will let you search for specific actions, spoken words, or visual objects instantly.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Jump exactly to the right timestamp</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Automatically spot safety hazards</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Read text written on whiteboards</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-cyan-500" /> Summarize long training modules</div>
                    </div>
                  </div>
                  <div className="mt-8 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-500">
                    <span className="text-cyan-500">Example Search:</span> "Show me the part of the video where we discussed the new safety helmets."
                  </div>
                </>
              )}

              {activeTab === 'audio' && (
                <>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 px-3 py-1 rounded-md w-fit mb-6">
                      <Cpu className="w-3.5 h-3.5" /> FEATURE: SMART AUDIO
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Every meeting and call, neatly typed out.</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Don't rely on handwritten notes. Upload your recorded meetings, customer support calls, or voice memos. Stratom listens to the audio, types out every single word, and labels who said what, making it completely searchable.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Highly accurate typing (even with accents)</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Identifies different people speaking</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Creates simple meeting summaries</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Understands industry-specific terms</div>
                    </div>
                  </div>
                  <div className="mt-8 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-500">
                    <span className="text-emerald-500">Example Search:</span> "What did the client say about our pricing in last week's call?"
                  </div>
                </>
              )}

              {activeTab === 'document' && (
                <>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-violet-400 bg-violet-950/40 border border-violet-900/60 px-3 py-1 rounded-md w-fit mb-6">
                      <Cpu className="w-3.5 h-3.5" /> FEATURE: SMART DOCUMENTS
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Never read a 100-page manual again.</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      Upload your employee handbooks, legal contracts, complex tables, and past project proposals. Instead of hitting CTRL+F and hoping for the best, you can just ask Stratom a question in plain English, and it will read the documents to give you the exact answer.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Easily reads PDFs, Word, and Excel files</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Understands complicated charts and tables</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Always links back to the original page source</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-violet-500" /> Fills out client security questionnaires automatically</div>
                    </div>
                  </div>
                  <div className="mt-8 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-500">
                    <span className="text-violet-500">Example Search:</span> "How many vacation days do part-time employees get?"
                  </div>
                </>
              )}

              {activeTab === 'image' && (
                <>
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-950/40 border border-amber-900/60 px-3 py-1 rounded-md w-fit mb-6">
                      <Cpu className="w-3.5 h-3.5" /> FEATURE: SMART IMAGES
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">Organize thousands of photos effortlessly.</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      If your team takes photos of job sites, whiteboards, or equipment, organizing them is a nightmare. Upload them to Stratom, and our AI will automatically look at the picture, understand what's in it, and tag it so you can find it later.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400">
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Reads text inside photos</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Identifies specific tools and equipment</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Spots missing safety gear like helmets</div>
                      <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500" /> Understands blueprints and diagrams</div>
                    </div>
                  </div>
                  <div className="mt-8 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs text-slate-500">
                    <span className="text-amber-500">Example Search:</span> "Show me all photos from last month where a worker wasn't wearing a safety vest."
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
            <h2 className="text-xs font-bold uppercase text-cyan-500 tracking-widest mb-3 font-mono">// WHY IT'S SAFE & FAST</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">Built for Serious Businesses</h3>
            <p className="text-slate-400 text-sm md:text-base">
              We don't use generic AI chatbots that guess answers or leak your data. Stratom is built from the ground up to be safe, fast, and 100% accurate.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-8 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs text-cyan-400 font-bold">01</div>
              <Layers className="w-8 h-8 text-cyan-500 mb-6 mt-2" />
              <h4 className="text-lg font-bold text-white mb-3">Your Own Private Vault</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Your company's files are locked in a private database that only your team can access. We never mix your data with other companies, and we never use your files to train public AI models.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-8 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs text-blue-400 font-bold">02</div>
              <Cpu className="w-8 h-8 text-blue-500 mb-6 mt-2" />
              <h4 className="text-lg font-bold text-white mb-3">Lightning Fast Search</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Searching through hours of video or thousands of PDFs normally takes forever. We use top-of-the-line cloud servers so you get your answers in milliseconds, every single time.
              </p>
            </div>

            <div className="bg-slate-900/30 border border-slate-900 rounded-2xl p-8 relative">
              <div className="absolute top-0 left-8 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-mono text-xs text-indigo-400 font-bold">03</div>
              <Workflow className="w-8 h-8 text-indigo-500 mb-6 mt-2" />
              <h4 className="text-lg font-bold text-white mb-3">No AI "Hallucinations"</h4>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">
                Other AI tools sometimes make things up. Stratom is strictly forced to only give answers based on the files you uploaded. If the answer isn't in your files, it will tell you, rather than guessing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Solutions By Industry --- */}
      <section id="solutions" className="py-28 bg-slate-900/20 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h2 className="text-xs font-bold uppercase text-cyan-500 tracking-widest mb-3 font-mono">// WHO USES STRATOM</h2>
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-5">Perfect for Complex Teams</h3>
            <p className="text-slate-400 text-base">
              Stratom is built for industries that have too many files and not enough time. 
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Ind 1 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800/60 flex flex-col justify-between">
              <div>
                <Building className="w-7 h-7 text-cyan-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Construction & Manufacturing</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Keep track of site photos, safety videos, and equipment manuals. Allow workers on the floor to instantly look up repair instructions or safety guidelines from their phones without flipping through binders.
                </p>
              </div>
            </div>

            {/* Ind 2 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800/60 flex flex-col justify-between">
              <div>
                <Scale className="w-7 h-7 text-blue-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Sales & Compliance</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Stop losing weeks filling out giant client security questionnaires. Upload your past proposals and company policies, and let Stratom automatically draft perfect, accurate answers for your sales team.
                </p>
              </div>
            </div>

            {/* Ind 3 */}
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800/60 flex flex-col justify-between">
              <div>
                <Clapperboard className="w-7 h-7 text-indigo-400 mb-6" />
                <h4 className="text-xl font-bold text-white mb-3">Training & HR Departments</h4>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  Turn hours of boring training videos and giant employee handbooks into an interactive assistant. New hires can ask questions like "How do I request time off?" and get an instant, correct answer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Developer Console Section --- */}
      <section id="developer" className="py-28 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-xs font-bold uppercase text-cyan-500 tracking-widest mb-3 font-mono">// FOR YOUR IT TEAM</h2>
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">Easy to Connect and Automate</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              You don't have to use our dashboard if you don't want to. Stratom was built so your IT team can easily plug our smart search directly into your company's existing website, internal tools, or apps using a simple API.
            </p>
            
            <div className="space-y-4 text-xs font-medium text-slate-300">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                Clean, modern API endpoints that developers love.
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                Automate uploads directly from your servers.
              </div>
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                Detailed guides and technical support included.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 w-full">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-slate-950/80 px-4 py-3 border-b border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-500" />
                  <span className="font-mono text-xs text-slate-400">stratom_api_preview</span>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setApiMethod('POST')}
                    className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold ${apiMethod === 'POST' ? 'bg-cyan-950 text-cyan-400 border border-cyan-900' : 'text-slate-500'}`}
                  >
                    Upload File
                  </button>
                  <button 
                    onClick={() => setApiMethod('GET')}
                    className={`px-2.5 py-1 rounded font-mono text-[11px] font-bold ${apiMethod === 'GET' ? 'bg-cyan-950 text-cyan-400 border border-cyan-900' : 'text-slate-500'}`}
                  >
                    Search Data
                  </button>
                </div>
              </div>
              <div className="p-6 font-mono text-xs text-slate-300 overflow-x-auto bg-slate-950/40">
                <pre className="whitespace-pre">{codeSnippets[apiMethod]}</pre>
              </div>
              <div className="bg-slate-950 border-t border-slate-800/80 p-4 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span>Response: Data Received</span>
                <span className="text-emerald-500">Status: Success</span>
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
                <Server className="w-3.5 h-3.5 text-cyan-400" /> BANK-LEVEL SECURITY
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-6">
                Your Data Remains Yours. Period.
              </h3>
              
              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-10">
                We know how important privacy is. Stratom uses the exact same security technology that major banks and hospitals use. We can never view your files, and they are never shared with anyone else.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 text-xs">
                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-cyan-400" /> Full Encryption
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    Your files are scrambled into unreadable code while they are stored on our servers, ensuring no one can steal them.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-cyan-400" /> Employee Logins
                  </h4>
                  <p className="text-slate-500 leading-relaxed">
                    Easily connect Stratom to your existing company login system so your employees can sign in securely without a new password.
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
            <h3 className="text-3xl font-black text-white tracking-tight">Frequently Asked Questions</h3>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "What kind of files can I upload to Stratom?",
                a: "You can upload almost anything. We support videos (MP4, MOV), audio recordings (MP3, WAV), all standard documents (PDF, Word, Excel, PowerPoint), and images (JPG, PNG)."
              },
              {
                q: "Do I need to be good with computers to use this?",
                a: "Not at all. If you know how to use Google, you know how to use Stratom. Just type your question into the search bar, and the system does the rest."
              },
              {
                q: "Will Stratom use my company's private files to train public AI?",
                a: "Absolutely not. We have strict privacy rules built into the software. Your data is isolated to your company alone and is never used to train public models like ChatGPT."
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
                <div className="w-7 h-7 rounded bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <Database className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white tracking-tight">STRATOM<span className="text-cyan-500 font-normal">.AI</span></span>
              </div>
              <p className="text-xs text-slate-500 max-w-sm leading-relaxed mb-6">
                Stratom helps companies stop wasting time searching for files. We make all your videos, documents, and recordings instantly searchable using safe, private AI.
              </p>
            </div>
            
            <div className="md:col-span-3 col-span-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">Features</h5>
              <ul className="space-y-2 text-xs text-slate-500">
                <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">Smart Video Search</a></li>
                <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">Meeting Transcripts</a></li>
                <li><a href="#pipeline" className="hover:text-cyan-400 transition-colors">Document Reading</a></li>
                <li><a href="#developer" className="hover:text-cyan-400 transition-colors">Developer API</a></li>
              </ul>
            </div>

            <div className="md:col-span-4 col-span-6">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 font-mono">Company Details</h5>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Registered as: **STRATOM AI LTD** <br />
                System Status: <span className="text-emerald-500 font-mono">All Systems Operational [100%]</span>
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-slate-600">
            <p>&copy; {new Date().getFullYear()} STRATOM AI LTD. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <Lock className="w-3 h-3 text-slate-600" />
              <span>100% SECURE & PRIVATE</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;