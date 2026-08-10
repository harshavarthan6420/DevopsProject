const assert = require('assert');
const request = require('supertest');
const app = require('../app');

describe('GET /', function () {
  it('returns 200 and the expected homepage content', async function () {
    const response = await request(app).get('/');

    assert.strictEqual(response.status, 200);
    assert.match(response.text, /Simple Application/i);
    assert.match(response.text, /<h1>/i);
  });
});

describe('invalid route', function () {
  it('returns the existing 404 response', async function () {
    const response = await request(app).get('/does-not-exist');

    assert.strictEqual(response.status, 404);
    assert.match(response.text, /not found|404/i);
  });
});
