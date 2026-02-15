import type { Site } from "../../types";
import { SiteCard } from "./SiteCard";
import "./SiteGrid.css";

interface SiteGridProps {
  sites: Site[];
}

export function SiteGrid({ sites }: SiteGridProps) {
  if (sites.length === 0) {
    return (
      <div className="site-grid">
        <div className="site-grid-empty">No sites in this category.</div>
      </div>
    );
  }

  return (
    <div className="site-grid">
      {sites.map((site) => (
        <SiteCard key={site.url} site={site} />
      ))}
    </div>
  );
}
