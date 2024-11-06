import type { ModelInfo, OllamaApiResponse, OllamaModel } from './types';

export const WORK_DIR_NAME = 'project';
export const WORK_DIR = `/home/${WORK_DIR_NAME}`;
export const MODIFICATIONS_TAG_NAME = 'bolt_file_modifications';
export const MODEL_REGEX = /^\[Model: (.*?)\]\n\n/;

const getOllamaBaseUrl = (): string => {
  const defaultBaseUrl = import.meta.env.OLLAMA_API_BASE_URL || 'http://localhost:11434';

  if (typeof window !== 'undefined') {
    return defaultBaseUrl;
  }

  const isDocker = process.env.RUNNING_IN_DOCKER === 'true';

  return isDocker ? defaultBaseUrl.replace('localhost', 'host.docker.internal') : defaultBaseUrl;
};

async function getOllamaModels(): Promise<ModelInfo[]> {
  try {
    const baseUrl = getOllamaBaseUrl();
    const response = await fetch(`${baseUrl}/api/tags`);

    if (!response.ok) {
      console.error('Failed to fetch Ollama models:', response.statusText);
      return [];
    }

    const data = (await response.json()) as OllamaApiResponse;

    return data.models.map((model: OllamaModel) => ({
      name: model.name,
      label: `${model.name} (${model.details.parameter_size})`,
      provider: 'Ollama',
    }));
  } catch (error) {
    console.error('Error fetching Ollama models:', error);
    return [];
  }
}

async function getOpenAILikeModels(): Promise<ModelInfo[]> {
  try {
    const baseUrl = import.meta.env.OPENAI_LIKE_API_BASE_URL?.trim();
    const apiKey = import.meta.env.OPENAI_LIKE_API_KEY?.trim();

    if (!baseUrl || !apiKey) {
      return [];
    }

    const response = await fetch(`${baseUrl}/models`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch OpenAI-like models:', response.statusText);
      return [];
    }

    const res = (await response.json()) as unknown as { data: Array<{ id: string }> };

    return res.data.map((model) => ({
      name: model.id,
      label: model.id,
      provider: 'OpenAILike',
    }));
  } catch (error) {
    console.error('Error fetching OpenAI-like models:', error);
    return [];
  }
}

export { getOllamaModels, getOpenAILikeModels };
