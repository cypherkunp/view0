export type ModelInfo = {
  modelName: string;
  modelLabel: string;
};

export type ProviderConfig = {
  label: string;
  models: ModelInfo[];
};

export enum Provider {
  Anthropic = 'Anthropic',
  OpenAI = 'OpenAI',
  OpenRouter = 'OpenRouter',
  Google = 'Google',
  Groq = 'Groq',
  Deepseek = 'Deepseek',
  Mistral = 'Mistral',
  Ollama = 'Ollama',
  OpenAILike = 'OpenAILike',
}

export enum AnthropicModel {
  Claude35Sonnet = 'claude-3-5-sonnet-20240620',
  Claude3Opus = 'claude-3-opus-20240229',
  Claude3Sonnet = 'claude-3-sonnet-20240229',
  Claude3Haiku = 'claude-3-haiku-20240307',
}

export enum OpenAIModel {
  GPT4o = 'gpt-4o',
  GPT4oMini = 'gpt-4o-mini',
  GPT4Turbo = 'gpt-4-turbo',
  GPT4 = 'gpt-4',
  GPT35Turbo = 'gpt-3.5-turbo',
}

export enum OpenRouterModel {
  Claude35Sonnet = 'anthropic/claude-3.5-sonnet',
  Claude3Haiku = 'anthropic/claude-3-haiku',
  DeepseekCoder = 'deepseek/deepseek-coder',
  GeminiFlash = 'google/gemini-flash-1.5',
  GeminiPro = 'google/gemini-pro-1.5',
  MistralNemo = 'mistralai/mistral-nemo',
  Qwen110bChat = 'qwen/qwen-110b-chat',
  CohereCommand = 'cohere/command',
}

export enum GoogleModel {
  GeminiFlash = 'gemini-1.5-flash-latest',
  GeminiPro = 'gemini-1.5-pro-latest',
}

export enum GroqModel {
  Llama3170b = 'llama-3.1-70b-versatile',
  Llama318b = 'llama-3.1-8b-instant',
  Llama3211bVision = 'llama-3.2-11b-vision-preview',
  Llama323b = 'llama-3.2-3b-preview',
  Llama321b = 'llama-3.2-1b-preview',
}

export type ModelConfig = {
  [Provider.Anthropic]: ProviderConfig;
  [Provider.OpenAI]: ProviderConfig;
  [Provider.OpenRouter]: ProviderConfig;
  [Provider.Google]: ProviderConfig;
  [Provider.Groq]: ProviderConfig;
  [Provider.Deepseek]: ProviderConfig;
  [Provider.Mistral]: ProviderConfig;
  [Provider.Ollama]: ProviderConfig;
  [Provider.OpenAILike]: ProviderConfig;
};

const modelConfig: ModelConfig = {
  [Provider.Anthropic]: {
    label: 'Anthropic',
    models: [
      { modelName: AnthropicModel.Claude35Sonnet, modelLabel: 'Claude 3.5 Sonnet' },
      { modelName: AnthropicModel.Claude3Opus, modelLabel: 'Claude 3 Opus' },
      { modelName: AnthropicModel.Claude3Sonnet, modelLabel: 'Claude 3 Sonnet' },
      { modelName: AnthropicModel.Claude3Haiku, modelLabel: 'Claude 3 Haiku' },
    ],
  },
  [Provider.OpenAI]: {
    label: 'OpenAI',
    models: [
      { modelName: OpenAIModel.GPT4o, modelLabel: 'GPT-4o' },
      { modelName: OpenAIModel.GPT4oMini, modelLabel: 'GPT-4o Mini' },
      { modelName: OpenAIModel.GPT4Turbo, modelLabel: 'GPT-4 Turbo' },
      { modelName: OpenAIModel.GPT4, modelLabel: 'GPT-4' },
      { modelName: OpenAIModel.GPT35Turbo, modelLabel: 'GPT-3.5 Turbo' },
    ],
  },
  [Provider.OpenRouter]: {
    label: 'OpenRouter',
    models: [
      { modelName: OpenRouterModel.Claude35Sonnet, modelLabel: 'Anthropic: Claude 3.5 Sonnet' },
      { modelName: OpenRouterModel.Claude3Haiku, modelLabel: 'Anthropic: Claude 3 Haiku' },
      { modelName: OpenRouterModel.DeepseekCoder, modelLabel: 'Deepseek-Coder V2 236B' },
      { modelName: OpenRouterModel.GeminiFlash, modelLabel: 'Google Gemini Flash 1.5' },
      { modelName: OpenRouterModel.GeminiPro, modelLabel: 'Google Gemini Pro 1.5' },
      { modelName: OpenRouterModel.MistralNemo, modelLabel: 'OpenRouter Mistral Nemo' },
      { modelName: OpenRouterModel.Qwen110bChat, modelLabel: 'OpenRouter Qwen 110b Chat' },
      { modelName: OpenRouterModel.CohereCommand, modelLabel: 'Cohere Command' },
    ],
  },
  [Provider.Google]: {
    label: 'Google',
    models: [
      { modelName: GoogleModel.GeminiFlash, modelLabel: 'Gemini 1.5 Flash' },
      { modelName: GoogleModel.GeminiPro, modelLabel: 'Gemini 1.5 Pro' },
    ],
  },
  [Provider.Groq]: {
    label: 'Groq',
    models: [
      { modelName: GroqModel.Llama3170b, modelLabel: 'Llama 3.1 70b' },
      { modelName: GroqModel.Llama318b, modelLabel: 'Llama 3.1 8b' },
      { modelName: GroqModel.Llama3211bVision, modelLabel: 'Llama 3.2 11b' },
      { modelName: GroqModel.Llama323b, modelLabel: 'Llama 3.2 3b' },
      { modelName: GroqModel.Llama321b, modelLabel: 'Llama 3.2 1b' },
    ],
  },
  [Provider.Deepseek]: {
    label: 'Deepseek',
    models: [
      { modelName: 'deepseek-coder', modelLabel: 'Deepseek-Coder' },
      { modelName: 'deepseek-chat', modelLabel: 'Deepseek-Chat' },
    ],
  },
  [Provider.Mistral]: {
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
  [Provider.Ollama]: {
    label: 'Ollama',
    models: [],
  },
  [Provider.OpenAILike]: {
    label: 'OpenAILike',
    models: [],
  },
};

export default modelConfig;
