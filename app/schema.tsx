export default function Schema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",

    name: "Jovavo",

    url: "https://jovavo.com",

    logo: "https://jovavo.com/og-image.png",

    image: "https://jovavo.com/og-image.png",

    description:
      "Jovavo creates custom websites and manages Google and Meta advertising campaigns for businesses looking to grow online, generate leads, and convert more customers.",

    email: "contact@jovavo.com",

    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },

    serviceType: [
      "Website Creation",
      "Custom Website Design",
      "Website Development",
      "Website Redesign",
      "Landing Page Design",
      "Ecommerce Website Development",
      "Google Ads Management",
      "Meta Ads Management",
      "Facebook Advertising",
      "Instagram Advertising",
      "Search Engine Optimization",
      "Conversion Rate Optimization",
    ],

    sameAs: [
      "https://instagram.com/jovavo.co",
      "https://github.com/Jovavoco",
    ],

    knowsAbout: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Google Ads",
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "SEO",
      "UI Design",
      "UX Design",
      "Website Performance",
      "Responsive Design",
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