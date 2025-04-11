
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductShowcase from '../components/ProductShowcase';
import WhyTruRootX from '../components/WhyTruRootX';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
        <WhyTruRootX />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
