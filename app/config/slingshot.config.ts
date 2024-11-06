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
};

const slingshotConfig: SlingshotConfig = {
  modelConfig,
  default: {
    provider: 'OpenAI',
    model: 'gpt-4o',
  },
} as const;

export default slingshotConfig;
