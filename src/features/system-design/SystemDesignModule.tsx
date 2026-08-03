'use client';

import React, { useState } from 'react';
import { Layers, Database, ArrowRight, Server, Shield, Cpu, Sparkles } from 'lucide-react';

export const SystemDesignModule: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'worksbuddy' | 'student_performance' | 'laptop_price'>('worksbuddy');

  return (
    <section id="system-design" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-indigo/20 border border-cyber-indigo/40 text-cyber-cyan font-mono text-xs">
            <Layers className="w-3.5 h-3.5" />
            <span>ARCHITECTURE & FLOW DIAGRAMS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
            System Design & Data Pipeline Visualizers
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Interactive system architecture, database ER diagrams, and machine learning pipeline flows representing Ankit's core engineering projects.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveTab('worksbuddy')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
              activeTab === 'worksbuddy'
                ? 'bg-cyber-cyan text-cyber-dark shadow-neon-cyan'
                : 'bg-cyber-surface border border-cyber-border text-slate-400 hover:text-white'
            }`}
          >
            WorksBuddy OCR Flow
          </button>
          <button
            onClick={() => setActiveTab('student_performance')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
              activeTab === 'student_performance'
                ? 'bg-cyber-emerald text-cyber-dark shadow-neon-emerald'
                : 'bg-cyber-surface border border-cyber-border text-slate-400 hover:text-white'
            }`}
          >
            Student Performance Schema
          </button>
          <button
            onClick={() => setActiveTab('laptop_price')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${
              activeTab === 'laptop_price'
                ? 'bg-cyber-indigo text-white shadow-neon-indigo'
                : 'bg-cyber-surface border border-cyber-border text-slate-400 hover:text-white'
            }`}
          >
            Laptop Price ML Pipeline
          </button>
        </div>

        {/* Diagram Canvas Panel */}
        <div className="p-6 sm:p-10 rounded-2xl bg-cyber-surface/70 border border-cyber-border backdrop-blur-md space-y-6">
          {activeTab === 'worksbuddy' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-white font-display">
                  WorksBuddy: FastAPI & PaddleOCR Document Intelligence Pipeline
                </h3>
                <span className="text-xs font-mono text-cyber-cyan font-bold">Latency Target: &lt;350ms (Fully Local Stack)</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center text-center font-mono text-xs">
                {/* Step 1 */}
                <div className="p-4 rounded-xl bg-cyber-dark border border-cyber-cyan/40 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-cyber-cyan/20 text-cyber-cyan mx-auto flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="font-bold text-white">Client Ingestion</div>
                  <p className="text-[10px] text-slate-400">Uploads invoice/card images or PDFs via REST</p>
                </div>

                {/* Step 2 */}
                <div className="p-4 rounded-xl bg-cyber-dark border border-cyber-emerald/40 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-cyber-emerald/20 text-cyber-emerald mx-auto flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="font-bold text-white">PaddleOCR Engine</div>
                  <p className="text-[10px] text-slate-400">Extracts raw text strings and coordinate bounding boxes</p>
                </div>

                {/* Step 3 */}
                <div className="p-4 rounded-xl bg-cyber-dark border border-cyber-indigo/40 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-cyber-indigo/20 text-cyber-indigo mx-auto flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="font-bold text-white">Ollama Local LLM</div>
                  <p className="text-[10px] text-slate-400">Runs Llama 3.2 / Phi-3 model for schema extraction</p>
                </div>

                {/* Step 4 */}
                <div className="p-4 rounded-xl bg-cyber-dark border border-cyber-emerald/40 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-cyber-emerald/20 text-cyber-emerald mx-auto flex items-center justify-center font-bold">
                    4
                  </div>
                  <div className="font-bold text-white">Validated JSON</div>
                  <p className="text-[10px] text-slate-400">Pydantic outputs structured data without post-processing</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'student_performance' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-white font-display">
                  Student Performance & Academic Risk: PostgreSQL Analytics Schema
                </h3>
                <span className="text-xs font-mono text-cyber-emerald font-bold">JSPIDERS Academic Analytics</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
                <div className="p-4 rounded-xl bg-cyber-dark border border-cyber-border space-y-2">
                  <div className="font-bold text-cyber-cyan border-b border-slate-800 pb-1">
                    Table: Students (Demographics)
                  </div>
                  <div className="text-[11px] text-slate-300 space-y-1">
                    <div>student_id: UUID (PK)</div>
                    <div>gender: VARCHAR(10)</div>
                    <div>lunch_type: VARCHAR(20)</div>
                    <div>parental_education: VARCHAR(100)</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyber-dark border border-cyber-border space-y-2">
                  <div className="font-bold text-cyber-emerald border-b border-slate-800 pb-1">
                    Table: Scores (Metrics)
                  </div>
                  <div className="text-[11px] text-slate-300 space-y-1">
                    <div>score_id: UUID (PK)</div>
                    <div>student_id: UUID (FK)</div>
                    <div>math_score: INTEGER</div>
                    <div>reading_score: INTEGER</div>
                    <div>writing_score: INTEGER</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyber-dark border border-cyber-border space-y-2">
                  <div className="font-bold text-cyber-indigo border-b border-slate-800 pb-1">
                    Table: PrepCourses (Risk Drivers)
                  </div>
                  <div className="text-[11px] text-slate-300 space-y-1">
                    <div>prep_id: UUID (PK)</div>
                    <div>student_id: UUID (FK)</div>
                    <div>course_completed: BOOLEAN</div>
                    <div>score_variance: FLOAT</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'laptop_price' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <h3 className="text-lg font-bold text-white font-display">
                  Laptop Price Prediction: Supervised ML Regression Pipeline
                </h3>
                <span className="text-xs font-mono text-cyber-indigo font-bold">Scikit-Learn ML Flow</span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-mono text-xs">
                Data pipeline ingests raw laptop hardware metrics (brand, CPU model, RAM amount, GPU brand, SSD/HDD storage capacity), performs feature engineering (scaling numeric fields, one-hot encoding categorical variables), trains/tunes **Linear Regression, Decision Tree, and Random Forest models**, and returns predicted price outputs to optimize customer choices.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
