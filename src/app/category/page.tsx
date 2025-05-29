export const dynamic = "force-dynamic";
export const revalidate = 60;

// import { wisp } from "@/lib/wisp";
import Link from "next/link";
import { FullWidthHeader } from "../../components/FullWidthHeader";
import { Metadata } from "next";
import { config } from "@/config";
import { getOgImageUrl } from "@/lib/ogImage";
import { tags } from "@/app/mock/tags";

export const metadata: Metadata = {
  title: `Blog post categories`,
  description: `List of all categories on ${config.organization}`,
  openGraph: {
    title: `Blog post categories`,
    description: `List of all blog post categories on ${config.organization}`,
    images: [getOgImageUrl(`Blog Post Categories`)],
  },
};

export default async function Page() {
  return (
    <>
      <FullWidthHeader
        title="Categorias"
        description="Explore os posts do blog por categoria"
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Category", href: `/category/` },
        ]}
      />
      <div className="container mx-auto text-xl px-4 mb-10 max-w-6xl">
        {tags.map((tag) => (
          <Link key={tag.id} href={`/category/${tag.name}`}>
            <div className="inline-block mr-4 mt-2">#{tag.name}</div>
          </Link>
        ))}
      </div>
    </>
  );
}
