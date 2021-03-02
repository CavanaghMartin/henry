/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'balakasa',
  description: 'es un juego muy divertido',
   releaseDate: '12/10/2001',
  rating: 7,
  platform: ['pc','playstation']

};

describe('Videogame routes', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('get a 200  response from the api', () =>
      agent.get('/videogames?name=balakasa')
        .expect(200)
        .then(res => {
          expect(res.body).to.be.an('array');
          expect(res.body[0].name).to.be.equal('balakasa');
        })
        .catch(() => done())
    );
    
  });
});
