import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">About DentRepairCostEstimator.com</h1>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Users className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Expert Team</h3>
          <p className="text-gray-600">Our team of auto body repair experts brings years of industry experience to help you estimate repair costs.</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Target className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Accurate Estimates</h3>
          <p className="text-gray-600">We use real market data to provide the most accurate dent repair cost estimates possible.</p>
        </div>
        
        <div className="text-center p-6 bg-white rounded-lg shadow-lg">
          <Shield className="h-12 w-12 mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-bold mb-2">Trusted Service</h3>
          <p className="text-gray-600">Thousands of customers trust our estimates for their auto body repair plans every month.</p>
        </div>
      </div>
      
      <div className="prose max-w-none">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="mb-4">DentRepairCostEstimator.com was founded with a simple mission: to make auto body repair cost estimation transparent and accessible to everyone. We understand that unexpected vehicle damage can be stressful and expensive, which is why we've developed a comprehensive tool to help you plan your budget effectively.</p>
        
        <h2 className="text-3xl font-bold mb-6 mt-12">Our Commitment</h2>
        <p className="mb-4">We are committed to providing accurate, reliable dent repair cost estimates to help you make informed decisions about your vehicle repairs. Our calculator takes into account various factors that influence repair costs, ensuring you get the most accurate estimate possible.</p>
        
        <h2 className="text-3xl font-bold mb-6 mt-12">Why Choose Us</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Free, instant dent repair cost estimates</li>
          <li>Comprehensive calculation factors</li>
          <li>User-friendly interface</li>
          <li>Regular updates based on market rates</li>
          <li>Dedicated customer support</li>
        </ul>
      </div>
    </div>
  );
};

export default About;