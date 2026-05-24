const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb://mongo:27017/mydatabase")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const Message = mongoose.model("Message", {
  name: String,
  message: String,
});

app.get("/", async (req, res) => {
  const messages = await Message.find();

  res.send(`
    <h1>Node.js + MongoDB Message App 🚀</h1>
    <h2>Made by Laxmikant</h2>

    <form method="POST" action="/add">
      <input type="text" name="name" placeholder="Enter your name" required />
      <br><br>
      <textarea name="message" placeholder="Enter your message" required></textarea>
      <br><br>
      <button type="submit">Save Message</button>
    </form>

    <h2>Saved Messages:</h2>
    ${messages.map(msg => `
      <p><b>${msg.name}</b>: ${msg.message}</p>
    `).join("")}
  `);
});

app.post("/add", async (req, res) => {
  await Message.create({
    name: req.body.name,
    message: req.body.message,
  });

  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});