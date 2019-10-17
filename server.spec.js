const request = require('supertest');

const server = require('./friends/friends-router');

describe('GET /', () =>{
  test('should return 200 http status code', async () =>{
    const response = await request(server).get('/api/friends');
      expect(res.status).toBe(200);
  })
})