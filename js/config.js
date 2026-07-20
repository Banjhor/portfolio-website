/* ============================================================
   SITE CONFIG — edit everything here.
   This one file feeds the name, socials, hero, skills, and
   project cards on every page. You should rarely need to touch
   raw HTML except to add/remove whole cards.
   ============================================================ */

const SITE_CONFIG = {

  // ---- Identity ----------------------------------------------------
  name: {
    first: "Adebanjo",
    middle: "Johnson",
    last: "Adegbemiro"
  },
  role: "Data Analyst & Aspiring Data Engineer",
  tagline: "I turn raw, messy data into pipelines, dashboards and queries that hold up in production.",
  location: "Lagos, Nigeria",
  email: "youremail@example.com",

  // Swap this for your own photo: drop a file in /assets (e.g. assets/profile.jpg)
  // and change the path below. Keep it a portrait, decent resolution — it sits
  // faint/blended behind the hero text, so busy backgrounds in the photo work fine.
  heroImage: "assets/profile-placeholder.svg",

  // ---- Socials (leave blank "" to hide the icon) --------------------
  socials: {
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
    twitter: "",
    whatsapp: ""
  },

  // ---- Skills / stack -------------------------------------------------
  // Set "link" to point a skill at one of the big sections (e.g. "#sql")
  // that already showcases real work. Leave "link" out (or "") and it
  // automatically gets its own card in the "More about my stack" section
  // instead — add bullet points under "highlights" to fill that card in.
  // New skill, no matching section yet? Just add it here with no link —
  // it'll never be a dead click.
  skills: [
    { name: "SQL", detail: "Query design, window functions, performance tuning", link: "#sql" },
    { name: "Power BI", detail: "Data models, DAX, dashboards for business teams", link: "#powerbi" },
    { name: "Python", detail: "Pandas, automation scripts, exploratory analysis", link: "#python" },
    { name: "Excel", detail: "Advanced formulas, pivot tables, financial models", link: "#excel" },
    { name: "R", detail: "Statistical analysis and reporting", link: "#python" },
    { name: "Power Automate", detail: "Workflow automation, data refresh triggers", highlights: [] }
  ],

  // ---- Contact / hire me ------------------------------------------
  contact: {
    heading: "Let's build something",
    blurb: "Have a project, a dashboard, or a data problem you need help with? Send a quick message and I'll get back to you."
  },

  // ---- Power BI projects ------------------------------------------
  // To embed a report: open it in Power BI Service > File > Publish to web,
  // copy the iframe "src" URL, and paste it into embedUrl below.
  // Prefer a plain screenshot instead? Drop an image in /assets and set
  // "image" — it'll show in a clean square thumbnail instead of an iframe.
  // "details" is optional — add bullet points for a fuller breakdown of the
  // project (what you did, tools used, outcome). It shows behind a
  // "Read more" toggle so the card stays clean until someone clicks it.
  powerbiProjects: [
    {
      title: "Sales Performance Dashboard",
      description: "Regional sales tracking with YoY comparisons and target drill-downs.",
      tags: ["Power BI", "DAX", "Sales"],
      embedUrl: "",
      image: "",
      details: [
        "Connected to the company's SQL Server sales database and modeled a star schema across 4 fact tables",
        "Built DAX measures for YoY growth, rolling 90-day trend, and target attainment by region",
        "Added row-level security so regional managers only see their own territory",
        "Refreshes nightly via a scheduled Power Automate flow"
      ]
    },
    {
      title: "HR Attrition Analysis",
      description: "Workforce turnover trends segmented by department and tenure.",
      tags: ["Power BI", "HR Analytics"],
      embedUrl: "",
      image: ""
    }
  ],

  // ---- Excel workflow walkthroughs ------------------------------------
  // Each project is a numbered strip of screenshots. Drop images in /assets
  // and set "src" for each step; leave it blank and that step shows a
  // placeholder until you add one. Click any step on the live site to view
  // it larger with a caption.
  excelProjects: [
    {
      title: "Monthly Budget Model — Build Walkthrough",
      description: "How the rolling budget model comes together, from raw export to finished dashboard.",
      tags: ["Excel", "Financial Modeling"],
      images: [
        { src: "", caption: "Step 1 — raw data import" },
        { src: "", caption: "Step 2 — pivot table setup" },
        { src: "", caption: "Step 3 — scenario toggle formulas" },
        { src: "", caption: "Step 4 — chart output" },
        { src: "", caption: "Step 5 — final dashboard view" }
      ]
    },
    {
      title: "Inventory Reconciliation Sheet",
      description: "Cleaning and matching two inventory exports before they feed the weekly report.",
      tags: ["Excel", "Data Cleaning"],
      images: [
        { src: "", caption: "Step 1 — raw export side by side" },
        { src: "", caption: "Step 2 — VLOOKUP match check" },
        { src: "", caption: "Step 3 — conditional formatting flags" },
        { src: "", caption: "Step 4 — reconciled summary" }
      ]
    }
  ],

  // ---- SQL snippets --------------------------------------------------
  sqlSnippets: [
    {
      title: "Rolling 30-day revenue",
      description: "Window function to compute a rolling revenue total per day.",
      language: "sql",
      code:
`SELECT
  order_date,
  SUM(revenue) OVER (
    ORDER BY order_date
    ROWS BETWEEN 29 PRECEDING AND CURRENT ROW
  ) AS rolling_30d_revenue
FROM daily_sales
ORDER BY order_date;`
    },
    {
      title: "Customer cohort retention",
      description: "CTE-based cohort table for month-over-month retention.",
      language: "sql",
      code:
`WITH first_order AS (
  SELECT customer_id, MIN(order_date) AS cohort_month
  FROM orders
  GROUP BY customer_id
)
SELECT
  DATE_TRUNC('month', f.cohort_month) AS cohort,
  DATE_TRUNC('month', o.order_date)   AS order_month,
  COUNT(DISTINCT o.customer_id)       AS active_customers
FROM orders o
JOIN first_order f USING (customer_id)
GROUP BY 1, 2
ORDER BY 1, 2;`
    }
  ],

  // ---- Python / notebook projects -------------------------------------
  // Convert a notebook with:  jupyter nbconvert --to html your_notebook.ipynb
  // then drop the resulting .html into /assets/notebooks and point notebookUrl at it.
  // Or set "image" to a screenshot path for a simple square thumbnail instead.
  pythonProjects: [
    {
      title: "Customer Churn Prediction",
      description: "Logistic regression + feature engineering pipeline on telecom churn data.",
      tags: ["Python", "scikit-learn", "Pandas"],
      notebookUrl: "",
      githubUrl: "",
      image: ""
    },
    {
      title: "Automated Data Cleaning Pipeline",
      description: "Reusable script for standardising messy Excel exports before loading to SQL.",
      tags: ["Python", "Pandas", "ETL"],
      notebookUrl: "",
      githubUrl: "",
      image: ""
    }
  ],

  // ---- CV content -------------------------------------------------
  // Drop your real CV PDF into /assets and point cvPdfUrl at it, e.g.
  // "assets/adebanjo-cv.pdf" — it'll show embedded on the page with a
  // download button. Leave it blank and only the text version below shows.
  cvPdfUrl: "",

  cv: {
    summary: "Business Data Analyst & Data Engineer with experience turning operational data into reporting systems and decision-ready dashboards across SQL, Power BI, Python and R.",
    experience: [
      {
        role: "Business Data Analyst",
        company: "Company Name",
        period: "2023 — Present",
        points: [
          "Built and maintained Power BI dashboards used by leadership for weekly reporting",
          "Wrote and optimised SQL queries against production databases",
          "Automated recurring reports with Power Automate, cutting manual reporting time"
        ]
      }
    ],
    education: [
      { degree: "Degree name", school: "Institution", period: "20XX — 20XX" }
    ],
    certifications: [
      "Certification name — Issuer, Year"
    ]
  }
};
