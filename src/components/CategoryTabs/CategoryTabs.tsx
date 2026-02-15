import { useRef, useCallback, useEffect } from "react";
import type { SiteCategory } from "../../types";
import "./CategoryTabs.css";

interface CategoryTabsProps {
  categories: SiteCategory[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function CategoryTabs({
  categories,
  activeIndex,
  onSelect,
}: CategoryTabsProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const hasMoved = useRef(false);

  const count = categories.length;

  function handlePrev() {
    const newIndex = (activeIndex - 1 + count) % count;
    onSelect(newIndex);
    scrollActiveIntoView(newIndex);
  }

  function handleNext() {
    const newIndex = (activeIndex + 1) % count;
    onSelect(newIndex);
    scrollActiveIntoView(newIndex);
  }

  function scrollActiveIntoView(index: number) {
    if (!scrollRef.current) return;
    const buttons = scrollRef.current.querySelectorAll(".category-tab");
    const target = buttons[index] as HTMLElement | undefined;
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }

  // --- Drag (mouse) scroll ---
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    hasMoved.current = false;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.scrollBehavior = "auto";
    scrollRef.current.style.cursor = "grabbing";
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    if (Math.abs(walk) > 3) {
      hasMoved.current = true;
    }
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
      scrollRef.current.style.cursor = "grab";
    }
  }, []);

  // --- Touch scroll (native, enhanced with swipe detection) ---
  const touchStartX = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      const diff = touchStartX.current - e.changedTouches[0].clientX;
      // Swipe threshold
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          // Swiped left -> next
          const newIndex = (activeIndex + 1) % count;
          onSelect(newIndex);
          scrollActiveIntoView(newIndex);
        } else {
          // Swiped right -> prev
          const newIndex = (activeIndex - 1 + count) % count;
          onSelect(newIndex);
          scrollActiveIntoView(newIndex);
        }
      }
    },
    [activeIndex, count, onSelect]
  );

  // Clean up drag on mouse leave
  useEffect(() => {
    function handleGlobalMouseUp() {
      if (isDragging.current) {
        isDragging.current = false;
        if (scrollRef.current) {
          scrollRef.current.style.scrollBehavior = "smooth";
          scrollRef.current.style.cursor = "grab";
        }
      }
    }
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <div className="category-tabs">
      <div
        className="category-tabs-container"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="category-arrow category-arrow-left"
          onClick={handlePrev}
          type="button"
          aria-label="Previous category"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="category-tabs-scroll" ref={scrollRef}>
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              className={`category-tab ${i === activeIndex ? "active" : ""}`}
              onClick={() => {
                // Prevent click after drag
                if (hasMoved.current) return;
                onSelect(i);
                scrollActiveIntoView(i);
              }}
              type="button"
            >
              {cat.name}
            </button>
          ))}
        </div>

        <button
          className="category-arrow category-arrow-right"
          onClick={handleNext}
          type="button"
          aria-label="Next category"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
