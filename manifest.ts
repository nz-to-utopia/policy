export interface DocSection {
  title: string;
  slug: string;
  file: string;
  description?: string;
  status: "draft" | "review" | "published";
  children?: DocSection[];
}

export const manifest: DocSection[] = [
  {
    title: "Introduction",
    slug: "introduction",
    file: "introduction/index.mdx",
    description: "Vision, purpose, and how this document works",
    status: "draft",
  },
  {
    title: "Economic Landscape",
    slug: "economic-landscape",
    file: "economic-landscape/index.mdx",
    description: "New Zealand's current industries and their AI exposure",
    status: "draft",
    children: [
      { title: "Agriculture", slug: "agriculture", file: "economic-landscape/agriculture.mdx", status: "draft" },
      { title: "Technology", slug: "technology", file: "economic-landscape/technology.mdx", status: "draft" },
      { title: "Services", slug: "services", file: "economic-landscape/services.mdx", status: "draft" },
      { title: "Manufacturing", slug: "manufacturing", file: "economic-landscape/manufacturing.mdx", status: "draft" },
      { title: "Tourism", slug: "tourism", file: "economic-landscape/tourism.mdx", status: "draft" },
      { title: "Creative Industries", slug: "creative", file: "economic-landscape/creative.mdx", status: "draft" },
    ],
  },
  {
    title: "AI Impact Assessment",
    slug: "ai-impact-assessment",
    file: "ai-impact-assessment/index.mdx",
    description: "Which sectors and roles are most affected, and when",
    status: "draft",
    children: [
      { title: "Job Displacement", slug: "job-displacement", file: "ai-impact-assessment/job-displacement.mdx", status: "draft" },
      { title: "New Opportunities", slug: "new-opportunities", file: "ai-impact-assessment/new-opportunities.mdx", status: "draft" },
      { title: "Timeline", slug: "timeline", file: "ai-impact-assessment/timeline.mdx", status: "draft" },
    ],
  },
  {
    title: "AI Crisis Resilience",
    slug: "ai-crisis-resilience",
    file: "ai-crisis-resilience/index.mdx",
    description: "How sovereign AI infrastructure can prevent societal collapse",
    status: "draft",
  },
  {
    title: "Transition Strategies",
    slug: "transition-strategies",
    file: "transition-strategies/index.mdx",
    description: "Sector-by-sector adaptation plans",
    status: "draft",
    children: [
      { title: "Industry Plans", slug: "industry-plans", file: "transition-strategies/industry-plans.mdx", status: "draft" },
      { title: "Business Support", slug: "business-support", file: "transition-strategies/business-support.mdx", status: "draft" },
      { title: "Innovation Policy", slug: "innovation-policy", file: "transition-strategies/innovation-policy.mdx", status: "draft" },
    ],
  },
  {
    title: "Education & Reskilling",
    slug: "education-and-reskilling",
    file: "education-and-reskilling/index.mdx",
    description: "Preparing the workforce for an AI-transformed economy",
    status: "draft",
    children: [
      { title: "Primary & Secondary", slug: "primary-secondary", file: "education-and-reskilling/primary-secondary.mdx", status: "draft" },
      { title: "Tertiary", slug: "tertiary", file: "education-and-reskilling/tertiary.mdx", status: "draft" },
      { title: "Vocational Training", slug: "vocational", file: "education-and-reskilling/vocational.mdx", status: "draft" },
      { title: "Lifelong Learning", slug: "lifelong-learning", file: "education-and-reskilling/lifelong-learning.mdx", status: "draft" },
    ],
  },
  {
    title: "Social Safety Nets",
    slug: "social-safety-nets",
    file: "social-safety-nets/index.mdx",
    description: "Income support, healthcare, housing, and wellbeing",
    status: "draft",
    children: [
      { title: "Income Support", slug: "income-support", file: "social-safety-nets/income-support.mdx", status: "draft" },
      { title: "Healthcare", slug: "healthcare", file: "social-safety-nets/healthcare.mdx", status: "draft" },
      { title: "Housing", slug: "housing", file: "social-safety-nets/housing.mdx", status: "draft" },
      { title: "Mental Health", slug: "mental-health", file: "social-safety-nets/mental-health.mdx", status: "draft" },
    ],
  },
  {
    title: "Governance & Regulation",
    slug: "governance-and-regulation",
    file: "governance-and-regulation/index.mdx",
    description: "AI ethics, data sovereignty, and international cooperation",
    status: "draft",
    children: [
      { title: "AI Ethics", slug: "ai-ethics", file: "governance-and-regulation/ai-ethics.mdx", status: "draft" },
      { title: "Data Sovereignty", slug: "data-sovereignty", file: "governance-and-regulation/data-sovereignty.mdx", status: "draft" },
      { title: "International Cooperation", slug: "international", file: "governance-and-regulation/international.mdx", status: "draft" },
    ],
  },
  {
    title: "Implementation Roadmap",
    slug: "implementation-roadmap",
    file: "implementation-roadmap/index.mdx",
    description: "Phased actions from 2026 through 2035",
    status: "draft",
    children: [
      { title: "Year 1–2 (2026–2027)", slug: "year-1-2", file: "implementation-roadmap/year-1-2.mdx", status: "draft" },
      { title: "Year 3–5 (2028–2030)", slug: "year-3-5", file: "implementation-roadmap/year-3-5.mdx", status: "draft" },
      { title: "Year 5–10 (2031–2035)", slug: "year-5-10", file: "implementation-roadmap/year-5-10.mdx", status: "draft" },
    ],
  },
  {
    title: "Appendices",
    slug: "appendices",
    file: "appendices/index.mdx",
    description: "Glossary, methodology, and references",
    status: "draft",
    children: [
      { title: "Glossary", slug: "glossary", file: "appendices/glossary.mdx", status: "draft" },
      { title: "Methodology", slug: "methodology", file: "appendices/methodology.mdx", status: "draft" },
    ],
  },
];
