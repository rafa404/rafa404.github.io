export const site = {
  name: 'M.M. Golam Hafiz',
  role: 'AI/ML Researcher',
  affiliation: 'AMIR Lab · American International University-Bangladesh',
  location: 'Dhaka, Bangladesh',
  description:
    'Research in trustworthy medical AI, computational pathology, personalized federated learning, uncertainty quantification, and cross-site robustness.',
  statement:
    'I study how medical AI systems remain reliable when data are distributed, evidence is uncertain, and deployment shifts across sites.',
  url: 'https://rafa404.github.io',
  github: 'https://github.com/rafa404',
  linkedin: 'https://linkedin.com/in/hafizrafi',
  scholar: 'https://scholar.google.com/citations?hl=en&user=ia5NgssAAAAJ',
} as const;

export const researchAreas = [
  {
    id: 'medical-imaging',
    title: 'Trustworthy Medical AI',
    description: 'Reliability-aware segmentation and classification across histopathology, MRI, and gastrointestinal imaging.',
  },
  {
    id: 'federated-learning',
    title: 'Personalized Federated Learning',
    description: 'Graph-guided, prototype-based, and client-local adaptation under heterogeneous non-IID data.',
  },
  {
    id: 'uncertainty',
    title: 'Uncertainty & Verification',
    description: 'Calibration, selective prediction, boundary reliability, and adaptive verification under uncertainty.',
  },
  {
    id: 'domain-generalization',
    title: 'Domain Generalization',
    description: 'Cross-site robustness, domain-shift evaluation, and independent cross-dataset validation.',
  },
] as const;

export const experience = [
  {
    period: 'Feb 2026 — present',
    role: 'AI/ML Research Intern',
    organization: 'AMIR Lab, American International University-Bangladesh',
    detail: 'Research on trustworthy medical AI, personalized federated learning, uncertainty-aware verification, domain generalization, and diffusion modelling under Prof. Dr. Muhammad Firoz Mridha.',
  },
  {
    period: 'Mar 2026 — Jun 2026',
    role: 'Full Stack Web Developer',
    organization: 'Agni Systems PLC',
    detail: 'Built and maintained production website features using PHP, HTML, CSS, JavaScript, and Bootstrap.',
  },
  {
    period: 'Sep 2024 — Jan 2025',
    role: 'AI Trainer / AI Response Evaluator',
    organization: 'Outlier AI',
    detail: 'Evaluated model responses for correctness, completeness, groundedness, reasoning quality, and instruction following.',
  },
] as const;

export const education = [
  {
    period: '2022 — 2026',
    degree: 'B.Sc. in Computer Science and Engineering',
    institution: 'American International University-Bangladesh',
    result: 'CGPA 3.50 / 4.00',
  },
  {
    period: '2020',
    degree: 'Higher Secondary Certificate, Science',
    institution: 'Hajera Taju Degree College',
    result: 'GPA 5.00 / 5.00',
  },
] as const;

export const expertise = [
  ['Programming & frameworks', 'Python, PyTorch, TensorFlow, Keras, Hugging Face Transformers'],
  ['Medical imaging', 'Image classification and segmentation, U-Net architectures, Vision Transformers, transfer learning'],
  ['Federated & graph learning', 'FedAvg, personalized FL, GraphSAGE, topology-aware aggregation, prototype-guided personalization'],
  ['Evaluation', 'Ablation studies, cross-dataset evaluation, paired statistical testing, calibration, explainability'],
  ['Generative & diffusion modelling', 'Diffusion models, conditional diffusion, flow matching, synthetic tabular data generation, constraint-guided generation'],
] as const;
