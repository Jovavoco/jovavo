import { notFound } from "next/navigation";

const previews = {};

type PreviewSlug = keyof typeof previews;

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const Preview =
    previews[slug as PreviewSlug];

  if (!Preview) {
    notFound();
  }

  return <Preview />;
}