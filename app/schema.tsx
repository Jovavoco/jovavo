export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],

    "@id": "https://jovavo.com/#organization",

    name: "Jovavo",

    url: "https://jovavo.com",

    logo: {
      "@type": "ImageObject",
      url: "https://jovavo.com/og-image.png",
    },

    image: "https://jovavo.com/og-image.png",

    description:
      "Jovavo is a web design and digital marketing company creating custom websites, e-commerce experiences, and digital solutions for businesses.",

    email: "contact@jovavo.com",

    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },

    serviceType: [
      "Web Design",
      "Website Development",
      "Custom Websites",
      "Website Redesign",
      "Landing Page Design",
      "E-commerce Website Development",
      "Google Ads Management",
      "Meta Ads Management",
      "Search Engine Optimization",
    ],

    sameAs: [
      "https://instagram.com/jovavo.co",
      "https://github.com/Jovavoco",
    ],

    knowsAbout: [
      "Web Design",
      "Website Development",
      "E-commerce",
      "Next.js",
      "React",
      "Google Ads",
      "Meta Ads",
      "SEO",
      "UI Design",
      "UX Design",
      "Responsive Web Design",
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