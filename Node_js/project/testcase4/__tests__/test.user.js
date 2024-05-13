import request from 'supertest';
import mongoose from 'mongoose';
import app from './../index.js';
import User from './../models/User.js';

jest.mock('./../models/User.js');

describe('GET /api/users/:userId', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return user details if user exists', async () => {
    const mockUser = {
      _id: 'mockUserId',
      name: 'John Doe',
      email: 'john@example.com',
    };

    User.findById.mockResolvedValue(mockUser);

    const response = await request(app).get('/api/users/mockUserId');

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(mockUser);
  });

  it('should return 404 if user does not exist', async () => {
    User.findById.mockResolvedValue(null);

    const response = await request(app).get('/api/users/nonExistentUserId');

    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ message: 'User not found' });
  });

  // it('should return 500 if an error occurs', async () => {
  //   User.findById.mockRejectedValue(new Error('Database error'));

  //   const response = await request(app).get('/api/users/anyUserId');

  //   expect(response.statusCode).toBe(500);
  //   expect(response.body).toEqual({ message: 'Server Error' });
  // });
});
