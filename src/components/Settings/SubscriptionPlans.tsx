import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '$99',
    description: 'Essential features for small teams',
    features: [
      'Up to 5 team members',
      'Basic document analysis',
      'Standard reports',
      'Email support'
    ],
    current: false
  },
  {
    name: 'Professional',
    price: '$199',
    description: 'Advanced features for growing businesses',
    features: [
      'Up to 20 team members',
      'Advanced AI analysis',
      'Custom report templates',
      'Priority support',
      'API access'
    ],
    current: true
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Custom solutions for large organizations',
    features: [
      'Unlimited team members',
      'Custom AI models',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantees'
    ],
    current: false
  }
];

const SubscriptionPlans = () => {
  return (
    <div className="space-y-6">
      {/* Current Plan */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium text-gray-900">Current Plan</h2>
            <p className="text-sm text-gray-600">Professional Plan - $199/month</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              View Invoice History
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel Subscription
            </button>
          </div>
        </div>
      </div>

      {/* Available Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-lg shadow-sm overflow-hidden ${
              plan.current ? 'ring-2 ring-blue-600' : ''
            }`}
          >
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
                {plan.current && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Current Plan
                  </span>
                )}
              </div>
              <p className="mt-4">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">/month</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
            </div>

            <div className="px-6 pb-6">
              <ul className="mt-4 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="ml-3 text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full px-4 py-2 border rounded-lg text-sm font-medium ${
                  plan.current
                    ? 'border-blue-600 text-blue-600 cursor-default'
                    : plan.name === 'Enterprise'
                    ? 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    : 'border-transparent bg-blue-600 text-white hover:bg-blue-700'
                }`}
                disabled={plan.current}
              >
                {plan.current
                  ? 'Current Plan'
                  : plan.name === 'Enterprise'
                  ? 'Contact Sales'
                  : 'Upgrade Plan'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPlans;