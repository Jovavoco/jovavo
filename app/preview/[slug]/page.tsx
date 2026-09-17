import { notFound } from "next/navigation";
import HouseOfLaser from "@/components/previews/HouseOfLaser";

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== "house-of-laser") {
    notFound();
  }

  return <HouseOfLaser />;
}