
import { Check } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  benefits: string[];
  isVegan?: boolean;
  isFastAbsorbing?: boolean;
  isNatural?: boolean;
}

const ProductCard = ({
  name,
  description,
  price,
  image,
  benefits,
  isVegan = true,
  isFastAbsorbing = false,
  isNatural = true,
}: ProductCardProps) => {
  return (
    <div className="product-card group h-full flex flex-col">
      <div className="relative h-48 mb-4 overflow-hidden rounded-xl bg-trurootx-green-light flex items-center justify-center">
        <img
          src={image}
          alt={name}
          className="h-40 w-auto object-cover transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className="font-medium text-primary">{price}</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="mt-auto">
          <div className="flex gap-2 mb-4">
            {isVegan && (
              <span className="inline-flex items-center rounded-full bg-trurootx-green-light px-2.5 py-1 text-xs font-medium text-primary">
                Vegan
              </span>
            )}
            {isFastAbsorbing && (
              <span className="inline-flex items-center rounded-full bg-trurootx-peach-light px-2.5 py-1 text-xs font-medium text-primary">
                Fast Absorbing
              </span>
            )}
            {isNatural && (
              <span className="inline-flex items-center rounded-full bg-trurootx-green-light px-2.5 py-1 text-xs font-medium text-primary">
                Natural
              </span>
            )}
          </div>
          
          <ul className="space-y-1">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-xs text-muted-foreground">
                <Check className="h-3 w-3 text-primary mr-2" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full mt-4 pill-button-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
