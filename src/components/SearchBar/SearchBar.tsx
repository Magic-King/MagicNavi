import { useState, useRef, useEffect } from "react";
import { searchEngines } from "../../config/searchEngines";
import type { SearchEngine } from "../../types";
import "./SearchBar.css";

export function SearchBar() {
  const [query, setQuery] = useState("");
  const [engine, setEngine] = useState<SearchEngine>(searchEngines[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleSearch() {
    const trimmed = query.trim();
    if (!trimmed) return;
    window.open(engine.url + encodeURIComponent(trimmed), "_blank");
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function selectEngine(eng: SearchEngine) {
    setEngine(eng);
    setDropdownOpen(false);
    inputRef.current?.focus();
  }

  return (
    <div className="search-bar">
      <div className="search-bar-inner">
        {/* Engine selector dropdown */}
        <div className="engine-selector" ref={dropdownRef}>
          <button
            className="engine-toggle"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            type="button"
            aria-label="Select search engine"
          >
            {engine.icon ? (
              <img
                className="engine-icon"
                src={engine.icon}
                alt={engine.name}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (
                    e.target as HTMLImageElement
                  ).nextElementSibling?.classList.remove("hidden");
                }}
              />
            ) : null}
            {!engine.icon && (
              <span className="engine-initial">
                {engine.name.charAt(0)}
              </span>
            )}
            <span className="engine-name">{engine.name}</span>
            <svg
              className={`engine-arrow ${dropdownOpen ? "open" : ""}`}
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M3 4.5L6 7.5L9 4.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {dropdownOpen && (
            <ul className="engine-dropdown">
              {searchEngines.map((eng) => (
                <li
                  key={eng.name}
                  className={`engine-option ${
                    eng.name === engine.name ? "active" : ""
                  }`}
                  onClick={() => selectEngine(eng)}
                >
                  {eng.icon ? (
                    <img
                      className="engine-option-icon"
                      src={eng.icon}
                      alt={eng.name}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                      }}
                    />
                  ) : (
                    <span className="engine-option-initial">
                      {eng.name.charAt(0)}
                    </span>
                  )}
                  <span>{eng.name}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Search input */}
        <input
          ref={inputRef}
          className="search-input"
          type="text"
          placeholder="Search the web..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        {/* Search button */}
        <button
          className="search-button"
          onClick={handleSearch}
          type="button"
          aria-label="Search"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </button>
      </div>
    </div>
  );
}
