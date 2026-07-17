import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity, Server, Database, TrendingUp, RefreshCw, Layers, CheckCircle2, AlertCircle } from 'lucide-react';

interface LogItem {
  id: string;
  time: string;
  system: 'ERP' | 'CRM' | 'SAP' | 'AI';
  msg: string;
  status: 'success' | 'warning' | 'info';
}

const INITIAL_LOGS: LogItem[] = [
  { id: '1', time: '14:23:01', system: 'ERP', msg: 'Yarn Lot #Y942 (Dye Batch #4) allocated to Loom #12', status: 'success' },
  { id: '2', time: '14:23:15', system: 'CRM', msg: 'Lead \'Apex Apparel Group\' qualified & CRM-routed to Enterprise Desk', status: 'success' },
  { id: '3', time: '14:23:45', system: 'SAP', msg: 'FEFO batch quality control compliance validation approved', status: 'success' },
  { id: '4', time: '14:24:02', system: 'AI', msg: 'Corrugated reel deckle waste minimized to 0.4% via AI-Optimizer', status: 'success' },
  { id: '5', time: '14:24:20', system: 'ERP', msg: 'Stock ledger synchronized across 3 distributed regional warehouses', status: 'info' }
];

export default function DashboardMockup() {
  const [logs, setLogs] = useState<LogItem[]>(INITIAL_LOGS);
  const [activeTab, setActiveTab] = useState<'overview' | 'integration' | 'performance'>('overview');
  const [isProcessing, setIsProcessing] = useState(false);
  const [throughput, setThroughput] = useState(94);
  const [syncDelay, setSyncDelay] = useState(120);

  // Periodic log simulator
  useEffect(() => {
    const systems: Array<'ERP' | 'CRM' | 'SAP' | 'AI'> = ['ERP', 'CRM', 'SAP', 'AI'];
    const messages = {
      ERP: [
        'Batch tracking completed for textile dyeing cycle #B42',
        'Fabric inventory status synchronized: 15,200 meters updated',
        'Loom capacity optimizer updated for Shift C schedules',
        'Automated dispatch alert dispatched to Pharma transport units'
      ],
      CRM: [
        'Marketing automation triggered: 450 apparel leads nurtured',
        'Sales pipeline forecast recalibrated: Projected +18% growth',
        'Contact record consolidated: Removed 24 duplicated customer logs',
        'Salesforce pipeline sync completed: 0 unresolved records'
      ],
      SAP: [
        'Production planning run (MRP) completed for Pharma formulation #P812',
        'Compliance audit log exported successfully to secure vault',
        'Cost-center ledger balanced: Variance margins below 0.1%',
        'SAP S/4HANA material document generated for packaging items'
      ],
      AI: [
        'Predictive maintenance alert: Loom #4 belt wear at 85%',
        'Customer satisfaction chatbot auto-resolved 14 open queries',
        'Predictive demand index compiled: Textile yarn stockpiles adjusted',
        'Corrugator deckle calculations finished: 480 meters paper saved'
      ]
    };

    const interval = setInterval(() => {
      setIsProcessing(true);
      setTimeout(() => setIsProcessing(false), 800);

      const sys = systems[Math.floor(Math.random() * systems.length)];
      const msgList = messages[sys];
      const selectedMsg = msgList[Math.floor(Math.random() * msgList.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      const newLog: LogItem = {
        id: Math.random().toString(),
        time: timeStr,
        system: sys,
        msg: selectedMsg,
        status: Math.random() > 0.9 ? 'warning' : 'success'
      };

      setLogs(prev => [newLog, ...prev.slice(0, 4)]);
      setThroughput(prev => Math.min(100, Math.max(85, prev + Math.floor(Math.random() * 5) - 2)));
      setSyncDelay(prev => Math.min(250, Math.max(45, prev + Math.floor(Math.random() * 20) - 10)));
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full h-full max-w-2xl mx-auto overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 text-slate-100 shadow-2xl flex flex-col font-sans"
      id="dashboard-mockup"
    >
      {/* Top Application Bar */}
      <div className="px-5 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Mock window buttons */}
          <div className="flex gap-1.5 mr-2">
            <span className="w-3 h-3 rounded-full bg-rose-500" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
          </div>
          <span className="text-xs font-mono text-slate-400 tracking-wider">ASTRABIZZ OPERATIONS HUB v3.2</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-800 text-emerald-400">
            <span className={`w-1.5 h-1.5 rounded-full bg-emerald-400 ${isProcessing ? 'animate-ping' : ''}`} />
            Live Sync Active
          </span>
        </div>
      </div>

      {/* Internal Navigation Tabs */}
      <div className="px-2 sm:px-4 bg-slate-950/50 border-b border-slate-800 flex flex-wrap justify-between items-center gap-x-2">
        <div className="flex gap-0.5 sm:gap-2">
          {(['overview', 'integration', 'performance'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 sm:px-4 py-2 text-[10px] sm:text-xs font-medium capitalize border-b-2 transition-all duration-300 whitespace-nowrap ${
                activeTab === tab
                  ? 'border-brand-primary text-brand-primary bg-slate-900/50'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="hidden min-[420px]:block text-[10px] sm:text-xs font-mono text-slate-500 pr-2 whitespace-nowrap">
          Refresh rate: 4.5s
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="p-3 sm:p-6 flex-1 flex flex-col gap-4 sm:gap-5 min-h-[350px]">
        {activeTab === 'overview' && (
          <>
            {/* Top Stat Boxes */}
            <div className="grid grid-cols-1 min-[480px]:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col min-w-0">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5 truncate">
                  <TrendingUp className="w-3.5 h-3.5 text-brand-primary shrink-0" /> <span className="truncate">System Efficiency</span>
                </span>
                <span className="text-xl sm:text-2xl font-semibold tracking-tight mt-1 text-white font-mono">{throughput}%</span>
                <span className="text-[10px] text-emerald-400 mt-1 font-medium truncate">↑ +3.4% this quarter</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col min-w-0">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5 truncate">
                  <RefreshCw className="w-3.5 h-3.5 text-brand-gold shrink-0" /> <span className="truncate">API Sync Delay</span>
                </span>
                <span className="text-xl sm:text-2xl font-semibold tracking-tight mt-1 text-white font-mono">{syncDelay}ms</span>
                <span className="text-[10px] text-slate-400 mt-1 font-medium truncate">Optimized node queries</span>
              </div>
              <div className="p-3 sm:p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col min-w-0">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider flex items-center gap-1.5 truncate">
                  <Server className="w-3.5 h-3.5 text-emerald-400 shrink-0" /> <span className="truncate">Database Uptime</span>
                </span>
                <span className="text-xl sm:text-2xl font-semibold tracking-tight mt-1 text-white font-mono">99.98%</span>
                <span className="text-[10px] text-emerald-400 mt-1 font-medium truncate">Enterprise grade clusters</span>
              </div>
            </div>

            {/* Simulated Animated Graph */}
            <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/60 flex-1 flex flex-col">
              <div className="flex flex-wrap justify-between items-center gap-x-3 gap-y-1 mb-3">
                <span className="text-xs font-semibold text-slate-300">Operational Throughput (Real-Time vs Target)</span>
                <div className="flex gap-3 text-[10px] shrink-0">
                  <span className="flex items-center gap-1"><span className="w-2.5 h-1.5 rounded bg-brand-primary inline-block"></span>Realized</span>
                  <span className="flex items-center gap-1"><span className="w-2.5 h-1.5 rounded bg-brand-gold inline-block"></span>Optimal</span>
                </div>
              </div>
              {/* Custom SVG Line Chart with Animation */}
              <div className="flex-1 w-full relative min-h-[140px] flex items-end">
                <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 120" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="400" y2="30" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="0" y1="60" x2="400" y2="60" stroke="#1e293b" strokeDasharray="3 3" />
                  <line x1="0" y1="90" x2="400" y2="90" stroke="#1e293b" strokeDasharray="3 3" />

                  {/* Target optimal line (Gold) */}
                  <path
                    d="M 0 50 Q 100 40 200 45 T 400 35"
                    fill="none"
                    stroke="#F2C230"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="opacity-70"
                  />

                  {/* Realized line (Premium Green) */}
                  <motion.path
                    d="M 0 85 L 50 60 L 100 75 L 150 45 L 200 65 L 250 40 L 300 32 L 350 48 L 400 25"
                    fill="none"
                    stroke="#4FA64F"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: 'easeOut' }}
                  />

                  {/* Area under realized path */}
                  <path
                    d="M 0 85 L 50 60 L 100 75 L 150 45 L 200 65 L 250 40 L 300 32 L 350 48 L 400 25 V 120 H 0 Z"
                    fill="url(#areaGrad)"
                    className="opacity-15"
                  />
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#4FA64F" />
                      <stop offset="100%" stopColor="#4FA64F" stopOpacity="0" />
                    </linearGradient>
                  </defs>

                  {/* Dynamic Pointer Dot on Latest Value */}
                  <motion.circle
                    cx="400"
                    cy="25"
                    r="5"
                    fill="#4FA64F"
                    animate={{ r: [5, 9, 5] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                  />
                </svg>

                {/* X-Axis labels */}
                <div className="absolute bottom-0 inset-x-0 flex justify-between text-[9px] font-mono text-slate-500 pt-1 border-t border-slate-800/60">
                  <span>08:00</span>
                  <span>10:00</span>
                  <span>12:00</span>
                  <span>14:00</span>
                  <span className="hidden min-[480px]:inline">Real-Time (Secured Sync)</span>
                  <span className="inline min-[480px]:hidden">Live</span>
                </div>
              </div>
            </div>
          </>
        )}

        {activeTab === 'integration' && (
          <div className="flex-1 flex flex-col justify-between py-2">
            <span className="text-xs font-semibold text-slate-300 mb-2">Systems Integration Architecture</span>
            <div className="grid grid-cols-5 gap-2 items-center text-center py-4">
              {/* Left Side: Disconnected Legacy Systems */}
              <div className="col-span-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col gap-2.5 items-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Legacy Systems</span>
                <div className="w-full text-[10px] py-1.5 px-2 bg-slate-900 border border-rose-950/50 rounded-lg text-rose-300 flex items-center justify-between">
                  <span>Standalone Files</span>
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                </div>
                <div className="w-full text-[10px] py-1.5 px-2 bg-slate-900 border border-rose-950/50 rounded-lg text-rose-300 flex items-center justify-between">
                  <span>Manual Ledger</span>
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                </div>
                <div className="w-full text-[10px] py-1.5 px-2 bg-slate-900 border border-rose-950/50 rounded-lg text-rose-300 flex items-center justify-between">
                  <span>Siloed databases</span>
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                </div>
              </div>

              {/* Middle: Astrabizz Integration Gateway */}
              <div className="col-span-1 flex flex-col items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                  className="p-2 rounded-full bg-brand-dark border border-brand-primary"
                >
                  <RefreshCw className="w-5 h-5 text-brand-gold" />
                </motion.div>
                <span className="text-[9px] font-semibold text-brand-gold mt-1">Astrabizz Integration</span>
              </div>

              {/* Right Side: Unfied Enterprise Architecture */}
              <div className="col-span-2 p-3 rounded-xl bg-slate-950/80 border border-brand-dark/40 flex flex-col gap-2.5 items-center">
                <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wide text-brand-primary">Unified System</span>
                <div className="w-full text-[10px] py-1.5 px-2 bg-brand-dark/20 border border-brand-primary/30 rounded-lg text-white flex items-center justify-between font-medium">
                  <span>ERP Shop Floor</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                </div>
                <div className="w-full text-[10px] py-1.5 px-2 bg-brand-dark/20 border border-brand-primary/30 rounded-lg text-white flex items-center justify-between font-medium">
                  <span>CRM Sales Pipeline</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                </div>
                <div className="w-full text-[10px] py-1.5 px-2 bg-brand-dark/20 border border-brand-primary/30 rounded-lg text-white flex items-center justify-between font-medium">
                  <span>SAP Analytics Core</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary" />
                </div>
              </div>
            </div>
            <div className="text-center p-2 rounded-lg bg-slate-950/40 border border-slate-800 text-[11px] text-slate-400">
              ✔ <strong>Result:</strong> Disconnected silo delays reduced by 85%. Automated reports generate in seconds rather than weeks.
            </div>
          </div>
        )}

        {activeTab === 'performance' && (
          <div className="flex-1 flex flex-col justify-between py-1">
            <span className="text-xs font-semibold text-slate-300 mb-2">Enterprise Performance Metrics (By Industry)</span>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded bg-emerald-950 text-brand-primary">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Textile & Apparel</span>
                  <span className="text-sm font-semibold mt-0.5 text-white">Loom Output +22%</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded bg-emerald-950 text-brand-primary">
                  <Database className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Pharma Operations</span>
                  <span className="text-sm font-semibold mt-0.5 text-white">Compliance 100% Solid</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded bg-emerald-950 text-brand-primary">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">Packaging Quoting</span>
                  <span className="text-sm font-semibold mt-0.5 text-white">Quoting speed: 2 mins</span>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 flex items-center gap-3">
                <div className="p-2 rounded bg-emerald-950 text-brand-primary">
                  <Server className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-slate-400 font-bold uppercase">AI Process Automation</span>
                  <span className="text-sm font-semibold mt-0.5 text-white">Manual labour -60%</span>
                </div>
              </div>
            </div>
            <div className="text-[10px] text-slate-500 font-mono text-right mt-2">
              All metrics based on real-world Astrabizz client deployments.
            </div>
          </div>
        )}

        {/* Console Activity Log ledger (Always visible at the bottom to give massive tech authenticity) */}
        <div className="mt-auto flex flex-col gap-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-brand-primary" /> Active System Transaction Ledger
          </span>
          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono text-[10.5px] leading-relaxed flex flex-col gap-1.5 h-[115px] overflow-hidden">
            <AnimatePresence initial={false}>
              {logs.map(log => (
                <motion.div
                  key={log.id}
                  initial={{ opacity: 0, x: -10, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: 'auto' }}
                  exit={{ opacity: 0, y: 10, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-start gap-2.5 text-slate-300"
                >
                  <span className="text-slate-500 shrink-0">{log.time}</span>
                  <span
                    className={`font-semibold shrink-0 px-1 py-0.2 rounded text-[9px] ${
                      log.system === 'ERP'
                        ? 'bg-emerald-950 text-brand-primary border border-emerald-800/40'
                        : log.system === 'CRM'
                        ? 'bg-blue-950 text-blue-400 border border-blue-900/40'
                        : log.system === 'SAP'
                        ? 'bg-purple-950 text-purple-400 border border-purple-900/40'
                        : 'bg-amber-950 text-brand-gold border border-brand-gold/20'
                    }`}
                  >
                    {log.system}
                  </span>
                  <span className="truncate flex-1">{log.msg}</span>
                  {log.status === 'warning' ? (
                    <AlertCircle className="w-3.5 h-3.5 text-brand-gold shrink-0 self-center" />
                  ) : (
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-primary shrink-0 self-center" />
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
