
import React from 'react';
import { cn } from '@/lib/utils';

interface CategorySelectorProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
  selectedCategory: string | null;
}

export const CategorySelector: React.FC<CategorySelectorProps> = ({ 
  categories, 
  onSelectCategory, 
  selectedCategory 
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "px-4 py-3 rounded-lg border transition-all duration-200",
            "hover:scale-105 active:scale-100",
            selectedCategory === category
              ? "bg-primary/20 border-primary text-primary"
              : "border-border bg-secondary/50 text-muted-foreground hover:text-foreground hover:border-primary/50"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
