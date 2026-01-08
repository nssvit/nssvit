/**
 * ╻ NSS-VIT
 * ┃ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * ┃ Not Me, But You
 * ┃
 * ┃ ImpactSection.tsx
 * ╹ src/components/camp/
 */

interface Impact {
  title: string;
  description: string;
  imgSrc: string;
  altText: string;
}

interface Props {
  items: Impact[];
  title?: string;
  subtitle?: string;
}

export default function ImpactSection({
  items,
  title = 'Impact',
  subtitle = 'See how our initiatives have created meaningful change in communities.'
}: Props) {
  return (
    <div className="border-t border-swiss-gray-200 pt-10 md:pt-16 mt-10 md:mt-16">
      <h4 className="text-title md:text-headline text-text mb-3 md:mb-4 text-center">{title}</h4>
      <p className="text-caption md:text-body text-swiss-gray-600 text-center mb-8 md:mb-12 max-w-2xl mx-auto">
        {subtitle}
      </p>

      <div className="space-y-10 md:space-y-16">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
              <img
                src={item.imgSrc}
                alt={item.altText}
                className="w-full h-48 md:h-80 object-cover border border-swiss-gray-200 md:grayscale md:hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
              <h5 className="text-caption md:text-title font-semibold text-text mb-3 md:mb-4">{item.title}</h5>
              <div className="w-10 md:w-12 h-px bg-primary mb-3 md:mb-4"></div>
              <p className="text-caption md:text-body text-swiss-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
