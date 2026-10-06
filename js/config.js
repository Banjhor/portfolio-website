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
    { name: "Automation", detail: "Workflow automation across Power Automate, n8n, and similar tools", link: "#automate" }
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
  "title": "GeoPay Executive Analytics Dashboard",
  "description": "End-to-end fintech analytics for a Nigerian fintech company — customer lifecycle, GTV, fee revenue, fraud, and support operations across 2022–2026.",
  "tags": ["Power BI", "DAX", "Python", "Star Schema", "Fintech"],
  "embedUrl": "https://app.powerbi.com/view?r=eyJrIjoiNjNlZDEyM2YtMWRlNC00Mzg4LTkwOTgtN2I4N2Q3NGQwYTFjIiwidCI6IjBmYmYzYTYzLWIyZjMtNGIxZC1hN2Y1LTgxMTY5ZjgzNGI4YSJ9&embedImagePlaceholder=true",
  "image": "",
  "details": [
    "Designed a star schema in Power BI (FactTransactions, FactSupportTickets, DimCustomer, DimAccount, DimCard, DateTable) with inactive date relationships and USERELATIONSHIP for signup vs transaction time intelligence",
    "Prepared and cleaned a 1.4M+ row fintech dataset using Python, covering customers, accounts, cards, transactions, and support tickets with structured relationships across the data model",
    "Built a 4-page report: Executive Overview, Customer Insights, Transactions & Revenue, Support & Operations — with synced Year/State/Tier slicers, KPI comparisons, and operational visuals across category, channel, and agent performance",
    "Developed DAX measures for GTV, fee revenue, fraud rate, KYC verification, HNI share, resolution rate, CSAT, and historical performance comparisons",
    "Analyzed customer lifecycle, transaction performance, revenue, fraud, KYC, and support operations to surface actionable business insights across the fintech ecosystem"
  ]
},
   {
  "title": "Nexora Retail Analytics Dashboard",
  "description": "End-to-end retail analytics for a  global retailer — sales performance, product intelligence, customer behaviour, digital channels, geography, and fulfilment.",
  "tags": ["Power BI", "DAX", "Python", "Retail Analytics", "Data Modeling"],
  "embedUrl": "https://app.powerbi.com/view?r=eyJrIjoiMzM2YmM2NjctOWU0Mi00N2NlLWExOWUtNzI4NDgyYzhhNGI0IiwidCI6IjBmYmYzYTYzLWIyZjMtNGIxZC1hN2Y1LTgxMTY5ZjgzNGI4YSJ9&pageName=71b15c450e49ecc02e50",
  "image": "",
  "details": [
    "Built an interactive retail analytics solution covering sales, products, customers, digital channels, geography, and fulfilment across 2022–2026",
    "Implemented dynamic previous-period comparisons that adapt to the selected date range, allowing users to evaluate changes in revenue, units sold, customers, average unit price, and revenue per buyer",
    "Analyzed product and category performance across Electronics, Fashion, Home, Beauty, Grocery, and Sports, with product-level rankings and category contribution analysis",
    "Integrated customer, channel, and geographic analysis covering repeat purchasing, demographics, Web/App/Marketplace performance, and revenue across international markets",
    "Added fulfilment analysis to track average shipping days and fulfilment lag over time, translating the analysis into business insights around volume-driven growth, category concentration, and operational performance"
  ]
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
    title: "Staff Onboarding & Offboarding Automation",
    description: "Replaced a manual, Excel-only process HR used to track staff onboarding and offboarding with a Power Automate flow feeding a live Power BI dataset. HR submits a single Microsoft Form for either a new starter or a leaver, and the flow branches on that choice. Before writing anything, it checks 'List rows present in a table' so a row is only added if the person isn't already active, and offboarding removes them instead of creating a duplicate record. This also makes sure no one can be marked active on both sides at once. The result is written to an Active Staff Database tagged with each person's category and referral code, which the data team queries directly into Power BI to track headcount, sales performance, and KPIs by role, covering Normal staff, DSA, BDM, and Campus Ambassador.",
    tags: ["Power Automate", "HR Automation", "SharePoint", "Power BI", "Process Improvement"],
    images: [
      { src: "assets/Power Automate/Onboarding and Offboarding/solution overview.png", caption: "Solution overview — from HR form submission to Power BI KPI dashboards" },
      { src: "assets/Power Automate/Onboarding and Offboarding/Trigger.png", caption: "Trigger — Staff Details form: onboarding or offboarding" },
      { src: "assets/Power Automate/Onboarding and Offboarding/Onboarding.png", caption: "Onboarding details captured — name, referral code, category" },
      { src: "assets/Power Automate/Onboarding and Offboarding/Offboarding.png", caption: "Offboarding details captured — name, referral code, category" },
      { src: "assets/Power Automate/Onboarding and Offboarding/Logic and Flow.png", caption: "Flow logic: 'List rows present in a table' checked before add or remove, preventing duplicate or conflicting staff records" },
      { src: "assets/Power Automate/Onboarding and Offboarding/powerBI schema link.png", caption: "Power BI data model — staff, category, and referral tables connected for KPI reporting" }
    ],
  },
{
  title: "Incident Reporting & Escalation Automation",

  description: "Built an end-to-end incident reporting and escalation workflow using Microsoft Forms, Power Automate, SharePoint, and Outlook. Employees submit incidents through a structured Microsoft Form capturing the incident type, reporter severity, department, description, affected system or location, and date identified. Power Automate retrieves each submission, generates a unique Incident ID, and creates a structured record in a central SharePoint incident register. The flow then applies conditional routing to distinguish security or high-priority incidents from standard reports, automatically sending the appropriate email notification for faster escalation. SharePoint acts as the system of record, separating employee-reported information from administrative fields used to manage status, severity, assignment, team ownership, and resolution. This gives administrators a central workspace for progressing each ticket while maintaining a traceable incident record from initial submission through review and resolution.",

  tags: [
    "Power Automate",
    "Microsoft Forms",
    "SharePoint Lists",
    "SharePoint",
    "Outlook",
    "Workflow Automation",
    "Incident Management"
  ],
  images: [
    {src: "assets/Power Automate/Incident reports form/01_form_intake.png",
      caption: "Incident intake — structured Microsoft Form used by employees to report incidents and provide the information required for initial triage"
    },
    {src: "assets/Power Automate/Incident reports form/02_power_automate.png",
      caption: "Automated workflow — response retrieval, Incident ID generation, SharePoint record creation, conditional priority routing, and email notification"
    },
    {src: "assets/Power Automate/Incident reports form/03_sharepoint_system_of_record.png",
      caption: "Central incident register — SharePoint stores each incident as a structured record for tracking and administration"
    },
    {src: "assets/Power Automate/Incident reports form/04_email_notifications.png",
      caption: "Automated notifications — standard incident emails and higher-priority security alerts are routed according to workflow conditions"
    },
    {src: "assets/Power Automate/Incident reports form/05_admin_ticket_management.png",
      caption: "Administrative ticket management — incident details are reviewed and managed through the SharePoint record"
    }
  ]
},
{
  title: "Inventory, Production & Sales Management System",

  description: "Designed and built an automated inventory and production management system connecting raw-material movements, production activity, finished goods, and sales within a single operational workflow. The solution maintains controlled master data, records inventory movements through structured transaction logs, provides batch-level production traceability, monitors current stock against defined reorder levels, and automatically alerts relevant teams when stock requires attention. The system was designed to improve inventory visibility, production accountability, and operational control while reducing reliance on manual stock reconciliation.",

  tags: [
    "Google Sheets",
    "Google Apps Script",
    "JavaScript",
    "Inventory Management",
    "Production Automation",
    "Data Modelling",
    "Process Improvement",
    "Process Automation"
  ],

  images: [
    {
      src: "assets/Googlesheet Automation/Inventory Management System/Interface.png",
      caption: "Process overview — from master data and raw-material movements through production, finished goods, sales, and automated stock monitoring"
    },
    {
      src: "assets/Googlesheet Automation/Inventory Management System/01_raw_material_setup_operations.png",
      caption: "Raw material setup and operations — controlled material master feeding stock-in, stock-out, and production workflows"
    },
    {
      src: "assets/Googlesheet Automation/Inventory Management System/02_inventory_transactions.png",
      caption: "Inventory transaction ledger — every stock movement recorded with quantity, transaction type, resulting balance, and production reference where applicable"
    },
    {
      src: "assets/Googlesheet Automation/Inventory Management System/03_current_inventory.png",
      caption: "Current inventory position — transaction movements consolidated into current stock and evaluated against defined reorder levels"
    },
    {
      src: "assets/Googlesheet Automation/Inventory Management System/04_production_traceability.png",
      caption: "Production traceability — shared Production/Batch ID links multiple raw-material consumption transactions to the finished product and quantity recorded in the Production Log"
    },
    {
      src: "assets/Googlesheet Automation/Inventory Management System/05_finished_goods_master.png",
      caption: "Finished Goods Master — controlled product records determine the active products available for production"
    },
    {
      src: "assets/Googlesheet Automation/Inventory Management System/06_sales_operations.png",
      caption: "Sales operations — finished goods received into sales inventory and dispatched through a controlled sales workflow"
    },
    {
      src: "assets/Googlesheet Automation/Inventory Management System/07_automated_stock_alerts.png",
      caption: "Automated inventory monitoring — low-stock and out-of-stock conditions trigger email alerts for operational follow-up"
    }
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
  cvPdfUrl: "assets/Adebanjo_Adegbemiro_Data_Analyst_Resume.pdf" 
};
