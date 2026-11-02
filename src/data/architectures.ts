import icprFigure from '../assets/research/icpr-fed-ccg-architecture.png';
import fedpaxaFigure from '../assets/research/fedpaxa-architecture.jpg';
import ecctFigure from '../assets/research/ecct-kidney-architecture.png';
import becithconFigure from '../assets/research/becithcon-swin-unet-architecture.png';

export const architectures = [
  {
    publicationId: '2026-icpr-fed-ccg-osteosarcoma',
    index: 'A',
    title: 'Client-communication-graph federated learning',
    caption: 'EfficientNet-B7 local learning with a GraphSAGE-conditioned aggregation path.',
    sourceLabel: 'ICPR 2026 · Figure 2',
    image: icprFigure,
    alt: 'Federated learning architecture with three clients, EfficientNet-B7, a client similarity graph, GraphSAGE, and weighted server aggregation.',
    sourceHash: 'e7c1805aa1c03ad3cde28431e92bf44888b9dda3d286edd9dfc0f369204d749e',
  },
  {
    publicationId: '2026-elsevier-fedpaxa-net',
    index: 'B',
    title: 'Prototype-aligned personalized federated learning',
    caption: 'Shared ConvNeXt backbone, client-local residual adapters, reliability-weighted robust prototypes, and alignment.',
    sourceLabel: 'Intelligence-Based Medicine · Figure 1',
    image: fedpaxaFigure,
    alt: 'FedPAXA-Net architecture showing three clients, image preprocessing, ConvNeXt-Base, a federated server, residual adapters, robust local prototypes, and prototype alignment.',
    sourceHash: '7cce450844f35f2209880cc64079ce186d329b25d31e8ad4254b66248c9f6e0d',
  },
  {
    publicationId: '2026-ecct-kidney-mri-ckd',
    index: 'C',
    title: 'Kidney MRI segmentation and explanation path',
    caption: 'ResNet34 encoder, nested U-Net++ decoder, segmentation output, and Grad-CAM explanation view.',
    sourceLabel: 'ECCT 2026 · Figure 2',
    image: ecctFigure,
    alt: 'Kidney MRI framework with preprocessing, a ResNet34 encoder, a nested U-Net++ decoder, segmentation output, and Grad-CAM explanations.',
    sourceHash: 'a9f7ef3743df56992a88096dc408db1bfd28657fcffad5be13042c0767fa2ea2',
  },
  {
    publicationId: '2026-becithcon-nuclei-segmentation',
    index: 'D',
    title: 'Swin-UNet nuclei segmentation pipeline',
    caption: 'Histopathology image and mask preprocessing followed by a Swin Transformer encoder and U-Net decoder.',
    sourceLabel: 'BECITHCON 2026 · Figure 1',
    image: becithconFigure,
    alt: 'Swin-UNet nuclei segmentation architecture with input images and masks, preprocessing, a Swin Transformer encoder, and a U-Net decoder.',
    sourceHash: '6ab8eb66d4fa4c9f19740d3ed186c5c07cd32811ab1b7887584019f1a98a5de9',
  },
] as const;
