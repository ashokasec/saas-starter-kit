import { app, team } from "./app";

export const seo = {
  title: `${app.name} - SAAS Starter Kit`,
  description: `${app.name} is a flexible, production-ready starter kit designed for developers to quickly set up SAAS applications without the need for backend configuration or databases.`,
};

const idJsonObject = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: app.name,
  url: app.publicUrl,
  foundingDate: "2025",
  legalName: app.name,
  description: seo.description,
  founder: {
    "@type": "Person",
    name: team.founder.name,
    sameAs: [team.founder.social.x, team.founder.social.github],
  },
};

export const idJsonObjectHTML = { __html: JSON.stringify(idJsonObject) };
