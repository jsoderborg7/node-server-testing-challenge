const request = require('supertest');

const server = require('./server');

describe('GET /friends', () =>{
  it('should return 200 http status code', () => {
    return request(server)
      .get('/friends')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });

  it('should return JSON', () =>{
    return request(server)
    .get('/friends')
    .then(res =>{
      expect(res.type).toMatch(/json/i);
    })
  })
})

describe('POST /friends', () =>{
  
})