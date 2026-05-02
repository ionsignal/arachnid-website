import socialData from "@/config/social.json";
import type { SocialLink } from "@/types";

/**
 * Platforms that surface in the site header chip slot (both global marketing
 * header and docs header). The rest of the entries in `social.json` continue
 * to surface in the footer / share contexts.
 *
 * To add or remove a header chip, edit this list — not the consuming Astro
 * components. This is the single source of truth for "which socials live in
 * the header."
 */
const HEADER_PLATFORMS = ["github", "discord"] as const;

/**
 * Curated list of social links to render in the header chip slot.
 * Filters by enabled state and platform whitelist; preserves the order
 * defined in `social.json`.
 */
export const headerSocials: SocialLink[] = socialData.main.filter(
  (link) =>
    link.enable &&
    (HEADER_PLATFORMS as readonly string[]).includes(link.label.toLowerCase()),
) as SocialLink[];
