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
  email: "adebanjojohnson1@gmail.com",

  // Swap this for your own photo: drop a file in /assets (e.g. assets/profile.jpg)
  // and change the path below. Keep it a portrait, decent resolution — it sits
  // faint/blended behind the hero text, so busy backgrounds in the photo work fine.
  heroImage: "assets/profile-placeholder.svg",

  // ---- Socials (leave blank "" to hide the icon) --------------------
  socials: {
    linkedin: "https://linkedin.com/in/adebanjo-adegbemiro",
    github: "https://github.com/Banjhor",
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
    { name: "Power Automate", detail: "Workflow automation, data refresh triggers", link: "#automate" }
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
    }
  ],

  // ---- Power Automate flows ------------------------------------------
  // Same pattern as Excel: a numbered strip of screenshots per flow, each
  // with a caption. Drop screenshots in /assets and set "src" for each
  // step; leave it blank and that step shows a placeholder until you add
  // one. Click any step on the live site to view it larger.
  automateProjects: [
    {
      title: "Invoice Approval Automation",
      description: "Auto-routes vendor invoices over a set amount to the right approver and logs the outcome.",
      tags: ["Power Automate", "Approvals"],
      images: [
        { src: "", caption: "Trigger — new invoice email" },
        { src: "", caption: "Condition — amount check" },
        { src: "", caption: "Approval sent to manager" },
        { src: "", caption: "Logged to SharePoint" }
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
      title: "Cross-System Payment Reconciliation & Churn Risk Detection",
description: "Combines two payment systems (a legacy schema and its replacement) into one normalized dataset, resolving mismatched status values and a collation conflict, then flags customers who haven't done any transaction since they last had a failed transaction.",
language: "sql",
      code:
`-- Identify customers whose most recent bill payment attempt failed,
-- and who have made no successful payment since.
-- Data spans two source systems (a legacy schema and its replacement),
-- combined here into a single normalized view.

WITH unified_payments AS (

    -- Source 1: current payment system
    -- Status values here use a different vocabulary than the legacy system,
    -- so they're normalized down to just 'paid' / 'failed'.
    SELECT 
        email COLLATE utf8mb4_unicode_ci AS email, 
        phone_no COLLATE utf8mb4_unicode_ci AS phone_no, 
        created_at, 
        amount,
        CASE 
            WHEN status IN ('Successful', 'SUCCESS') THEN 'paid'
            ELSE 'failed'
        END AS transaction_status
    FROM current_system.payment_transactions

    UNION ALL

    -- Source 2: legacy payment system (retired, no longer receiving new data)
    -- Collation differed from the current system, which caused a UNION error
    -- until explicitly aligned via COLLATE above.
    SELECT 
        customer_email AS email, 
        customer_phone_no AS phone_no, 
        created_at, 
        amount,
        CASE 
            WHEN status IN ('paid', 'passed') THEN 'paid'
            ELSE 'failed'
        END AS transaction_status
    FROM legacy_system.bill_payments
),

last_failed_transaction AS (
    -- Find each customer's most recent failed payment
    SELECT 
        email,
        phone_no,
        MAX(created_at) AS last_failed_date
    FROM unified_payments
    WHERE transaction_status = 'failed'
    GROUP BY email, phone_no
)

SELECT 
    ft.email,
    ft.phone_no,
    ft.last_failed_date,
    up.amount,
    CASE 
        WHEN ft.last_failed_date >= '2026-01-01' AND ft.last_failed_date < '2026-04-01' THEN 'Q1'
        WHEN ft.last_failed_date >= '2026-04-01' AND ft.last_failed_date < '2026-07-01' THEN 'Q2'
    END AS quarter
FROM last_failed_transaction ft
JOIN unified_payments up 
    ON up.email = ft.email 
   AND up.phone_no = ft.phone_no 
   AND up.created_at = ft.last_failed_date
   AND up.transaction_status = 'failed'
WHERE ft.last_failed_date >= '2026-01-01' 
  AND ft.last_failed_date < '2026-07-01'
  AND NOT EXISTS (
        -- Exclude anyone who made a successful payment after their failure
        SELECT 1 
        FROM unified_payments up2
        WHERE up2.email = ft.email 
          AND up2.phone_no = ft.phone_no 
          AND up2.transaction_status = 'paid'
          AND up2.created_at > ft.last_failed_date
  );`
    },
    
    {
  title: "Churn Detection for Retargeting",
  description: "Flags verified users inactive 90+ days, bucketed by inactivity window, for marketing retargeting.",
  language: "sql",
  code:
`SELECT 
  u.id,
  u.first_name,
  u.last_name,
  u.email,
  u.phone_number,
  MAX(t.created_at) AS last_transaction_date,
  DATEDIFF(NOW(), MAX(t.created_at)) AS days_inactive,
  CASE
    WHEN DATEDIFF(NOW(), MAX(t.created_at)) BETWEEN 90 AND 180 THEN '3-6 Months'
    WHEN DATEDIFF(NOW(), MAX(t.created_at)) BETWEEN 181 AND 270 THEN '6-9 Months'
    WHEN DATEDIFF(NOW(), MAX(t.created_at)) BETWEEN 271 AND 365 THEN '9-12 Months'
    WHEN DATEDIFF(NOW(), MAX(t.created_at)) > 365 THEN 'Above 1 Year'
  END AS churn_category
FROM users u                                   -- dimension table: one row per user
JOIN user_profiles p ON u.id = p.user_id        -- dimension table: KYC/verification attributes
JOIN accounts a ON u.id = a.user_id             -- bridge table: links a user to their account(s)
  AND a.account_type = 'primary'
JOIN transactions t ON a.id = t.account_id      -- fact table: one row per transaction event
WHERE 
  u.email_verified_at IS NOT NULL
  AND p.identity_verified = 1
GROUP BY u.id, u.first_name, u.last_name, u.email, u.phone_number
HAVING DATEDIFF(NOW(), MAX(t.created_at)) >= 90
ORDER BY days_inactive DESC;`
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
    },
    {
  title: "Health Care Analysis",
  description: "Exploratory analysis of health outcomes data.",
  tags: ["R", "R Markdown"],
  notebookUrl: "assets/notebooks/Health-Analysis.html",
  githubUrl: "",
  image: ""
}
  ],

  // ---- CV ---------------------------------------------------------
  // Drop your real CV PDF into /assets (e.g. assets/adebanjo-cv.pdf, no
  // need to repeat "assets" in the filename) and point cvPdfUrl at it.
  // The hero's button and the CV section both use this — leave it blank
  // and the CV section shows a placeholder until you add one.
  cvPdfUrl: "assets/Adebanjo_ Adegbemiro_ Data_analyst_Resume.pdf"
};
