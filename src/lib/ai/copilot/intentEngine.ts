import { CopilotResponse } from '../interfaces';
import candidateData from '@/knowledge-base/candidate.json';
import faqData from '@/knowledge-base/faq.json';
import projectsData from '@/knowledge-base/projects.json';

export class CopilotIntentEngine {
  public static query(userText: string): CopilotResponse {
    const text = userText.toLowerCase().trim();

    if (!text) {
      return {
        answer: "Hello! I am Ankit's AI Portfolio Assistant. Ask me anything about his projects (WorksBuddy OCR, RAG System, Laptop Price Prediction), CEC B.Tech degree, or professional experience!",
        suggestedQuestions: [
          'Tell me about WorksBuddy OCR project',
          'What is Ankit\'s educational background?',
          'Tell me about the RAG system project',
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

    // Check Projects specific match
    if (text.includes('worksbuddy') || text.includes('ocr') || text.includes('document') || text.includes('lbm')) {
      return {
        answer: `WorksBuddy is Ankit's local Document AI project. It uses FastAPI, PaddleOCR, and local Ollama LLMs to achieve a 70% data-entry reduction with sub-1.5s per page processing speed, keeping data 100% private.`,
        suggestedQuestions: ['What tech stack was used in WorksBuddy?', 'Tell me about the RAG system', 'Show Ankit\'s GitHub profile'],
      };
    }

    if (text.includes('rag') || text.includes('qa') || text.includes('agentic') || text.includes('langchain') || text.includes('faiss')) {
      return {
        answer: `The Retrieval-Augmented Q&A System is a RAG pipeline utilizing LangChain, FAISS, and OpenAI/HuggingFace embeddings, featuring an integrated CrewAI/LangGraph supervisor that dynamically corrects low-confidence queries.`,
        suggestedQuestions: ['What is the RAG query latency?', 'Tell me about Laptop Price Prediction', 'How to contact Ankit?'],
      };
    }

    // Fallback context-aware response
    return {
      answer: `Ankit Singh is an AI Engineer and Data Analyst. He holds a B.Tech in CSE (AI & ML) from Chandigarh Engineering College and is currently an AI Engineer at LBM Solution Pvt. Ltd. (OCR - WorksBuddy). He specializes in Python, FastAPI, local LLMs, LangChain/FAISS RAG pipelines, and machine learning.`,
      suggestedQuestions: [
        'Tell me about his key projects',
        'What are his contact details?',
        'Calculate job match score',
      ],
    };
  }
}

