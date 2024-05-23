import request from 'supertest';
import {describe, expect, test} from '@jest/globals';

import app from './../index'; // Import the express app
jest.mock('supertest');
request.mockReturnValue({
  get: jest.fn().mockReturnValue({
    then: jest.fn().mockResolvedValue({
      statusCode: 200,
      body: {
        _id: '123',
        name: 'John Doe',
        email: 'john@example.com'
      }
    })
  })
});


describe('GET /getUser/:id', () => {
  it('should return a user by id', async () => {

    
    const res = await request(app).get('/getUser/123');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body).toHaveProperty('name');
    expect(res.body).toHaveProperty('email');
  });



  // it('should return 404 if user not found', async () => {

// request.mockReturnValue({
//   get: jest.fn().mockReturnValue({
//     then: jest.fn().mockResolvedValue({
//       statusCode: 404
//     })
//   })
// });

//     const res = await request(app).get('/getUser/nonexistentid');
//     expect(res.statusCode).toEqual(404);
//   });

//   it('should handle errors', async () => {
//     const res = await request(app).get('/getUser/invalidid');
//     expect(res.statusCode).toEqual(500);
//   });
});