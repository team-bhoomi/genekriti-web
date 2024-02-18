import { ollama, generateText } from "modelfusion";
export default async function Page() {
  const text = await generateText({
    model: ollama
      .CompletionTextGenerator({
        model: "mistral:text", // mistral base model without instruct fine-tuning (no prompt template)
        temperature: 0.4,
        maxGenerationTokens: 300,
      })
      .withTextPrompt(),
    prompt: "Give 5-6 steps in which a plastic water bottle can be reused?:\n\n",
  });
  return (
    <div>
      <div>I want AI propmt</div>
      <div>{text}</div>
    </div>
  )
}