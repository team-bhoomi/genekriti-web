import { generateText, ollama } from "modelfusion";

export const askOllama = async ({ prompt }: { prompt: string }) => {
  const output = await generateText({
    model: ollama
      .CompletionTextGenerator({
        model: "mistral:text", // mistral base model without instruct fine-tuning (no prompt template)
        temperature: 0.4,
        maxGenerationTokens: 300,
      })
      .withTextPrompt(),
    prompt,
  });
  return output;
};
