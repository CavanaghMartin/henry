const { Videogame, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('videogame', () => {
      it('has a id definition with a null constrain ', () => {
        //console.log({...Videogame})
        expect(Videogame.rawAttributes.id.allowNull).to.be.false;
      });
      it('throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('has a valid name', () => {
        Videogame.create({ name: 'Super Mario Bros' });
      });
      it('throw an error if description is null', (done) => {
        Videogame.create({})
          .then(() => new Error('It requires a valid description'))
          .catch(() => done());
      });
      it('has a valid description', () => {
        Videogame.create({ description: 'Es un juego muy divertido' });
      });
      it('has a releaseDate definition', () => {
        expect(Videogame.tableAttributes.released).to.be.an('object');
      });
      it('has a rating definition', () => {
        expect(Videogame.tableAttributes.rating).to.be.an('object');
      });
      it('has a platform definition with a null constrain ', () => {
        //console.log({...Videogame})
        expect(Videogame.rawAttributes.platform.allowNull).to.be.false;
      });
    });
  });
});
