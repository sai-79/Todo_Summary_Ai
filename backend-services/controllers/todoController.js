const db = require("../db");

const getTodos = (req, res) => {
  db.query("SELECT * FROM todos", (err, results) => {
    if (err) {
      console.error("Error fetching todos:", err);
      return res.status(500).json({ error: "Failed to fetch todos" });
    }
    console.log("Fetched todos:", results);
    res.json(results);
  });
};

const createTodo = (req, res) => {
  const { task, status } = req.body;
  if (!task) return res.status(400).json({ error: "Task is required" });

  db.query(
    "INSERT INTO todos (task, status ) VALUES (?, ?)",
    [task, status],
    (err, result) => {
      if (err) {
        console.error("Error creating todo:", err);
        return res.status(500).json({ error: "Failed to create todo" });
      }

      const newTodo = { id: result.insertId, task, status };
      res.status(201).json(newTodo);
    }
  );
};

const deleteTodo = (req, res) => {
  const { id } = req.params;

  db.query("DELETE FROM todos WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.error("Error deleting todo:", err);
      return res.status(500).json({ error: "Failed to delete todo" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(204).end();
  });
};

const summarizeAndSend = async (req, res) => {
  db.query("SELECT task FROM todos", async (err, results) => {
    if (err) {
      console.error("Error fetching todos for summary:", err);
      return res
        .status(500)
        .json({ error: "Failed to fetch todos for summary" });
    }

    const summary = `Pending Tasks:\n${results
      .map((t) => `- ${t.task}`)
      .join("\n")}`;
    // console.log("Summary of todos:", summary);
    try {
      var Ai_Summary = await require("../services/OpenAi").summarizeTodos(
        summary
      );
      //   console.log("AI Summary:", Ai_Summary);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to send to Open Ai." });
    }

    try {
      await require("../services/slackService").sendToSlack(Ai_Summary);
      res.json({ message: "Summary sent to Slack." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Failed to send summary." });
    }
  });
};

module.exports = {
  getTodos,
  createTodo,
  deleteTodo,
  summarizeAndSend,
};
