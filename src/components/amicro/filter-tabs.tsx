"use client";

import { motion } from "framer-motion";

interface FilterTabsProps<T extends string> {
  categories: readonly T[] | T[];
  activeCategory: T;
  onSelect: (category: T) => void;
  layoutId?: string;
  className?: string;
}

export function FilterTabs<T extends string>({
  categories,
  activeCategory,
  onSelect,
  layoutId = "activeTabPill",
  className = "",
}: FilterTabsProps<T>) {
  return (
    <div
      className={`flex flex-wrap gap-1.5 p-1.5 rounded-full bg-bg-surface border border-border-subtle w-fit ${className}`}
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            className="relative px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-200 cursor-pointer z-10"
          >
            {isActive && (
              <motion.div
                layoutId={layoutId}
                className="absolute inset-0 bg-accent rounded-full -z-10 shadow-[0_0_20px_rgba(79,140,255,0.35)]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className={isActive ? "text-bg font-semibold" : "text-secondary hover:text-primary"}>
              {cat}
            </span>
          </button>
        );
      })}
    </div>
  );
}
