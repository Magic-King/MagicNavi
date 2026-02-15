import { useState } from "react";
import type { Site } from "../../types";

interface SiteCardProps {
  site: Site;
}

export function SiteCard({ site }: SiteCardProps) {
  const [imgError, setImgError] = useState(false);

  const initial = site.name.charAt(0).toUpperCase();

  function handleClick() {
    window.open(site.url, "_blank", "noopener,noreferrer");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  }

  return (
    <div
      className="site-card"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      title={site.url}
    >
      <div className="site-card-icon">
        {site.icon && !imgError ? (
          <img
            src={site.icon}
            alt={site.name}
            className="site-card-favicon"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="site-card-initial">{initial}</span>
        )}
      </div>
      <div className="site-card-info">
        <span className="site-card-name">{site.name}</span>
        {site.description && (
          <span className="site-card-desc">{site.description}</span>
        )}
      </div>
    </div>
  );
}
