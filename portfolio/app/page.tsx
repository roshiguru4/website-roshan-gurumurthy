import {
  Hero,
  Section,
  ExperienceItem,
  ProjectItem,
  EducationBlock,
  SkillsSpec,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
      <Hero />

      <Section label="01" title="Experience">
        <ExperienceItem
          role="IT & Digital Intern"
          org="Schaeffler Group"
          location="Fort Mill, SC"
          dates="May 2026 — Aug. 2026"
          bullets={[
            "Extended the Genie Search RAG pipeline by migrating the document parser from Docling to MinerU, processing 4,000+ engineering documents across Azure Blob Storage at a 93.1% parse success rate.",
            "Rebuilt the end-to-end document ingestion pipeline across the osparser and aiaugment services, converting raw engineering files to enriched markdown on AKS-orchestrated microservices.",
            "Proposed and prototyped an adaptive chunking strategy for document embeddings, projecting a 5% improvement in retrieval accuracy across the Azure AI Search pipeline.",
          ]}
          tech={["MinerU", "Azure Blob Storage", "AKS", "Azure AI Search", "RAG"]}
        />
        <ExperienceItem
          role="Undergraduate Research Assistant — Human-AI Interaction"
          org="WashU CSE, Chien-Ju Ho Lab"
          location="St. Louis, MO"
          dates="Aug. 2025 — Present"
          bullets={[
            "Built and deployed a between-subjects behavioral experiment measuring decision disengagement under varying AI control conditions, enabling data collection across 150+ participants.",
            "Built a Python ETL pipeline transforming JSON telemetry into trial-level features for mixed-effects modeling, cutting manual processing across 150+ sessions.",
          ]}
          tech={["Python", "HTML/JS", "ETL", "Statistics"]}
        />
        <ExperienceItem
          role="Teaching Assistant — Intro to Computer Science (Java)"
          org="WashU CSE"
          location="St. Louis, MO"
          dates="Aug. 2025 — Present"
          bullets={[
            "Provided coding feedback on 20+ Java submissions weekly and resolved 15+ debugging issues per session covering OOP design, recursion, and edge cases.",
          ]}
          tech={["Java", "OOP"]}
        />
      </Section>

      <Section label="02" title="Projects">
        <ProjectItem
          name="embcache"
          tagline="A drop-in caching layer for text embeddings that proves its own savings."
          description="Wrap any embedding function; identical text returns a cached vector instantly and for free. Tracks calls, tokens, and dollars saved with model-aware keys and float32-packed storage."
          tech={["Python", "SQLite", "Redis"]}
          link="https://github.com/roshiguru4/embcache"
          linkLabel="GitHub"
        />
        <ProjectItem
          name="Nephly — KidneyX EMPOWER Challenge"
          tagline="An AI donor navigation platform triaging users into eligibility pathways and nephrologist referrals."
          description="Built the RAG pipeline and Excel parsing logic, structuring 400+ physician-reviewed Q&A entries across 15 categories, plus a five-stage system architecture from intake to warm handoff."
          tech={["React", "Node.js", "Azure OpenAI", "LangChain"]}
          link="#"
          linkLabel="Demo"
        />
        <ProjectItem
          name="S&P 500 Stock Risk Classifier"
          tagline="Buy / hold / sell signal classification on engineered risk features."
          description="Trained a random forest on 9 engineered features (Sharpe ratio, beta, 30-day volatility) reaching 87.7% accuracy, benchmarked against a TensorFlow/Keras neural classifier. Automated data ingestion for 500+ tickers."
          tech={["Scikit-learn", "TensorFlow", "Pandas", "SQL"]}
          link="https://github.com/roshiguru4"
          linkLabel="GitHub"
        />
      </Section>

      <Section label="03" title="Education">
        <EducationBlock />
      </Section>

      <Section label="04" title="Stack">
        <SkillsSpec />
      </Section>

      <Footer />
    </main>
  );
}
