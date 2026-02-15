/** A single search engine configuration */
export interface SearchEngine {
  /** Display name */
  name: string;
  /** Search URL prefix, the query string will be appended */
  url: string;
  /** Optional icon URL (leave empty to show default) */
  icon: string;
}

/** A single site entry */
export interface Site {
  /** Display name */
  name: string;
  /** Full URL to navigate to */
  url: string;
  /** Optional short description (leave empty to hide) */
  description: string;
  /** Optional icon/favicon URL (leave empty to show name initial) */
  icon: string;
}

/** A category containing multiple sites */
export interface SiteCategory {
  /** Category display name */
  name: string;
  /** List of sites in this category */
  sites: Site[];
}
