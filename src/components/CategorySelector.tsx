
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
    <div className="grid grid-cols-3 gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={cn(
            "px-4 py-2 rounded-lg border transition-colors duration-200",
            selectedCategory === category
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
