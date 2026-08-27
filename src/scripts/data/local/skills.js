const skills = [
  {
    icon: "fa-solid fa-code",
    title: "Bahasa Pemrograman",
    isLanguage: false,
    items: ["JavaScript"],
  },
  {
    icon: "fa-solid fa-globe",
    title: "Web",
    isLanguage: false,
    items: ["HTML", "CSS", "Node.js"],
  },
  {
    icon: "fa-solid fa-database",
    title: "Database",
    isLanguage: false,
    items: ["PostgreSQL", "MySQL"],
  },
  {
    icon: "fa-brands fa-windows",
    title: "Sistem Operasi",
    isLanguage: false,
    items: ["Windows", "Linux Ubuntu"],
  },
  {
    icon: "fa-solid fa-file-excel",
    title: "Administrasi Data",
    isLanguage: false,
    items: ["Microsoft Office", "Google Workspace"],
  },
  {
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Teknis & Hardware",
    isLanguage: false,
    items: ["Perakitan Komputer"],
  },
  {
    icon: "fa-solid fa-language",
    title: "Bahasa Asing",
    isLanguage: true,
    items: [
      { language: "Inggris", certificate: "TOEFL", score: "530 / 677" },
      { language: "Jepang", certificate: "JFT-Basic A2", score: "233 / 250" },
    ],
  },
];

export default skills;
