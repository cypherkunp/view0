import modelConfig, { OpenAIModel, Provider } from './model.config';
import type { ModelConfig } from './model.config';

type ProviderType = (typeof Provider)[keyof typeof Provider];
type ModelForProvider = ModelConfig[ProviderType]['models'][number]['modelName'];

type SlingshotConfig = {
  modelConfig: ModelConfig;
  default: {
    provider: ProviderType;
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
    provider: Provider.OpenAI,
    model: OpenAIModel.GPT4o,
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
