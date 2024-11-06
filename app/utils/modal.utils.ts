import type { ModelConfig } from '~/config/model.config';
import slingshotConfig from '~/config/slingshot.config';

export function getProviderForModel(modelName: string): keyof ModelConfig | undefined {
  for (const [provider, config] of Object.entries(slingshotConfig.modelConfig)) {
    if (config.models.some((model) => model.modelName === modelName)) {
      return provider as keyof ModelConfig;
    }

    if (modelName.includes('/')) {
      const [providerPrefix] = modelName.split('/');

      if (provider.toLowerCase() === providerPrefix.toLowerCase()) {
        return provider as keyof ModelConfig;
      }
    }
  }
  return undefined;
}
