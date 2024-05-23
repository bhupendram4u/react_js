// userRoutes.test.js
// const request = require('supertest');
import request from "supertest";
import express from "express"
// const userRoutes = require('./userRoutes');
import userRoute from "../../src/route/userRoutes";

// const { getUser } = require('./userController');
import { getUser } from "../../src/controller/user.controller";


jest.mock('./userController');

const app = express();
app.use('/users', userRoute);

describe('GET /users/getuser/:id', () => {
  it('should return the user with the given ID', async () => {
    const mockUser = { _id: 'fakeUserId', username: 'testuser', email: 'test@example.com', password: 'password' };
    getUser.mockResolvedValueOnce(mockUser);

    const response = await request(app).get('/users/getuser/fakeUserId');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUser);
  });

  it('should return 404 if user is not found', async () => {
    getUser.mockResolvedValueOnce(null);

    const response = await request(app).get('/users/getuser/nonexistentUserId');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ message: 'User not found' });
  });

  it('should return 500 if there is an internal server error', async () => {
    getUser.mockRejectedValueOnce(new Error('Database error'));

    const response = await request(app).get('/users/getuser/fakeUserId');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ message: 'Internal server error' });
  });
});