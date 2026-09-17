import { useEffect } from "react";
import { site } from "../data/site";

type SEOProps = {
  title?: string;
  description?: string;
  robots?: string;
};

export function SEO({ title, description, robots }: SEOProps) {
  useEffect(() => {
    const pageTitle = title ? `${title} | Justin Avne` : site.title;
    document.title = pageTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description || site.description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", pageTitle);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description || site.description);
    }

    const ogImageUrl = `${site.url}/og-image.png`;
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", ogImageUrl);
    const ogImageSecure = document.querySelector('meta[property="og:image:secure_url"]');
    if (ogImageSecure) ogImageSecure.setAttribute("content", ogImageUrl);
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute("content", ogImageUrl);

    const existingRobots = document.querySelector('meta[name="robots"]');
    if (robots) {
      const tag = existingRobots ?? document.createElement("meta");
      tag.setAttribute("name", "robots");
      tag.setAttribute("content", robots);
      tag.setAttribute("data-page-robots", "true");
      if (!existingRobots) document.head.appendChild(tag);
    }

    return () => {
      if (!robots) return;
      const tag = document.querySelector('meta[name="robots"]');
      if (tag?.getAttribute("data-page-robots") === "true") {
        tag.remove();
      }
    };
  }, [title, description, robots]);

  return null;
}
