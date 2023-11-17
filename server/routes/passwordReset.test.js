const request = require("supertest");
const app = require("../index");

describe("Password Reset API", () => {
  describe("POST /api/password-reset", () => {
    it("should return a 200 status code for valid email request", async () => {
      const response = await request(app)
        .post("/api/password-reset")
        .send({ email: "validemail@example.com" });
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty("message", "Password reset link sent.");
    });

    it("should return a 400 status code for invalid email format", async () => {
      const response = await request(app)
        .post("/api/password-reset")
        .send({ email: "invalid-email" });
      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty("error");
    });

    it("should return a 404 status code for non-existent email", async () => {
      const response = await request(app)
        .post("/api/password-reset")
        .send({ email: "nonexistent@example.com" });
      expect(response.statusCode).toBe(404);
      expect(response.body).toHaveProperty("error", "Email not found.");
    });

    it("should return a 500 status code for server error", async () => {
      const response = await request(app)
        .post("/api/password-reset")
        .send({ email: "error@example.com" });
      expect(response.statusCode).toBe(500);
    });

    it("should handle email service failure gracefully", async () => {
      
      const response = await request(app)
        .post("/api/password-reset")
        .send({ email: "emailservicefail@example.com" });
      expect(response.statusCode).toBe(502);
      expect(response.body).toHaveProperty("error", "Email service failed.");
    });
  });
});