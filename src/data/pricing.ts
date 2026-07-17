import type { PricingPlan } from '../types';

export const pricingPlans: PricingPlan[] = [
  {
    icon: 'dumbbell',
    name: 'Basic',
    features: ['Personal Trainer', 'Service Locker Rooms', 'Fitness Assessment', 'Morning Slot'],
    price: '9.99',
  },
  {
    icon: 'activity',
    name: 'Premium',
    features: ['Personal Trainer', 'Service Locker Rooms', 'Fitness Assessment / Consultation', 'Morning & Evening Slot'],
    price: '24.99',
  },
  {
    icon: 'x',
    name: 'Advanced',
    features: ['Personal Trainer', 'Service Locker Rooms', 'Fitness Assessment', 'Morning Slot'],
    price: '14.99',
  },
];
