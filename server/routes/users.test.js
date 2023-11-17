const request = require("supertest");
const app = require("../app"); 

describe("Users API", () => {
    describe("POST /api/users", () => {
        it("should register a new user and return a verification message", async () => {
            const newUser = {
                name: "Test User",
                email: "testuser@example.com",
                password: "Password123"
            };
            const response = await request(app)
                .post("/api/users")
                .send(newUser);
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty("message", "User registered successfully. Please check your email to verify your account.");
        });

        it("should return an error for a duplicate email", async () => {
            const duplicateUser = {
                name: "Test User",
                email: "testuser@example.com",
                password: "Password123"
            };
            const response = await request(app)
                .post("/api/users")
                .send(duplicateUser);
            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty("error", "Email already exists.");
        });

        it("should return an error for invalid registration data", async () => {
            const invalidUser = {
                name: "Test",
                email: "invalidemail",
                password: "pass"
            };
            const response = await request(app)
                .post("/api/users")
                .send(invalidUser);
            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty("error");
        });

        it("should return an error for missing registration data", async () => {
            const incompleteUser = {
                name: "Test User"

            };
            const response = await request(app)
                .post("/api/users")
                .send(incompleteUser);
            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty("error");
        });
    });

    describe("GET /api/users/:id/verify/:token", () => {
    
        it("should verify the email and return a success message", async () => {
            const response = await request(app)
                .get("/api/users/validUserId/verify/validToken"); 
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty("message", "Email verified successfully.");
        });

        it("should return an error for an invalid token", async () => {
            const response = await request(app)
                .get("/api/users/validUserId/verify/invalidToken");
            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty("error", "Invalid token.");
        });

        it("should return an error for a non-existent user", async () => {
            const response = await request(app)
                .get("/api/users/nonExistentUserId/verify/validToken");
            expect(response.statusCode).toBe(404);
            expect(response.body).toHaveProperty("error", "User not found.");
        });

        it("should return an error for missing verification token", async () => {
            const response = await request(app)
                .get("/api/users/validUserId/verify/"); 
            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty("error", "Verification token is required.");
        });
    });
});
