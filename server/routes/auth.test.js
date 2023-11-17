const request = require("supertest");
const { app } = require("../index"); // import your Express app
const { User } = require("../models/user");
describe("Auth API", () => {
  describe("POST /api/auth", () => {
    it("should return a 200 status code for successful login", async () => {

      const res = await request(app)
        .post("/api/auth")
        .send({ email: "valid@example.com", password: "validPassword" });
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty("data");
    });

    it("should return a 400 status code for validation error or unverified email", async () => {
      let res = await request(app)
        .post("/api/auth")
        .send({ email: "invalid-email", password: "password" });
      expect(res.statusCode).toBe(400);
    });

    it("should return a 401 status code for invalid email or password", async () => {
      res = await request(app)
        .post("/api/auth")
        .send({ email: "nonexistent@example.com", password: "password" });
      expect(res.statusCode).toBe(401);

    });

    it("should return a 500 status code for internal server error", async () => {
        jest.spyOn(User, 'findOne').mockImplementationOnce(() => {
          throw new Error("Database connectivity issue");
        });
  
        const res = await request(app)
          .post("/api/auth")
          .send({ email: "anyemail@example.com", password: "anypassword" });
        expect(res.statusCode).toBe(500);
  
        User.findOne.mockRestore();
    });
  });
});
