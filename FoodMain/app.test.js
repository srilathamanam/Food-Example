const request = require("supertest");

const app = require("./app");

test("not found for 404", async function () {
    const resp = await request(app).get("/no-such-path");
    expect(resp.statusCode).toEqual(404);
  });