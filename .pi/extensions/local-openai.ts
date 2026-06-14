import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

export default async function (pi: ExtensionAPI) {
   pi.registerProvider("local-openai", {
    baseUrl: "http://localhost:8000/v1",
    apiKey: "EMPTY",
    api: "openai-completions",
    models:[ {
      id: "Qwen/Qwen3.6-27B",
      name: "Qwen/Qwen3.6-27B",
      reasoning: false,
      input: ["text"],
      cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
      contextWindow: 262144,
      maxTokens: 81920,
    }],
  });
}
