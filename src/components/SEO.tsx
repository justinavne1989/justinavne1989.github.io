import { useEffect } from "react";
import { site } from "../data/site";

type SEOProps = {
  title?: string;
  description?: string;
};

export function SEO({ title, description }: SEOProps) {
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
  }, [title, description]);

  return null;
}
