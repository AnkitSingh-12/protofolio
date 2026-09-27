import { CopilotResponse } from '../interfaces';
import candidateData from '@/knowledge-base/candidate.json';
import faqData from '@/knowledge-base/faq.json';
import projectsData from '@/knowledge-base/projects.json';

export class CopilotIntentEngine {
  public static query(userText: string): CopilotResponse {
    const text = userText.toLowerCase().trim();

    if (!text) {
      return {
        answer: "Hello! I am Ankit's AI Portfolio Assistant. Ask me anything about his projects (Autonomous AI Leads Platform, RAG System), CEC B.Tech CSE degree, or his AI Engineering experience at WorksBuddy!",
        suggestedQuestions: [
          'Tell me about the Autonomous AI Leads Platform',
          'Tell me about the RAG system project',
          'What is Ankit\'s educational background?',
          'How to contact Ankit?',
        ],
      };
    }

    // Check FAQ intent rules
    for (const faq of faqData) {
      if (faq.keywords.some((kw) => text.includes(kw))) {
        return {
          answer: faq.response,
          suggestedQuestions: [
            'How can I contact Ankit?',
            'What is his work experience?',
            'Show his skills matrix',
          ],
        };
      }
    }

    // Check Leads Enrichment project
    if (text.includes('lead') || text.includes('enrichment') || text.includes('prospect') || text.includes('serp')) {
      return {
        answer: `The Autonomous AI Leads & People Enrichment Platform is a B2B prospecting engine that processed 5,000-10,000+ profiles using FastAPI, Next.js, Redis Streams, Groq LLMs (Llama/Qwen), and PostgreSQL/SQLite with DNS/SMTP deliverability scoring.`,
        suggestedQuestions: ['What tech stack was used in the Leads Platform?', 'Tell me about the RAG system', 'Show Ankit\'s GitHub profile'],
      };
    }

    // Check Projects specific match for OCR / Voice / Agents
    if (text.includes('voice') || text.includes('pipecat') || text.includes('livekit') || text.includes('deepgram')) {
      return {
        answer: `Ankit architected a multilingual Real-Time AI Voice Agent at WorksBuddy supporting 3 languages with sub-2s latency using LangGraph, Pipecat, LiveKit, Deepgram STT, ElevenLabs TTS, and Mem0 conversational memory.`,
        suggestedQuestions: ['Tell me about the MCP-based agents', 'Tell me about WorksBuddy OCR', 'How to contact Ankit?'],
      };
    }

    if (text.includes('mcp') || text.includes('agent') || text.includes('lio') || text.includes('inzo')) {
      return {
        answer: `Ankit developed MCP-based AI business agents (Lio, Taro, Evox & Inzo) for lead, task, email, and invoice management, integrating business APIs for automated context-aware operational execution.`,
        suggestedQuestions: ['Tell me about his Voice Agent', 'Tell me about the Leads Enrichment Platform', 'What are his core skills?'],
      };
    }

    if (text.includes('worksbuddy') || text.includes('ocr') || text.includes('document')) {
      return {
        answer: `WorksBuddy OCR is Ankit's Document Intelligence solution using PaddleOCR, FastAPI, and local Ollama LLMs (Phi-3 / Llama 3.2), reducing manual data-entry by ~70% with strict Pydantic validation and zero API fees.`,
        suggestedQuestions: ['What tech stack was used in WorksBuddy OCR?', 'Tell me about the RAG system', 'Show Ankit\'s GitHub profile'],
      };
    }

    if (text.includes('rag') || text.includes('qa') || text.includes('langchain') || text.includes('faiss')) {
      return {
        answer: `The Retrieval-Augmented Q&A System is a RAG pipeline utilizing LangChain, FAISS, and OpenAI/HuggingFace embeddings, featuring an integrated CrewAI/LangGraph supervisor that dynamically re-queries the knowledge base for ambiguous queries with <120ms latency.`,
        suggestedQuestions: ['What is the RAG query latency?', 'Tell me about the Leads Enrichment project', 'How to contact Ankit?'],
      };
    }

    // Fallback context-aware response
    return {
      answer: `Ankit Singh is an AI / Generative AI Engineer. He holds a B.Tech in Computer Science & Engineering from Chandigarh Engineering College, Punjab, and currently works at LBM Solution Pvt. Ltd. (WorksBuddy.Ai). He specializes in Python, Agentic AI (LangGraph, CrewAI, MCP), RAG pipelines, local LLMs, and real-time voice architectures.`,
      suggestedQuestions: [
        'Tell me about his key projects',
        'What are his contact details?',
        'Calculate job match score',
      ],
    };
  }
}
