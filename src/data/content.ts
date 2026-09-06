import { CapabilityItem, FeatureCardItem, IndustryItem, ProjectItem, StatItem } from '../types';

export const HERO_CONTENT = {
  tagline: 'PRECISION. PERFORMANCE. RELIABILITY.',
  headlinePrefix: 'Engineering What Moves',
  headlineHighlight: 'Industry Forward.',
  subhead: 'Advanced manufacturing solutions engineered for performance, reliability, and scale.',
  ctaPrimary: 'Explore Capabilities',
  ctaSecondary: 'Request a Quote',
  trustText: 'Trusted by 150+ industries worldwide.',
  videoText: 'See Our Production',
  heroBgImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=2000&q=85',
  avatars: [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80',
  ],
};

export const ABOUT_CONTENT = {
  tagline: 'ABOUT FORGEX',
  headline: 'We engineer and manufacture precision components that keep industries moving.',
  description: 'From complex prototypes to high-volume production, ForgeX combines advanced technology, skilled engineering, and rigorous quality control to deliver components you can depend on.',
  cards: [
    {
      id: 'precision-mfg',
      title: 'Precision Manufacturing',
      description: 'High-accuracy components engineered for demanding industrial applications.',
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      iconName: 'crosshair',
      metrics: '±0.002 mm Tolerances',
      details: 'Utilizing 5-axis CNC machining centers, high-speed spindles, and automated pallet changers to fabricate ultra-tight aerospace and defense grade components.'
    },
    {
      id: 'advanced-prod',
      title: 'Advanced Production',
      description: 'Modern CNC, automation, fabrication, and production technologies.',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
      iconName: 'bot',
      metrics: '24/7 Automated Cell',
      details: 'Integrated robotic loading arms, automated fiber laser cutting, and automated continuous welding stations providing rapid turnaround and cost efficiency.'
    },
    {
      id: 'quality-driven',
      title: 'Quality Driven',
      description: 'Consistent quality, strict inspection, and reliable production standards.',
      image: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=800&q=80',
      iconName: 'shield',
      metrics: 'ISO 9001:2015 & AS9100D',
      details: 'Equipped with temperature-controlled metrology labs, Zeiss Coordinate Measuring Machines (CMM), optical profilometry, and full material traceability.'
    }
  ] as FeatureCardItem[],
};

export const STATS_CONTENT: StatItem[] = [
  {
    id: 'years',
    value: '25+',
    label: 'Years of Engineering',
    iconName: 'calendar'
  },
  {
    id: 'projects',
    value: '150+',
    label: 'Industrial Projects',
    iconName: 'building'
  },
  {
    id: 'machines',
    value: '40+',
    label: 'Production Machines',
    iconName: 'machine'
  },
  {
    id: 'quality',
    value: '99.8%',
    label: 'Quality Compliance',
    iconName: 'shield-check'
  }
];

export const CAPABILITIES_CONTENT: CapabilityItem[] = [
  {
    id: 'cnc-machining',
    title: 'CNC Machining',
    description: 'High-precision machining for complex components with tight tolerances.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    badge: '5-Axis Milling & Turning',
    tolerances: 'Down to ±0.002 mm (0.00008")',
    materials: ['Titanium Grade 5', 'Inconel 718', 'Aluminum 6061/7075', '316L Stainless Steel'],
    equipment: ['DMG MORI DMU 50 5-Axis', 'Mazak Integrex i-200', 'Haas VF-4SS with High-Speed Spindle'],
    fullDetails: 'Full simultaneous 5-axis CNC milling, high-precision Swiss turning, and multi-spindle machining for complex geometry aerospace impellers, medical implants, and structural nodes.'
  },
  {
    id: 'metal-fabrication',
    title: 'Metal Fabrication',
    description: 'Custom metal fabrication solutions built for strength and durability.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    badge: 'Laser Cutting & Forming',
    tolerances: '±0.05 mm on laser profile',
    materials: ['Carbon Steel A36', 'Corten Steel', 'Aluminum Plate', 'Hardox 450'],
    equipment: ['Trumpf TruLaser 5030 Fiber 10kW', 'Amada HG 2204 CNC Press Brake', 'Fronius Cold Metal Transfer (CMT)'],
    fullDetails: 'Precision sheet metal fabrication, 10kW high-speed fiber laser cutting, multi-axis robotic press brake bending, and certified structural steel welding.'
  },
  {
    id: 'precision-components',
    title: 'Precision Components',
    description: 'Engineered components manufactured to exact specifications.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    badge: 'Sub-Micron Turning',
    tolerances: '±0.003 mm concentricity',
    materials: ['Tool Steels D2/A2/M2', 'Beryllium Copper', 'PEEK', 'Aerospace Alloys'],
    equipment: ['Studer S33 Universal Cylindrical Grinder', 'AgieCharmilles Wire EDM', 'Tornos SwissNano'],
    fullDetails: 'High-volume shaft turning, spline cutting, precision bearings, internal/external cylindrical grinding, and wire electrical discharge machining (EDM).'
  },
  {
    id: 'automated-production',
    title: 'Automated Production',
    description: 'Smart automation for improved efficiency, consistency, and scalability.',
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=800&q=80',
    badge: 'Industry 4.0 Ready',
    tolerances: '100% automated in-line optical verification',
    materials: ['High-Volume Engineered Metals & Polymers'],
    equipment: ['KUKA KR Cybertech Robots', 'Fanuc Robodrill Automated Cells', 'Cognex Machine Vision'],
    fullDetails: 'Cellular manufacturing with robotic material handling, automated parts feeding, computerized vision sorting, and lights-out uncrewed shifts.'
  }
];

export const INDUSTRIES_CONTENT: IndustryItem[] = [
  {
    id: 'automotive',
    name: 'Automotive',
    iconName: 'car',
    standards: 'IATF 16949:2016, ISO 26262, PPAP Level 3',
    materials: ['High-strength Steel', 'Forged Aluminum', 'Cast Iron', 'Titanium'],
    sampleParts: ['Turbocharger housings', 'Suspension knuckles', 'Transmission gears', 'EV battery frames'],
    tolerance: '±0.005 mm'
  },
  {
    id: 'aerospace',
    name: 'Aerospace',
    iconName: 'plane',
    standards: 'AS9100 Rev D, FAA Compliant, NADCAP certified',
    materials: ['Titanium Ti-6Al-4V', 'Inconel 625/718', 'Aluminum 7075-T6', 'Hastelloy'],
    sampleParts: ['Turbine blades', 'Fuel injector bodies', 'Landing gear linkages', 'Satellite bracket assemblies'],
    tolerance: '±0.002 mm'
  },
  {
    id: 'energy',
    name: 'Energy',
    iconName: 'wind',
    standards: 'API Spec Q1, ISO 29001, ASME Section VIII',
    materials: ['Duplex 2205 Stainless', 'Super Duplex 2507', 'Monel 400', 'Nickel Alloys'],
    sampleParts: ['Subsea valves', 'Wind turbine hub couplings', 'Pressure vessel penetrations', 'Nuclear containment flanges'],
    tolerance: '±0.01 mm'
  },
  {
    id: 'construction',
    name: 'Construction',
    iconName: 'crane',
    standards: 'AISC 360, AWS D1.1, EN 1090-2 Execution Class 3',
    materials: ['Structural Grade S355', 'A992 Beam Steel', 'Wear-resistant Hardox'],
    sampleParts: ['Heavy excavator brackets', 'Prestressed bridge pins', 'Hydraulic cylinder mounts', 'Crane boom sheaves'],
    tolerance: '±0.05 mm'
  },
  {
    id: 'industrial-equipment',
    name: 'Industrial Equipment',
    iconName: 'gear',
    standards: 'ISO 9001:2015, DIN EN ISO 13849',
    materials: ['4140 Alloy Steel', 'Bronze SAE 660', 'Case-hardened 8620', 'Stainless 304'],
    sampleParts: ['High-torque helical gearboxes', 'Hydraulic manifolds', 'Linear bearing rails', 'Packaging machine spindles'],
    tolerance: '±0.004 mm'
  },
  {
    id: 'electronics',
    name: 'Electronics',
    iconName: 'cpu',
    standards: 'IPC-A-610, RoHS 3, REACH compliant, Cleanroom Class 10,000',
    materials: ['Oxygen-free Copper (C10100)', 'Aluminum 6063', 'Anodized 5052', 'Brass C36000'],
    sampleParts: ['RF shielding enclosures', 'Liquid cooling cold plates', 'High-density heatsinks', 'Semiconductor wafer chucks'],
    tolerance: '±0.003 mm'
  }
];

export const PROJECTS_CONTENT: ProjectItem[] = [
  {
    id: 'automotive-components',
    title: 'Precision Automotive Components',
    description: 'High-performance components for automotive applications.',
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'Tier-1 EV Powertrain OEM',
    leadTime: '3 Weeks Prototyping, 12 Weeks Production',
    volume: '150,000 Units / Year',
    material: 'Forged 4340 Nickel-Chromium-Molybdenum Steel',
    fullSpecs: 'Precision CNC turning and gear hobbing of planetary drive rings for next-generation electric vehicle drive units. Featuring 100% automated magnetic particle crack inspection and sub-micron Ra 0.2 surface finish.'
  },
  {
    id: 'automated-line',
    title: 'Automated Production Line',
    description: 'End-to-end automated manufacturing system for improved output.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'Industrial Automation & Robotics',
    leadTime: 'Turnkey Commissioning in 16 Weeks',
    volume: '30+ Custom Robotic Stations',
    material: 'Modular Extruded Structural Aluminum & Hardened Steel Guides',
    fullSpecs: 'Complete automated modular assembly cell engineered for high-speed pick-and-place, laser weld verification, and automated packaging. Reduced cycle time by 44% while maintaining zero-defect rate.'
  },
  {
    id: 'heavy-fabrication',
    title: 'Heavy Industrial Fabrication',
    description: 'Large-scale fabrication solutions for industrial infrastructure.',
    image: 'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    clientIndustry: 'Renewable Power & Heavy Infrastructure',
    leadTime: '6 Weeks Fast-Track Delivery',
    volume: '45 Metric Tons Fabricated Structures',
    material: 'Structural S355J2+N & Weldox 700 High-Yield Steel',
    fullSpecs: 'Submerged arc welding and multi-torch CNC plasma beveling of critical offshore wind turbine foundation supports. Fully certified under ultrasonic (UT) and radiographic (RT) non-destructive testing.'
  }
];

export const CTA_CONTENT = {
  headline: 'Have a Production Challenge?',
  sublinePrefix: "Let's Engineer the",
  sublineHighlight: 'Solution.',
  description: 'Tell us what you need to manufacture. Our engineering team will help turn your requirements into a production-ready solution.',
  buttonText: 'Start a Project'
};

export const FOOTER_CREDITS = {
  developerName: 'Aniruddha Das',
  developerUrl: 'https://github.com/AniruddhaDas1',
  poweredByName: 'LeadSpree Business Solutions',
  poweredByUrl: 'https://leadspree.in',
  companyName: 'Forgex Manufacturing',
  tagline: 'Precision Engineering & Advanced Industrial Production',
};
