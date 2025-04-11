
import { Leaf, Clock, CheckCircle, Beaker } from 'lucide-react';

const features = [
  {
    icon: <CheckCircle className="h-10 w-10 text-primary" />,
    title: '100% Vegan',
    description: 'All our products are plant-based and cruelty-free, with no animal ingredients or testing.'
  },
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: 'Fast-Acting',
    description: 'Our unique formulations ensure quick absorption for faster results when you need them most.'
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Naturally Sourced',
    description: 'We use only premium plant extracts and natural ingredients with no artificial additives.'
  },
  {
    icon: <Beaker className="h-10 w-10 text-primary" />,
    title: 'Scientifically Proven',
    description: 'All formulations are backed by research and developed by nutrition scientists.'
  }
];

const WhyTruRootX = () => {
  return (
    <section id="why-trurootx" className="py-20 bg-trurootx-green-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Why TruRootX</h2>
          <p className="section-subtitle">
            Our commitment to quality, efficacy, and sustainability sets us apart.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center p-3 bg-trurootx-green-light rounded-full mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="mb-4 text-muted-foreground">
                At TruRootX, we believe that the power of plants, backed by science, 
                can transform wellbeing. Our mission is to create effective, accessible, 
                and sustainable wellness supplements that help people thrive naturally.
              </p>
              <button className="pill-button-outline inline-flex">
                Learn About Our Process
              </button>
            </div>
            <div className="flex-1 bg-trurootx-peach-light rounded-2xl p-6 aspect-square max-w-md flex items-center justify-center">
              <span className="text-lg text-center font-medium">
                "From carefully sourced ingredients to sustainable packaging, every detail matters."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTruRootX;
