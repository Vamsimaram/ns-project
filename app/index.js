const express = require("express");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));

// Health endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// Simple app endpoint
app.get("/info", (req, res) => {
  res.json({
    service: "ns-project node app",
    version: "1.0.0",
    note: "baseline clean build"
  });
});

const port = 3000;

// Start server only if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
  });
}

// Export app for tests
module.exports = app;
