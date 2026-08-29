import { useEffect } from "react";
import { site } from "../data/site";
import { asset } from "../data/site";

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

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute("content", asset("og-image.svg"));
  }, [title, description]);

  return null;
}
