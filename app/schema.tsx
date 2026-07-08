export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "Jovavo",

    url: "https://jovavo.com",

logo: "https://jovavo.com/og-image.png",

    image: "https://jovavo.com/og-image.png",

    description:
      "Jovavo designs and develops premium websites for businesses looking to grow online through exceptional design, performance, and user experience.",

    email: "contact@jovavo.com",

    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },

    serviceType: [
      "Website Design",
      "Website Development",
      "Website Redesign",
      "Ecommerce Development",
      "SEO Optimization",
      "Brand Strategy",
      "UI/UX Design",
    ],

    sameAs: [
      "https://instagram.com/jovavo.co",
      "https://github.com/Jovavoco",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}