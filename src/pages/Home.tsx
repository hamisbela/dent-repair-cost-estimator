import React from 'react';
import Calculator from '../components/Calculator';
import { DollarSign, Car, Clock, Shield } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Estimate Your Dent Repair Costs Calculator</h1>
      <Calculator />
      
      <div className="mt-16 max-w-4xl mx-auto">
        {/* Trust Indicators */}
        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-6 w-6 text-blue-600" />
              <p className="text-sm text-gray-700">All our estimates are based on real market data from certified auto body shops</p>
            </div>
            <div className="flex items-center space-x-3">
              <DollarSign className="h-6 w-6 text-blue-600" />
              <p className="text-sm text-gray-700">Get accurate dent repair cost estimates to plan your budget effectively</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">Dent Repair Cost Estimator - Your Comprehensive Guide to Auto Body Repair Costs</h2>
            <div className="prose max-w-none text-gray-700">
              <p>Welcome to DentRepairCostEstimator.com, your trusted dent repair cost estimator for accurate auto body repair calculations. Our dent repair cost calculator helps you plan your repair budget with confidence, whether you're dealing with a small door ding or major body damage.</p>
              
              <h3 className="text-2xl font-semibold mt-8 mb-4">Average Dent Repair Costs in {new Date().getFullYear()}</h3>
              <div className="grid md:grid-cols-2 gap-6 my-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Small Dents</h4>
                  <p className="text-2xl font-bold text-blue-600">$150 - $300</p>
                  <p className="text-sm text-gray-600">1-2 inch dents, no paint damage</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Large Dents</h4>
                  <p className="text-2xl font-bold text-blue-600">$750 - $2,000+</p>
                  <p className="text-sm text-gray-600">4+ inch dents with paint damage</p>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Factors Affecting Dent Repair Costs</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Dent Size:</strong> Larger dents require more time and materials to repair</li>
                <li><strong>Vehicle Type:</strong> Luxury and exotic cars typically cost more to repair</li>
                <li><strong>Paint Damage:</strong> Repairs requiring paint matching and blending cost significantly more</li>
                <li><strong>Location:</strong> Dents in difficult-to-access areas may require additional labor</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Repair Methods and Costs</h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-md">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left">Method</th>
                      <th className="px-6 py-3 text-left">Cost Range</th>
                      <th className="px-6 py-3 text-left">Best For</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">PDR (Paintless)</td>
                      <td className="px-6 py-4">$50 - $150</td>
                      <td className="px-6 py-4">Small, shallow dents</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Traditional Body Work</td>
                      <td className="px-6 py-4">$200 - $1,000</td>
                      <td className="px-6 py-4">Medium dents with paint damage</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Panel Replacement</td>
                      <td className="px-6 py-4">$500 - $2,500+</td>
                      <td className="px-6 py-4">Severe damage</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Money-Saving Tips</h3>
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Get Multiple Quotes</h4>
                    <p>Compare estimates from different auto body shops to ensure you're getting a fair price.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Car className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h4 className="font-bold">Consider PDR When Possible</h4>
                    <p>Paintless Dent Repair is often cheaper and faster than traditional body work.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Why Use Our Dent Repair Cost Estimator?</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Instant, accurate dent repair cost estimates</li>
                <li>Comprehensive cost breakdown</li>
                <li>Updated pricing data for {new Date().getFullYear()}</li>
                <li>User-friendly calculator interface</li>
                <li>Detailed repair guides and resources</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;