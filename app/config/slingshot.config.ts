import modelConfig from './model.config';
import type { ModelConfig } from './model.config';

type Provider = keyof ModelConfig;
type ModelForProvider = ModelConfig[Provider]['models'][number]['modelName'];

type SlingshotConfig = {
  modelConfig: ModelConfig;
  default: {
    provider: Provider;
    model: ModelForProvider;
  };
  features: {
    allowModelSwitching: boolean;
  };
  samplePrompts: {
    text: string;
  }[];
};

const slingshotConfig: SlingshotConfig = {
  modelConfig,
  default: {
    provider: 'OpenAI',
    model: 'gpt-4o',
  },
  features: {
    allowModelSwitching: false,
  },
  samplePrompts: [
    { text: 'Build a todo app in React using Tailwind' },
    { text: 'Build a simple blog using Astro' },
    { text: 'Create a cookie consent form using Material UI' },
    { text: 'Make a space invaders game' },
    { text: 'How do I center a div?' },
  ],
} as const;

export default slingshotConfig;
