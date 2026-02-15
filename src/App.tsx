import { useState } from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { CategoryTabs } from "./components/CategoryTabs/CategoryTabs";
import { SiteGrid } from "./components/SiteGrid/SiteGrid";
import { siteCategories } from "./config/sites";
import "./App.css";

function App() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = siteCategories[activeCategoryIndex];

  return (
    <div className="app">
      <h1 className="app-title">MagicNavi</h1>
      <SearchBar />
      <div className="app-content">
        <CategoryTabs
          categories={siteCategories}
          activeIndex={activeCategoryIndex}
          onSelect={setActiveCategoryIndex}
        />
        <SiteGrid sites={activeCategory?.sites ?? []} />
      </div>
    </div>
  );
}

export default App;
