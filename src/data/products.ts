export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  specs: { [key: string]: string };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Neural Interface Headset',
    price: 2499,
    image: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Gadgets',
    description: 'Next-generation brain-computer interface for seamless digital interaction.',
    features: ['Direct neural connectivity', 'Haptic feedback', 'AI-powered interface', '24-hour battery life'],
    specs: {
      'Connection': 'Wireless 6E',
      'Battery': '24 hours',
      'Weight': '180g',
      'Compatibility': 'Universal'
    }
  },
  {
    id: '2',
    name: 'Quantum Wellness Pod',
    price: 4999,
    image: 'https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wellness',
    description: 'Revolutionary wellness technology using quantum field therapy.',
    features: ['Quantum field therapy', 'Biometric monitoring', 'Personalized programs', 'Meditation enhancement'],
    specs: {
      'Dimensions': '200 x 100 x 80 cm',
      'Power': '220V AC',
      'Sessions': 'Unlimited',
      'Warranty': '5 years'
    }
  },
  {
    id: '3',
    name: 'Smart Fabric Jacket',
    price: 899,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    description: 'Intelligent clothing with climate control and health monitoring.',
    features: ['Temperature regulation', 'Health sensors', 'Wireless charging', 'Self-cleaning fabric'],
    specs: {
      'Material': 'Smart polymer blend',
      'Sizes': 'XS - XXL',
      'Battery': '7 days',
      'Washable': 'Yes'
    }
  },
  {
    id: '4',
    name: 'Holographic Display',
    price: 3299,
    image: 'https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Gadgets',
    description: 'Floating 3D holographic display for immersive computing.',
    features: ['3D holographic projection', 'Gesture control', 'Multi-device sync', 'Eye tracking'],
    specs: {
      'Resolution': '8K per eye',
      'Field of View': '120°',
      'Refresh Rate': '120Hz',
      'Connectivity': 'Wireless 6E'
    }
  },
  {
    id: '5',
    name: 'Biometric Recovery Ring',
    price: 599,
    image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wellness',
    description: 'Advanced health monitoring ring with recovery optimization.',
    features: ['24/7 health monitoring', 'Sleep optimization', 'Stress management', 'Recovery coaching'],
    specs: {
      'Materials': 'Titanium & Ceramic',
      'Battery': '7 days',
      'Water Resistance': 'IPX8',
      'Sensors': '12 advanced sensors'
    }
  },
  {
    id: '6',
    name: 'Adaptive Sneakers',
    price: 449,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Fashion',
    description: 'Self-lacing sneakers with adaptive comfort technology.',
    features: ['Auto-lacing system', 'Adaptive cushioning', 'Energy harvesting', 'Gait analysis'],
    specs: {
      'Sizes': '6 - 15',
      'Battery': '30 days',
      'Materials': 'Recycled carbon fiber',
      'Colors': '12 dynamic options'
    }
  }
];

export const categories = ['All', 'Gadgets', 'Wellness', 'Fashion'];