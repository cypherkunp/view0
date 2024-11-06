export type ModelInfo = {
  modelName: string;
  modelLabel: string;
};

export type ProviderConfig = {
  label: string;
  models: ModelInfo[];
};

export type ModelConfig = {
  Anthropic: ProviderConfig;
  OpenAI: ProviderConfig;
  OpenRouter: ProviderConfig;
  Google: ProviderConfig;
  Groq: ProviderConfig;
  Deepseek: ProviderConfig;
  Mistral: ProviderConfig;
  Ollama: ProviderConfig;
  OpenAILike: ProviderConfig;
};

const modelConfig: ModelConfig = {
  Anthropic: {
    label: 'Anthropic',
    models: [
      { modelName: 'claude-3-5-sonnet-20240620', modelLabel: 'Claude 3.5 Sonnet' },
      { modelName: 'claude-3-opus-20240229', modelLabel: 'Claude 3 Opus' },
      { modelName: 'claude-3-sonnet-20240229', modelLabel: 'Claude 3 Sonnet' },
      { modelName: 'claude-3-haiku-20240307', modelLabel: 'Claude 3 Haiku' },
    ],
  },
  OpenAI: {
    label: 'OpenAI',
    models: [
      { modelName: 'gpt-4o', modelLabel: 'GPT-4o' },
      { modelName: 'gpt-4o-mini', modelLabel: 'GPT-4o Mini' },
      { modelName: 'gpt-4-turbo', modelLabel: 'GPT-4 Turbo' },
      { modelName: 'gpt-4', modelLabel: 'GPT-4' },
      { modelName: 'gpt-3.5-turbo', modelLabel: 'GPT-3.5 Turbo' },
    ],
  },
  OpenRouter: {
    label: 'OpenRouter',
    models: [
      { modelName: 'anthropic/claude-3.5-sonnet', modelLabel: 'Anthropic: Claude 3.5 Sonnet' },
      { modelName: 'anthropic/claude-3-haiku', modelLabel: 'Anthropic: Claude 3 Haiku' },
      { modelName: 'deepseek/deepseek-coder', modelLabel: 'Deepseek-Coder V2 236B' },
      { modelName: 'google/gemini-flash-1.5', modelLabel: 'Google Gemini Flash 1.5' },
      { modelName: 'google/gemini-pro-1.5', modelLabel: 'Google Gemini Pro 1.5' },
      { modelName: 'mistralai/mistral-nemo', modelLabel: 'OpenRouter Mistral Nemo' },
      { modelName: 'qwen/qwen-110b-chat', modelLabel: 'OpenRouter Qwen 110b Chat' },
      { modelName: 'cohere/command', modelLabel: 'Cohere Command' },
    ],
  },
  Google: {
    label: 'Google',
    models: [
      { modelName: 'gemini-1.5-flash-latest', modelLabel: 'Gemini 1.5 Flash' },
      { modelName: 'gemini-1.5-pro-latest', modelLabel: 'Gemini 1.5 Pro' },
    ],
  },
  Groq: {
    label: 'Groq',
    models: [
      { modelName: 'llama-3.1-70b-versatile', modelLabel: 'Llama 3.1 70b' },
      { modelName: 'llama-3.1-8b-instant', modelLabel: 'Llama 3.1 8b' },
      { modelName: 'llama-3.2-11b-vision-preview', modelLabel: 'Llama 3.2 11b' },
      { modelName: 'llama-3.2-3b-preview', modelLabel: 'Llama 3.2 3b' },
      { modelName: 'llama-3.2-1b-preview', modelLabel: 'Llama 3.2 1b' },
    ],
  },
  Deepseek: {
    label: 'Deepseek',
    models: [
      { modelName: 'deepseek-coder', modelLabel: 'Deepseek-Coder' },
      { modelName: 'deepseek-chat', modelLabel: 'Deepseek-Chat' },
    ],
  },
  Mistral: {
    label: 'Mistral',
    models: [
      { modelName: 'open-mistral-7b', modelLabel: 'Mistral 7B' },
      { modelName: 'open-mixtral-8x7b', modelLabel: 'Mistral 8x7B' },
      { modelName: 'open-mixtral-8x22b', modelLabel: 'Mistral 8x22B' },
      { modelName: 'open-codestral-mamba', modelLabel: 'Codestral Mamba' },
      { modelName: 'open-mistral-nemo', modelLabel: 'Mistral Nemo' },
      { modelName: 'ministral-8b-latest', modelLabel: 'Mistral 8B' },
      { modelName: 'mistral-small-latest', modelLabel: 'Mistral Small' },
      { modelName: 'codestral-latest', modelLabel: 'Codestral' },
      { modelName: 'mistral-large-latest', modelLabel: 'Mistral Large Latest' },
    ],
  },
  Ollama: {
    label: 'Ollama',
    models: [],
  },
  OpenAILike: {
    label: 'OpenAILike',
    models: [],
  },
};

export default modelConfig;
