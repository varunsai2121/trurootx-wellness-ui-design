
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Energy Boost Strips',
    description: 'Fast-dissolving oral strips with natural caffeine and B-vitamins for immediate energy.',
    price: '₹599',
    image: 'https://images.unsplash.com/photo-1562592306-54967af3926d?auto=format&fit=crop&q=80&w=300&h=300',
    benefits: ['Dissolves in seconds', 'Natural caffeine', 'B-vitamin complex', '30 strips per pack'],
    isVegan: true,
    isFastAbsorbing: true,
    isNatural: true,
  },
  {
    id: 2,
    name: 'Calm & Focus Strips',
    description: 'Oral strips with L-theanine and adaptogens for stress relief and mental clarity.',
    price: '₹599',
    image: 'https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?auto=format&fit=crop&q=80&w=300&h=300',
    benefits: ['Promotes relaxation', 'Enhances focus', 'No drowsiness', '30 strips per pack'],
    isVegan: true,
    isFastAbsorbing: true,
    isNatural: true,
  },
  {
    id: 3,
    name: 'Sleep Well Gummies',
    description: 'Delicious gummies with melatonin, magnesium, and herbal extracts for quality sleep.',
    price: '₹599',
    image: 'https://images.unsplash.com/photo-1610021685072-c00794cc6077?auto=format&fit=crop&q=80&w=300&h=300',
    benefits: ['Promotes deep sleep', 'Non-habit forming', 'Wake refreshed', '60 gummies per bottle'],
    isVegan: true,
    isFastAbsorbing: false,
    isNatural: true,
  },
  {
    id: 4,
    name: 'Immunity Support Gummies',
    description: 'Vitamin C, zinc, and elderberry gummies to strengthen your immune system naturally.',
    price: '₹599',
    image: 'https://images.unsplash.com/photo-1628616697652-756553c93f08?auto=format&fit=crop&q=80&w=300&h=300',
    benefits: ['Antioxidant support', 'Year-round protection', 'Delicious berry flavor', '60 gummies per bottle'],
    isVegan: true,
    isFastAbsorbing: false,
    isNatural: true,
  }
];

const ProductShowcase = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Our Premium Products</h2>
          <p className="section-subtitle">
            Revolutionary delivery systems meet powerful plant ingredients for optimal wellness.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              image={product.image}
              benefits={product.benefits}
              isVegan={product.isVegan}
              isFastAbsorbing={product.isFastAbsorbing}
              isNatural={product.isNatural}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="pill-button-secondary">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
