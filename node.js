import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/gerar", async (req, res) => {
  const { prompt } = req.body;

  const r = await fetch("https://api-inference.huggingface.co/models/gpt2", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: prompt }),
  });

  const data = await r.json();
  res.json(data);
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
