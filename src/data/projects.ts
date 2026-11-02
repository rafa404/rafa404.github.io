export interface ResearchSystem {
  name: string;
  focus: string;
  description: string;
  technologies: string[];
  href?: string;
  linkLabel?: string;
}

export const researchSystems: ResearchSystem[] = [
  {
    name: 'Swin-MSEG-Pro',
    focus: 'Reliable polyp segmentation',
    description:
      'A reliability-focused SwinV2 segmentation framework combining multi-scale features, deep supervision, evidential uncertainty, and boundary-focused learning.',
    technologies: ['SwinV2', 'Deep supervision', 'Evidential uncertainty'],
    href: '/publications/swin-mseg-pro-array/',
    linkLabel: 'Read publication',
  },
  {
    name: 'GesturePolypSeg',
    focus: 'Inspectable clinical interaction',
    description:
      'A gesture-controlled interface combining binary polyp segmentation, evidential uncertainty, boundary inspection, and explanation views.',
    technologies: ['PyTorch', 'PyQt6', 'Arduino', 'OpenCV'],
    href: 'https://github.com/rafa404/GesturePolypSeg',
    linkLabel: 'Open implementation',
  },
  {
    name: 'Fed-CCG',
    focus: 'Graph-guided federated learning',
    description:
      'A topology-aware federated pathology system that conditions aggregation on a learned client communication graph.',
    technologies: ['PyTorch', 'GraphSAGE', 'Federated learning'],
    href: 'https://github.com/rafa404/fed-ccg-osteosarcoma',
    linkLabel: 'Open implementation',
  },
  {
    name: 'FedHisto-PAST',
    focus: 'Cross-site federated pathology',
    description:
      'A stain-aware, parameter-efficient federated framework for cross-site lung histopathology classification under non-IID client data.',
    technologies: ['Federated learning', 'Foundation models', 'Stain robustness'],
    href: '/publications/fedhisto-past-arxiv-2026/',
    linkLabel: 'Read public preprint',
  },
];
