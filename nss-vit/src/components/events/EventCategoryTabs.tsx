/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ EventCategoryTabs.tsx
 * ╹ src/components/events/
 */

interface Category {
  id: string;
  name: string;
}

interface Props {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export default function EventCategoryTabs({
  categories,
  activeCategory,
  onCategoryChange
}: Props) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-swiss-gray-200 pb-4">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 text-caption font-medium transition-colors ${
            activeCategory === category.id
              ? 'bg-primary text-white'
              : 'bg-swiss-gray-50 text-swiss-gray-600 hover:bg-swiss-gray-100'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
