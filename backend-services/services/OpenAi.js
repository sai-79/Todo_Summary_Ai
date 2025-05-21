const { CohereClient } = require("cohere-ai");

const cohere = new CohereClient({
  token: process.env.COHERE_API_KEY,
});

async function summarizeTodos(todos) {
  const prompt = `Summarize the following tasks in one concise sentence:\nTasks: ${todos}`;

  try {
    const response = await cohere.generate({
      model: "command",
      prompt,
      max_tokens: 50,
      temperature: 0.7,
    });
    const summaryText = response.generations[0].text.trim();
    return summaryText;
  } catch (err) {
    console.error("Cohere error:", err);
    throw new Error("LLM summarization failed.");
  }
}

module.exports = { summarizeTodos };
