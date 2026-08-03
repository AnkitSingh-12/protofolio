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
        profileTitle: 'AI & Machine Learning Engineer Resume',
        summary: `${candidate.fullName} — AI Engineer specializing in RAG architectures, LangChain, FAISS, and agentic workflows (LangGraph & CrewAI) alongside machine learning regressions and classifications.`,
        topSkills: ['Agentic AI', 'RAG Architectures', 'LangChain', 'FAISS', 'LangGraph & CrewAI', 'Python ML (Scikit-Learn)'],
      },
      DATA_ANALYST: {
        profileTitle: 'Data Analyst & Specialist Resume',
        summary: `${candidate.fullName} — Experienced Data Analyst skilled in exploratory data analysis (EDA), statistical comparisons, and data visualization (Matplotlib, Seaborn, Tableau, Power BI).`,
        topSkills: ['Python (Pandas / NumPy)', 'SQL (PostgreSQL / MySQL)', 'Exploratory Data Analysis', 'Statistical Analysis', 'Data Visualization', 'Tableau & Power BI'],
      },
      AI_OCR: {
        profileTitle: 'Document AI & OCR Engineer Resume',
        summary: `${candidate.fullName} — AI Engineer specializing in local document intelligence pipelines, automating entity extraction from unstructured files via PaddleOCR, FastAPI, and local LLMs (Ollama Llama 3.2 / Phi-3).`,
        topSkills: ['PaddleOCR', 'Local LLM Inference', 'Ollama (Llama 3.2 / Phi-3)', 'FastAPI & Pydantic', 'Structured JSON Extraction', 'Data Residency Security'],
      },
      FULLSTACK: {
        profileTitle: 'Web & AI Full-Stack Developer Resume',
        summary: `${candidate.fullName} — Versatile software engineer building responsive client front-ends and robust FastAPI / Python backend web services.`,
        topSkills: ['Python', 'FastAPI', 'React 19 & Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL / MySQL'],
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
          keyProjects: allProjects.filter((p) => p.id === 'rag-qa-system' || p.id === 'laptop-price-prediction'),
          education: allEducation,
          experience: allExperience,
          certifications: allCerts,
        };
      case 'DATA_ANALYST':
        return {
          profileTitle,
          summary,
          topSkills,
          keyProjects: allProjects.filter((p) => p.id === 'laptop-price-prediction'),
          education: allEducation,
          experience: allExperience,
          certifications: allCerts,
        };
      case 'AI_OCR':
        return {
          profileTitle,
          summary,
          topSkills,
          keyProjects: allProjects.filter((p) => p.id === 'worksbuddy-ocr'),
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

