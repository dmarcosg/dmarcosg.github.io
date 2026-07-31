/*
  ============================================================
  SITE CONTENT, edit this file only.
  ============================================================
  This is plain JavaScript, but you can treat every value below
  like a fill-in-the-blank form. To add a new project, publication,
  or person, copy an existing { ... } block in the array, paste
  it above or below, and change the text.

  After editing: save, then run
      git add data.js && git commit -m "update site" && git push
  GitHub Pages rebuilds the live site automatically within ~1 minute.

  Anything marked [ADD] is a placeholder, replace it with your info.
  ============================================================
*/

window.SITE_DATA = {

  person: {
    name: "Diego Marcos",
    role: "Junior Professor, Inria",
    location: "Inria Centre at Université Côte d'Azur, Montpellier antenna, France",
    team: "EVERGREEN team",
    thesis: "I build machine learning and computer vision methods for Earth observation, biodiversity, and environmental monitoring.",
    about: "I work at the interface between computer vision and remote sensing, developing more interpretable machine learning models for environmental applications, with a particular focus on mapping the world's biodiversity. I'm equally interested in applying these models, and helping others apply them, to real and impactful problems.",
    email: "diego.marcos@inria.fr",
    photo: "images/diego-marcos.jpg",
    links: [
      { label: "Google Scholar", url: "https://scholar.google.ch/citations?user=IUqydU0AAAAJ&hl=en" },
      { label: "EVERGREEN team", url: "https://team.inria.fr/evergreen/" },
      { label: "GitHub", url: "https://github.com/dmarcosg" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/diego-marcos-8927bb20b/" },
      { label: "Bluesky", url: "https://bsky.app/profile/dmarcosg.bsky.social" }
    ]
  },

  // Chronological career path, rendered in the "Bio" section at the end of the page.
  timeline: [
    { years: "2022-present", role: "Junior Professor", place: "Inria, Montpellier, France" },
    { years: "2019-2022", role: "Postdoctoral researcher / Assistant professor", place: "Geoscience and Remote Sensing lab, Wageningen University, The Netherlands" },
    { years: "2015-2019", role: "PhD, cum laude: \u201cInjecting spatial priors in Earth Observation with machine vision\u201d", place: "Wageningen University, The Netherlands (advisor Prof. Devis Tuia)" },
    { years: "2017", role: "Visiting student", place: "University of Toronto, Canada (advisor Prof. Raquel Urtasun)" },
    { years: "2011-2014", role: "MSc, Computational Science and Engineering", place: "EPFL, Lausanne, Switzerland" }
  ],

  // Current funded projects, merged "ongoing"/"upcoming" into one list, most recent first.
  projects: [
    {
      title: "Open-World Species Identification by Emulating Experts (eTaxonomist)",
      period: "2026-2030 · ANR JCJC",
      role: "PI / Scientific Coordinator",
      description: "A €311,217 project (Inria) developing weakly supervised computer vision methods that emulate expert trait-based reasoning for zero-shot, interpretable species identification, validated on insects, birds, and plants (Pl@ntNet deployment). In collaboration with Alexis Joly (Inria, Pl@ntNet co-founder), Zeynep Akata (TU Munich / Helmholtz Munich), Dino Ienco (INRAe), Roberto Interdonato (Cirad), David Carral (Inria) and Marie-Laure Mugnier (Univ. Montpellier) on knowledge representation, Pierre Bonnet (Cirad, Pl@ntNet), Carole Kerdelhué (INRAe, insects), and Devin de Zwaan (Mount Allison University, birds), plus a postdoc, PhD student, and research engineer to be hired.",
      link: ""
    },
    {
      title: "AI Foundation Models in Agricultural Sciences (AgriScienceFM)",
      period: "2026-2029 · Horizon Europe RIA (HORIZON-CL4-2025-01)",
      role: "Co-PI",
      description: "A \u20ac6,000,000 project coordinated by Ioannis Athanasiadis (Wageningen University), bringing together 12 partners across Europe and Canada to develop AI foundation models for agricultural sciences \u2014 combining vision, language, and structured agronomic data to support crop monitoring and decision-making.",
      link: ""
    },
    {
      title: "EcoControl (Écologie des Communautés et Outils Numériques pour augmenTer la RégulatiOn naturelle des insectes ravageurs en agriculture)",
      period: "2024\u20132028 (approx., 3\u20135-year award) \u00b7 PEPR AgroEcoNum, France 2030 (ANR/INRAE\u2013Inria co-piloted program)",
      role: "Participant (funding for the PhD of Pablo Ubilla)",
      description: "A project coordinated by Astrid Cruaud (INRAE), part of the national PEPR program on agroecology and digital technology co-piloted by INRAE and Inria. The consortium brings together roughly 50 scientists from INRAE, Inria, CNRS, and CIRAD, plus five higher-education institutions, to combine field ecology, NLP-based literature mining, DNA metabarcoding, and AI-assisted image recognition to understand and strengthen the natural regulation of crop pests by their arthropod enemies.",
      link: "https://www.pepr-agroeconum.fr/les-projets-finances/traitement-de-donnees-et-modelisation/laureats-aap/ecocontrol"
    },
    {
      title: "Generalized Earth Observation with Remote Sensing and Text (GEO-ReSeT)",
      period: "2023-2027 · ANR TSIA program",
      role: "Project co-leader, with Sylvain Lobry (Université Paris Cité)",
      description: "A \u20ac593,269 project with Camille Kurtz, Laurent Wendling (Université Paris Cité), and Dino Ienco (INRAE), exploring how remote sensing imagery can be linked with natural language to build more general, more accessible Earth observation models.",
      link: ""
    },
    {
      title: "Earth Observation and Data Science for Agriculture and the Environment (OBTEA)",
      period: "2022-2026 · CPJ (Chaire de Professeur Junior) funding",
      role: "Project leader",
      description: "A \u20ac300,000 grant that supports my junior professorship and research program at Inria, applying Earth observation and machine learning to agricultural and environmental monitoring.",
      link: ""
    }
    // [ADD more projects here as they're funded]
  ],

  // Job openings, keep this short and remove/replace entries once filled.
  jobOpenings: {
    note: "I'm regularly looking for motivated PhD students and postdocs. Even if nothing is listed below, feel free to get in touch.",
    openings: [
      {
        title: "PhD / postdoc positions: Open-World Species Identification by Emulating Experts.",
        status: "Expected to open soon in the context of ANR JCJC eTaxonomist",
        description: "Weakly supervised computer vision methods that emulate expert trait-based reasoning for zero-shot, interpretable species identification.",
        link: ""
      }
      // [ADD real openings here as they're posted; delete this placeholder once you have real ones]
    ]
  },

  // Selected publications, full list on Google Scholar (linked above); keep this list short and current.
  // "pdf" can point to an arXiv/HAL/open-access PDF; leave "" if none is available.
  // "tags" are short topic labels, 1-3 per paper.
  publications: [
    { year: "2026", title: "Applying the maximum entropy principle to neural networks enhances multi-species distribution models", venue: "Methods in Ecology and Evolution", authors: "Ryckewaert, Marcos, Botella, Servajean, Bonnet, Joly", link: "", pdf: "", thumbnail: "", tags: ["Biodiversity", "Species Distribution"] },
    { year: "2025", title: "Atomizer: generalizing to new modalities by breaking satellite images down to a set of scalars", venue: "BMVC 2025 (Best Presentation Award)", authors: "Riffaud de Turckheim, Lobry, Interdonato, Marcos", link: "", pdf: "https://arxiv.org/pdf/2506.13542", thumbnail: "", tags: ["Remote Sensing", "Multimodality"] },
    { year: "2025", title: "Effective integration of drone technology for mapping and managing palm species in the Peruvian Amazon", venue: "Nature Communications", authors: "Tagle Casapia, Cardenas, Marcos, Fernández, Bartholomeus, et al.", link: "", pdf: "", thumbnail: "", tags: ["Remote Sensing", "Biodiversity"] },
    { year: "2024", title: "PDiscoFormer: relaxing part discovery constraints with vision transformers", venue: "ECCV 2024", authors: "Aniraj, Dantas, Ienco, Marcos", link: "", pdf: "https://arxiv.org/pdf/2407.04538", thumbnail: "", tags: ["Interpretability", "Fine-Grained Recognition"] },
    { year: "2024", title: "Coarse-to-fine concept bottleneck models", venue: "NeurIPS 2024", authors: "Panousis, Ienco, Marcos", link: "", pdf: "", thumbnail: "", tags: ["Interpretability", "Concept Models"] },
    { year: "2023", title: "PDiscoNet: semantically consistent part discovery for fine-grained recognition", venue: "ICCV 2023", authors: "van der Klis, Alaniz, Mancini, Dantas, Ienco, Akata, Marcos", link: "", pdf: "https://arxiv.org/pdf/2309.03173", thumbnail: "", tags: ["Interpretability", "Fine-Grained Recognition"] },
    { year: "2018", title: "Learning deep structured active contours end-to-end", venue: "CVPR 2018", authors: "Marcos, Tuia, Kellenberger, Zhang, Bai, Liao, Urtasun", link: "", pdf: "", thumbnail: "", tags: ["Remote Sensing", "Segmentation"] },
    { year: "2017", title: "Rotation equivariant vector field networks", venue: "ICCV 2017", authors: "Marcos, Volpi, Komodakis, Tuia", link: "", pdf: "", thumbnail: "", tags: ["Machine Learning", "Equivariance"] }
  ],

  news: [
    { date: "2026", text: "ANR JCJC project eTaxonomist (Open-World Species Identification by Emulating Experts) funded (2026-2030)." },
    { date: "2026", text: "AgriScienceFM, a \u20ac6M Horizon Europe project on AI foundation models for agriculture, was funded (2026-2029)." },
    { date: "2025", text: "\u201cAtomizer\u201d (with Hugo Riffaud de Turckheim, Sylvain Lobry, and Roberto Interdonato) won the Best Presentation Award at BMVC 2025." },
    { date: "2025", text: "New paper in Nature Communications on drone-based mapping of palm species in the Peruvian Amazon." },
    { date: "2024", text: "Two papers accepted: PDiscoFormer (ECCV 2024) and Coarse-to-fine concept bottleneck models (NeurIPS 2024)." }
    // [ADD more news items, most recent first]
  ],

  // ---- People I'm working with ----
  peopleCurrent: [
    { name: "Pablo Ubilla", role: "PhD student, Inria", note: "Robust deep species distribution models (co-supervised with Christophe Botella and Alexis Joly)", website: "" },
    { name: "Hugo Riffaud de Turckheim", role: "PhD student, Inria", note: "Foundation models for Earth observation (co-supervised with Sylvain Lobry and Roberto Interdonato)", website: "" },
    { name: "Nicolas Houdré", role: "PhD student, Université Paris Cité", note: "Foundation models for Earth observation (co-supervised with Sylvain Lobry, Camille Kurtz, Laurent Wendling and Dino Ienco)", website: "" },
    { name: "Jonas Klotz", role: "PhD student, BIFOLD / TU Berlin", note: "Computer vision interpretability in remote sensing (co-supervised with Begüm Demir, Cassio Fraga-Dantas, Pallavi Jain and Konstatinos Panousis)", website: "" },
    { name: "Ananthu Aniraj", role: "Postdoctoral researcher, Inria", note: "Interpretable fine-grained recognition", website: "https://ananthu-aniraj.github.io/" },
    { name: "Noé Flandre", role: "Research engineer, Inria", note: "Foundation models for Earth observation (co-supervised with Roberto Interdonato)", website: "https://noeflandre.com/" },
    { name: "Ron van Bree", role: "PhD student, Wageningen University", note: "Hybrid AI for crop modeling (co-supervised with Ioannis Athanasiadis)", website: "" }
    // [ADD interns and new group members here]
  ],

  peopleAlumni: [
    { name: "Valerie Zermatten", role: "PhD, EPFL (2021-2026)", note: "Mapping ecosystems with deep learning and extremely multi-modal data (awarded May 2026)", website: "" },
    { name: "Alex Levering", role: "PhD, Wageningen University (2019-2024)", note: "Landscape quality assessments using deep learning (awarded January 2024)", website: "" },
    { name: "Robert Masolele", role: "PhD, Wageningen University (2019-2023)", note: "Assessing land use following tropical deforestation (awarded April 2023)", website: "" },
    { name: "Pallavi Jain", role: "Postdoc, CIHEAM-IAMM and Inria (2023-2026)", note: "Text/satellite cross-modal self-supervised learning (co-supervised with Tristan Berchoux, Dino Ienco, and Roberto Interdonato)", website: "" },
    { name: "Konstantinos Panousis", role: "Postdoc, Inria (2023-2025)", note: "Probabilistic concept bottleneck models", website: "" },
    { name: "Maxime Ryckewaert", role: "Postdoc, Inria (2023-2025)", note: "Deep learning for ecological modeling (co-supervised with Alexis Joly)", website: "" },
    { name: "Laura Cue", role: "Postdoc, Wageningen University (2022-2025)", note: "Predicting deforestation using satellite data and AI (co-supervised with Johannes Reiche)", website: "" }
    // [ADD former students/postdocs as your group grows]
  ],

  peopleCollaborators: [
    { name: "Devis Tuia", affiliation: "EPFL, ECEO lab", note: "", website: "https://people.epfl.ch/devis.tuia" },
    { name: "Sylvain Lobry", affiliation: "Université Paris Cité, LIPADE", note: "", website: "https://www.sylvainlobry.com/" },
    { name: "Dino Ienco", affiliation: "INRAE, UMR TETIS / EVERGREEN Inria team", note: "", website: "https://sites.google.com/site/dinoienco" },
    { name: "Roberto Interdonato", affiliation: "Cirad, UMR TETIS / EVERGREEN Inria team", note: "", website: "" },
    { name: "Ioannis Athanasiadis", affiliation: "Wageningen University", note: "", website: "https://www.athanasiadis.info/" },
    { name: "Zeynep Akata", affiliation: "Technical University of Munich / Helmholtz Munich", note: "", website: "https://www.eml-munich.de/people/zeynep-akata" },
    { name: "Alexis Joly", affiliation: "Inria, ZENITH team", note: "", website: "https://sites.google.com/view/alexis-joly-inria/home" },
    { name: "Christophe Botella", affiliation: "Inria", note: "", website: "" },
    { name: "Pierre Bonnet", affiliation: "Cirad, UMR AMAP", note: "", website: "" },
    { name: "Cassio F. Dantas", affiliation: "INRAE, UMR TETIS / EVERGREEN Inria team", note: "", website: "" }
    // [ADD more collaborators as needed, this list favors the most frequent/recent ones]
  ]

};
