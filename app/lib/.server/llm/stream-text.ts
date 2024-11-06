import { streamText as _streamText, convertToCoreMessages, type LanguageModelV1 } from 'ai';
import { getModel } from '~/lib/.server/llm/model';
import { MAX_TOKENS } from './constants';
import { getSystemPrompt } from './prompts';
import slingshotConfig from '~/config/slingshot.config';
import { getProviderForModel } from '~/utils/modal.utils';

interface ToolResult<Name extends string, Args, Result> {
  toolCallId: string;
  toolName: Name;
  args: Args;
  result: Result;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
  toolInvocations?: ToolResult<string, unknown, unknown>[];
  model?: string;
}

export type Messages = Message[];

export type StreamingOptions = Omit<Parameters<typeof _streamText>[0], 'model'>;

function extractModelFromMessage(message: Message): { model: string; content: string } {
  const modelRegex = /^\[Model: (.*?)\]\n\n/;
  const match = message.content.match(modelRegex);

  if (match) {
    const model = match[1];
    const content = message.content.replace(modelRegex, '');

    return { model, content };
  }

  return { model: slingshotConfig.default.model, content: message.content };
}

export function streamText(messages: Messages, env: Env, options?: StreamingOptions) {
  let currentModel = slingshotConfig.default.model;
  const processedMessages = messages.map((message) => {
    if (message.role === 'user') {
      const { model, content } = extractModelFromMessage(message);

      if (
        model &&
        slingshotConfig.modelConfig[slingshotConfig.default.provider].models.find((m) => m.modelName === model)
      ) {
        currentModel = model;
      }

      return { ...message, content };
    }

    return message;
  });

  const provider = getProviderForModel(currentModel) ?? slingshotConfig.default.provider;

  return _streamText({
    model: getModel(provider, currentModel, env) as LanguageModelV1,
    system: getSystemPrompt(),
    maxTokens: MAX_TOKENS,
    messages: convertToCoreMessages(processedMessages as any),
    ...options,
  });
}
