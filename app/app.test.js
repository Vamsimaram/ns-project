const request = require("supertest");
const app = require("./index");

describe("ns project basic tests", () => {
  it("health endpoint returns ok", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("status", "ok");
  });

  it("info endpoint returns service details", async () => {
    const res = await request(app).get("/info");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("service", "ns-project node app");
  });
});
