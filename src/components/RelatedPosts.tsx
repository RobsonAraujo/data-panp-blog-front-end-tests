"use client";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import type { GetRelatedPostsResult } from "@wisp-cms/client";
import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent } from "react";

export const RelatedPosts: FunctionComponent<{
  posts: GetRelatedPostsResult["posts"];
}> = ({ posts }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="my-8">
      <div className="mb-6 text-lg font-semibold tracking-tight">
        Posts relacionados
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        {posts.slice(0, 4).map((post) => (
          <div className=" bg-muted overflow-hidden rounded-lg" key={post.id}>
            <Link href={`/noticia/${post.slug}`}>
              <AspectRatio ratio={16 / 9} className="w-full">
                <Image
                  src={post.image || "/placeholder.jpg"}
                  alt={post.title}
                  fill
                  className="h -full min-h-full min-w-full object-cover object-center"
                />
              </AspectRatio>
            </Link>
            <div className="prose prose-sm dark:prose-invert p-4">
              <h3 className="line-clamp-2">{post.title}</h3>
              <p className="line-clamp-3">{post.description}</p>
              <Link href={`/noticia/${post.slug}`}>
                <strong>Leia mais</strong>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
