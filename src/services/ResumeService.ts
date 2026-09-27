import candidateData from '@/knowledge-base/candidate.json';
import educationData from '@/knowledge-base/education.json';
import experienceData from '@/knowledge-base/experience.json';
import projectsData from '@/knowledge-base/projects.json';
import certsData from '@/knowledge-base/certifications.json';

import { Candidate, Project, EducationItem, ExperienceItem, Certification } from '@/types';

export type ResumeRoleProfile = 'AIML' | 'DATA_ANALYST' | 'AI_OCR' | 'FULLSTACK';

export interface TailoredResume {
  profileTitle: string;
  summary: string;
  topSkills: string[];
  keyProjects: Project[];
  education: EducationItem[];
  experience: ExperienceItem[];
  certifications: Certification[];
}

export interface ResumeDataOverride {
  candidate?: Candidate;
  projects?: Project[];
  education?: EducationItem[];
  experience?: ExperienceItem[];
  certifications?: Certification[];
}

export class ResumeService {
  public static getTailoredResume(role: ResumeRoleProfile, overrides?: ResumeDataOverride): TailoredResume {
    const candidate = overrides?.candidate ?? (candidateData as unknown as Candidate);
    const allProjects = overrides?.projects ?? ((projectsData as unknown) as Project[]);
    const allEducation = overrides?.education ?? ((educationData as unknown) as EducationItem[]);
    const allExperience = overrides?.experience ?? ((experienceData as unknown) as ExperienceItem[]);
    const allCerts = overrides?.certifications ?? ((certsData as unknown) as Certification[]);

    const defaultRoleData = {
      AIML: {
        profileTitle: 'AI / Generative AI Engineer Resume',
        summary: `${candidate.fullName} — AI Engineer specializing in RAG architectures, LangChain, FAISS, and agentic workflows (LangGraph & CrewAI) alongside machine learning, feature engineering, and LLMs.`,
        topSkills: ['Generative AI & Agentic AI', 'LangGraph & CrewAI', 'MCP (Model Context Protocol)', 'RAG (LangChain & FAISS)', 'Local LLMs (Ollama) & Groq', 'Python & FastAPI'],
      },
      DATA_ANALYST: {
        profileTitle: 'Data Analyst Specialist Resume',
        summary: `${candidate.fullName} — Data Analyst proficient in exploratory data analysis (EDA), statistical analysis, performance pattern isolation, and visualization across Python, SQL, Matplotlib, Seaborn, Tableau, and Power BI.`,
        topSkills: ['Python (Pandas / NumPy)', 'SQL (PostgreSQL / MySQL)', 'Exploratory Data Analysis (EDA)', 'Statistical Analysis', 'Data Visualization', 'Tableau & Power BI'],
      },
      AI_OCR: {
        profileTitle: 'Document Intelligence & Voice AI Engineer Resume',
        summary: `${candidate.fullName} — AI Engineer specializing in production document-intelligence pipelines (PaddleOCR, FastAPI, Ollama), real-time speech systems (Pipecat, LiveKit, ElevenLabs), and MCP business automation.`,
        topSkills: ['Document Intelligence & OCR', 'PaddleOCR', 'Local LLMs (Ollama)', 'FastAPI & Pydantic', 'Real-Time Voice AI (Pipecat, LiveKit)', 'MCP Automation'],
      },
      FULLSTACK: {
        profileTitle: 'AI / Generative AI Engineer Resume',
        summary: candidate.bio,
        topSkills: ['Python & SQL', 'LangChain & LangGraph', 'MCP & Agent Orchestration', 'RAG & Vector Databases', 'FastAPI & REST APIs', 'Data Science & Machine Learning'],
      },
    } as const;

    const roleData = defaultRoleData[role];
    const profileTitle = candidate.resumeTitle || roleData.profileTitle;
    const summary = candidate.resumeSummary || roleData.summary;
    const topSkills = (candidate.resumeSkills && candidate.resumeSkills.length > 0 ? candidate.resumeSkills : [...roleData.topSkills]) as string[];

    switch (role) {
      case 'AIML':
        return {
          profileTitle,
          summary,
          topSkills,
          keyProjects: allProjects,
          education: allEducation,
          experience: allExperience,
          certifications: allCerts,
        };
      case 'DATA_ANALYST':
        return {
          profileTitle,
          summary,
          topSkills,
          keyProjects: allProjects,
          education: allEducation,
          experience: allExperience,
          certifications: allCerts,
        };
      case 'AI_OCR':
        return {
          profileTitle,
          summary,
          topSkills,
          keyProjects: allProjects,
          education: allEducation,
          experience: allExperience,
          certifications: allCerts,
        };
      case 'FULLSTACK':
      default:
        return {
          profileTitle,
          summary,
          topSkills,
          keyProjects: allProjects,
          education: allEducation,
          experience: allExperience,
          certifications: allCerts,
        };
    }
  }
}
