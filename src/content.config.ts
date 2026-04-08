import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export const collections = {
  sections: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/sections" }),
    schema: ({ image }) =>
      z.object({
        enable: z.boolean().optional(),
        draft: z.boolean().optional(),
        title: z.string().optional(),
        badge: z.string().optional(),
        subtitle: z.string().optional(),
        description: z.string().optional(),
        // Safe Image Fallback: Accepts Astro ImageMetadata or a raw string URL
        image: z.union([image(), z.string()]).optional(),
        ratingContent: z.string().optional(),
        features: z.array(z.string()).optional(),
        subscription: z
          .object({
            enable: z.boolean().optional(),
          })
          .optional(),
        // Explicit Buttons Array (from home-banner)
        buttons: z
          .array(
            z.object({
              enable: z.boolean().optional(),
              label: z.string(),
              url: z.string().optional(),
              type: z.string().optional(),
              rel: z.string().optional(),
              target: z.string().optional(),
              video: z
                .object({
                  src: z.string(),
                  type: z.string().optional(),
                  provider: z.string().optional(),
                  poster: z.string().optional(),
                  autoplay: z.boolean().optional(),
                  id: z.string().optional(),
                })
                .optional(),
            }),
          )
          .optional(),
        // Single CTA Button (from call-to-action)
        ctaBtn: z
          .object({
            enable: z.boolean().optional(),
            label: z.string(),
            url: z.string().optional(),
            type: z.string().optional(),
            rel: z.string().optional(),
            target: z.string().optional(),
            video: z
              .object({
                src: z.string(),
                type: z.string().optional(),
                provider: z.string().optional(),
                poster: z.string().optional(),
                autoplay: z.boolean().optional(),
                id: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
        // Marquee configuration (from customers)
        marquee: z
          .object({
            elementWidthAuto: z.boolean().optional(),
            elementWidth: z.string().optional(),
            elementHeight: z.string().optional(),
            elementWidthInSmallDevices: z.string().optional(),
            pauseOnHover: z.boolean().optional(),
            reverse: z.string().optional(),
            duration: z.string().optional(),
          })
          .optional(),
        // Discriminated Union for the overloaded 'list' property
        list: z
          .union([
            // A. Customers List (Images)
            z.array(
              z.object({
                src: z.union([image(), z.string()]),
                alt: z.string().optional(),
              }),
            ),
            // B. Features List (Text)
            z.array(
              z.object({
                title: z.string(),
                description: z.string().optional(),
              }),
            ),
          ])
          .optional(),
        // Nested Customers override (e.g., inside home-banner.md)
        customers: z
          .object({
            enable: z.boolean().optional(),
            description: z.string().optional(),
            list: z
              .array(
                z.object({
                  src: z.union([image(), z.string()]),
                  alt: z.string().optional(),
                }),
              )
              .optional(),
          })
          .optional(),
      }),
  }),

  homepage: defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/homepage" }),
    schema: ({ image }) =>
      z.object({
        draft: z.boolean().optional(),
        title: z.string().optional(),
        description: z.string().optional(),
        metaTitle: z.string().optional(),
        metaDescription: z.string().optional(),
        image: z.union([image(), z.string()]).optional(),
        // Global SEO / Meta Fields
        date: z.union([z.date(), z.string()]).optional(),
        canonical: z.string().optional(),
        keywords: z.array(z.string()).optional(),
        robots: z.string().optional(),
        excludeFromSitemap: z.boolean().optional(),
        author: z.string().optional(),
        tagline: z.string().optional(),
        disableTagline: z.boolean().optional(),
      }),
  }),
};
