/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://margot-reboul.vercel.app",
  generateRobotsTxt: true,
  changefreq: "monthly",
  priority: 0.8,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  transform: async (config, path) => {
    // Configuration personnalisée par page
    const priorities = {
      "/": 1.0, // Page d'accueil
      "/service": 0.8, // Prestations
      "/price": 0.8, // Tarifs
      "/contact": 0.8, // Contact
    };

    return {
      loc: path, // L'URL de la page
      changefreq: config.changefreq, // Reprend la valeur par défaut 'monthly'
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(), // Date de dernière modification
    };
  },
};
