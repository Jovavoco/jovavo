import { notFound } from "next/navigation";

import HouseOfLaser from "@/components/previews/HouseOfLaser";
import ClassiqueSalon from "@/components/previews/ClassiqueSalon";
import Verra from "@/components/previews/Verra";

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "house-of-laser") {
    return <HouseOfLaser />;
  }

  if (slug === "classique-salon") {
    return <ClassiqueSalon />;
  }

  if (slug === "verra") {
    return <Verra />;
  }

  notFound();
}