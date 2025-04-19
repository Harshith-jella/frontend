
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
            "px-6 py-4 rounded-2xl transition-all duration-200",
            "backdrop-blur-sm border border-white/10",
            "hover:border-[#00ffd5]/50",
            selectedCategory === category
              ? "bg-[#00ffd5]/10 border-[#00ffd5] text-[#00ffd5]"
              : "bg-black/20 text-gray-300"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
