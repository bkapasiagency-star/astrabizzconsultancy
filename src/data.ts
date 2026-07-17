/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Industry, Testimonial, FAQ, ProcessStep, TrustCounter } from './types';

export const SERVICES: Service[] = [
  {
    id: 'erp',
    title: 'ERP Implementation',
    description: 'End-to-end ERP implementation designed to streamline operations, finance, inventory, production, and business processes.',
    fullDescription: 'We build unified business architectures that eliminate operational silos. Our certified ERP architects work directly with your functional heads to align inventory tracking, procurement workflows, multi-currency accounting, and shop-floor scheduling into a single pane of glass.',
    includes: ['Implementation', 'Migration', 'Customization', 'Training', 'Support'],
    icon: 'Briefcase'
  },
  {
    id: 'crm',
    title: 'CRM Implementation',
    description: 'Help businesses improve customer relationships, automate sales pipelines, and enhance customer engagement.',
    fullDescription: 'Supercharge your revenue operations. We configure robust CRM infrastructures that map customer journeys from cold outreach to post-sale support, ensuring your sales force spends less time entering data and more time closing deals.',
    includes: ['Sales Automation', 'Lead Management', 'Customer Support', 'Marketing Automation', 'Reporting'],
    icon: 'Users'
  },
  {
    id: 'sap',
    title: 'SAP Consulting',
    description: 'Enterprise SAP advisory, migration, optimization, and system integration services to drive organizational agility.',
    fullDescription: 'Unlock the true capacity of SAP S/4HANA or Business One. We audit performance, optimize slow transaction codes, migrate on-prem modules to the secure cloud, and run customized functional training across your entire enterprise.',
    includes: ['Implementation', 'Migration', 'Optimization', 'Training', 'Support'],
    icon: 'Cpu'
  },
  {
    id: 'salesforce',
    title: 'Salesforce Consulting',
    description: 'Leverage the world\'s #1 CRM platform to unify your departments and maximize customer lifetime value.',
    fullDescription: 'Harness Salesforce Customer 360. Our specialists deliver tailored implementations of Sales, Service, and Marketing Clouds with custom Apex coding, declarative automations, and secure third-party ERP API integrations.',
    includes: ['Implementation', 'Customization', 'Automation', 'Integration', 'Support'],
    icon: 'Cloud'
  },
  {
    id: 'ai',
    title: 'AI Consulting',
    description: 'Help organizations leverage Artificial Intelligence to automate repetitive work, improve efficiency, and gain better insights.',
    fullDescription: 'Integrate intelligent workflows into daily business activities. From predictive demand forecasting to natural language processing agents and intelligent invoice scanning, we construct AI solutions that deliver immediate operational ROI.',
    includes: ['AI Process Automation', 'AI Analytics', 'Chatbots', 'Workflow Automation', 'Predictive Intelligence'],
    icon: 'Sparkles'
  },
  {
    id: 'digital-transformation',
    title: 'Digital Transformation',
    description: 'Transform traditional business units into agile, highly collaborative, digital-first organizations.',
    fullDescription: 'Overhaul legacy processes for the modern era. We draft master technology blueprints, transition physical datacenters to secure cloud platforms, and establish scalable integration buses to unite your entire IT portfolio.',
    includes: ['Digital Strategy', 'Process Automation', 'Technology Consulting', 'Cloud Adoption', 'Business Process Improvement'],
    icon: 'Zap'
  },
  {
    id: 'staffing',
    title: 'Staffing Solutions',
    description: 'Professional staffing solutions for organizations requiring highly skilled ERP, CRM, SAP, and Technology professionals.',
    fullDescription: 'Augment your internal teams with certified, vetted engineering and system administrators. We source top-tier talent for contract roles, direct hires, and project-based assignments, bypassing recruitment cycles.',
    includes: ['Contract Staffing', 'Permanent Hiring', 'Project-Based Resources', 'Technology Specialists'],
    icon: 'UserCheck',
    isNew: true,
    badge: 'New Service'
  },
  {
    id: 'system-audit',
    title: 'System Health Audit',
    description: 'A comprehensive diagnosis of your existing ERP, CRM, and enterprise systems to locate performance gaps and security risks.',
    fullDescription: 'Are your systems running slow, generating dirty data, or frustrating your staff? Our flagship Premium Service runs a deep technical probe into your configuration, custom extensions, and security profiles to design a path forward.',
    includes: [
      'Performance Bottlenecks',
      'Process Gaps',
      'Duplicate Workflows',
      'Data Issues',
      'Security Risks',
      'Integration Problems',
      'Compliance Risks'
    ],
    icon: 'ShieldCheck',
    isPremium: true,
    badge: 'Premium Service'
  }
];

export const INDUSTRIES: Industry[] = [
  {
    id: 'textile',
    name: 'Textile',
    description: 'Managing yarn counts, dyeing batches, loom optimization, and fabric shrinkage tracking requires specialized ERP integration.',
    workflows: [
      'Yarn Lot & Dyeing Batch Traceability',
      'Loom Efficiency & Maintenance Planning',
      'Multi-unit Inventory Control (Yarn to Fabric)',
      'Shrinkage & Wastage Factor Computations'
    ],
    challenges: 'Disorganized stock tracking, batch-dye variations, and poor estimation of loom scheduling lead to severe delivery delays and material waste.',
    solution: 'We deploy specialized ERP parameters that track raw fiber to finished rolls with intelligent scheduling metrics for dyeing and weaving.',
    icon: 'Layers'
  },
  {
    id: 'apparel',
    name: 'Apparel',
    description: 'Navigating style variations, complex size-color matrices, seasonal demand shifts, and production line balancing.',
    workflows: [
      'Dynamic Size-Color-Fit Matrix Management',
      'Line Balancing & Sewing Floor Tracking',
      'Bill of Materials (BOM) for Accessories & Trims',
      'Omnichannel Retail Order Synchronization'
    ],
    challenges: 'Coordinating dozens of trims, buttons, and fabric rolls across hundreds of design SKUs causes severe production logjams and stock-outs.',
    solution: 'Our CRM and ERP system configurations map the exact size-color matrix, streamlining raw trim allocation and boosting sewing-line utilization.',
    icon: 'Shirt'
  },
  {
    id: 'pharma',
    name: 'Pharma',
    description: 'Adhering to strict batch compliance, chemical formulation recipes, shelf-life expiries, and regulatory audits.',
    workflows: [
      'FDA & GMP Compliance Documentation',
      'Dynamic Recipe Formulation & Batch Sizing',
      'Strict Quality Control & Non-Conformance Actions',
      'Expiration Date & FEFO-based Inventory Management'
    ],
    challenges: 'A single compliance slip, raw chemical measurement error, or missed expiry check can shut down entire production lines or trigger costly audits.',
    solution: 'We implement rigorous FEFO (First-Expired, First-Out) controls, automatic validation protocols, and secure change logging inside ERP systems.',
    icon: 'Pills'
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description: 'Complex corrugated box quoting, sheet sizing calculations, raw board paper reel optimization, and multi-stage finish routing.',
    workflows: [
      'Custom Box Dimension Estimator & Quoting',
      'Paper Reel Deckle Width Optimization',
      'Multi-stage Routing (Corrugation, Printing, Die-cutting)',
      'Scrap & Core Wastage Recovery Analytics'
    ],
    challenges: 'Sub-optimal deckle planning on paper reels and slow manual quoting for non-standard box specifications directly compress corporate profit margins.',
    solution: 'We configure integrated quoting systems directly linked to paper weight charts, automatically calculating the most efficient corrugation path.',
    icon: 'Package'
  }
];

export const WHY_CHOOSE_US = [
  {
    title: '12+ Years Experience',
    description: 'Over a decade of hands-on expertise implementing enterprise solutions and steering business digitization courses.'
  },
  {
    title: 'Industry Expertise',
    description: 'Deep specialized knowledge of operational nuances within Textile, Apparel, Pharma, and Packaging sectors.'
  },
  {
    title: 'Implementation + Ongoing Support',
    description: 'We do not just hand over systems. We stick around to ensure high user adoption, system upgrades, and uninterrupted operations.'
  },
  {
    title: 'Certified Professionals',
    description: 'Our consultants hold top-tier credentials across SAP, Salesforce, and advanced AI process optimization frameworks.'
  },
  {
    title: 'Customized Solutions',
    description: 'No template-based solutions. We align software configurations with the unique, high-yield operational workflows of your business.'
  },
  {
    title: 'Business-Focused Approach',
    description: 'Technology is merely a vehicle. Our ultimate metrics are operational throughput, margin expansion, and ROI.'
  },
  {
    title: 'Transparent Process',
    description: 'A structured, highly communicative roadmap where goals, timelines, budget allocations, and deliverables are perfectly clear.'
  },
  {
    title: 'Long-Term Partnership',
    description: 'We act as your virtual Chief Technology Officers, assisting your business as operations scale and market landscapes shift.'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Requirement Analysis',
    description: 'We sit down with key business stakeholders to dissect your current operations and isolate persistent operational bottlenecks.',
    substeps: ['Departmental interviews', 'Legacy software mapping', 'Inefficiency audits', 'KPI definition']
  },
  {
    step: '02',
    title: 'Business Process Mapping',
    description: 'Drafting clear, visual current-state (As-Is) and high-efficiency future-state (To-Be) workflows for each department.',
    substeps: ['Dataflow visualization', 'System overlap identification', 'Redundancy removal', 'Mapping handoffs']
  },
  {
    step: '03',
    title: 'Solution Design',
    description: 'Formulating a detailed architectural blueprint specifying modules, data schemas, API gateways, and customizations.',
    substeps: ['Software selection review', 'Custom module specs', 'Database modeling', 'Infrastructure sizing']
  },
  {
    step: '04',
    title: 'Implementation',
    description: 'Deploying the configured environments, compiling databases, coding automated workflows, and importing historical archives.',
    substeps: ['Database migration', 'Custom coding (Apex/Python)', 'API integrations', 'Unit testing']
  },
  {
    step: '05',
    title: 'Training',
    description: 'Running immersive training sessions tailored to specific department operations to ensure rapid and enthusiastic staff adoption.',
    substeps: ['Interactive video modules', 'Admin training manuals', 'UAT (User Acceptance Testing) support', 'Department rehearsals']
  },
  {
    step: '06',
    title: 'Go Live',
    description: 'Safe, coordinated transition from legacy files to your brand new, fully responsive enterprise platform with real-time support.',
    substeps: ['Phased rollout coordination', 'Live data reconciliation', 'On-site cutover assistants', 'Immediate bug hotfixes']
  },
  {
    step: '07',
    title: 'Support & Optimization',
    description: 'Ongoing technical maintenance, monthly health performance audits, compliance updates, and optimization reviews.',
    substeps: ['L1/L2 SLA assistance', 'Server performance tuning', 'Feature expansion planning', 'System expansion checks']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Rajesh Singhania',
    role: 'Managing Director',
    company: 'Singhania Textile Industries',
    feedback: 'Before Astrabizz, our dyeing batch tracking was a mess. Their ERP implementation unified our inventory and looms, reducing fabric wastage by 18% and giving us accurate production forecasting for the first time.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't2',
    name: 'Dr. Shruti Vakil',
    role: 'VP Operations',
    company: 'CureLine Pharmaceuticals',
    feedback: 'FDA batch validations and FEFO tracking used to consume massive amounts of manual paperwork. Astrabizz fully digitized our recipe batching and integrated automated quality checks, making audit preparation completely seamless.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't3',
    name: 'Anuj Mehta',
    role: 'CEO & Founder',
    company: 'PackMaster Corrugators',
    feedback: 'Astrabizz implemented a custom packaging estimator that linked our quoting process directly to raw reel weights. What used to take two days of manual design work now takes our sales representatives two minutes.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 't4',
    name: 'Meera Chawla',
    role: 'Chief Technology Officer',
    company: 'Vibe Apparel Group',
    feedback: 'Managing our size-color garments across three retail channels was chaotic. Astrabizz transformed our Salesforce CRM and ERP syncing, accelerating order processing speeds by nearly 40%.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop'
  }
];

export const FAQS: FAQ[] = [
  {
    id: 'f1',
    question: 'How long does a typical ERP implementation take?',
    answer: 'A standard implementation usually spans 3 to 9 months, depending entirely on system complexity, volume of historical data, and customization requirements. We focus on a phased, de-risked methodology to keep your core business running seamlessly throughout.',
    category: 'ERP'
  },
  {
    id: 'f2',
    question: 'Do you provide post-implementation support?',
    answer: 'Yes, absolutely. We offer flexible post-implementation SLAs ranging from basic system monitoring to 24/7 dedicated support. We also provide incremental feature expansions and performance tuning to match your growth.',
    category: 'Support'
  },
  {
    id: 'f3',
    question: 'Can you customize ERP / CRM platforms to our unique workflows?',
    answer: 'Customization is our core strength. We believe software should adapt to your winning business processes, not the other way around. We build robust, modular custom layouts, write backend scripts, and set up native API integrations.',
    category: 'Customization'
  },
  {
    id: 'f4',
    question: 'Do you work with Small and Medium Enterprises (SMEs)?',
    answer: 'We specialize in assisting mid-market companies and SMEs scale up to enterprise-level efficiency. We configure cost-effective systems that grow with your volume, eliminating massive upfront overhead.',
    category: 'SMEs'
  },
  {
    id: 'f5',
    question: 'Can you audit our existing slow or problematic systems?',
    answer: 'Yes. Our System Health Audit runs a deep diagnostic scan on database structures, user access flows, API connections, and process gaps in your current ERP or CRM setup to build a clear improvement roadmap.',
    category: 'Audit'
  }
];

export const TRUST_COUNTERS: TrustCounter[] = [
  {
    id: 'exp',
    value: '12',
    suffix: '+',
    label: 'Years Experience',
    description: 'Of deep consulting in core industrial sectors'
  },
  {
    id: 'proj',
    value: '100',
    suffix: '+',
    label: 'Projects Delivered',
    description: 'Highly successful ERP, CRM, and digital transformations'
  },
  {
    id: 'ind',
    value: '4',
    suffix: '+',
    label: 'Industries Served',
    description: 'Textile, Apparel, Pharma, and Packaging expertise'
  },
  {
    id: 'sat',
    value: '98',
    suffix: '%',
    label: 'Client Satisfaction',
    description: 'Long-term client relationships and high user adoption'
  }
];
