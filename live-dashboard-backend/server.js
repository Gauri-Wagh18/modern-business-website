const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const http = require("http");
const { Server } = require("socket.io");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// socket server
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" }
});

// MongoDB
mongoose.connect("mongodb+srv://admin:admin12345@cluster0.wfi6c4i.mongodb.net/mydb")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ DB Error:", err));

// schema
const metricSchema = new mongoose.Schema({
  name: String,
  value: Number,
  createdAt: { type: Date, default: Date.now }
});

const Metric = mongoose.model("Metric", metricSchema);

// socket
io.on("connection", (socket) => {
  console.log("🟢 User connected");

  socket.on("joinRoom", (room) => {
    socket.join(room);
  });

  socket.on("disconnect", () => {
    console.log("🔴 User disconnected");
  });
});

// GET
app.get("/metrics", async (req, res) => {
  const data = await Metric.find();
  res.json(data);
});

// POST
app.post("/metrics", async (req, res) => {
  const saved = await new Metric(req.body).save();

  io.to("dashboard").emit("metricAdded", saved);

  res.json(saved);
});

// DELETE
app.delete("/metrics/:id", async (req, res) => {
  await Metric.findByIdAndDelete(req.params.id);

  io.to("dashboard").emit("metricDeleted", req.params.id);

  res.json({ message: "Deleted" });
});

// start
server.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});