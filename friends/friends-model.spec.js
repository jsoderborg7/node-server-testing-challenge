const Friends = require('./friends-model');

const db = require('../data/db-config');

it('should set testing env', () =>{
  expect(process.env.DB_ENV).toBe('testing');
});

describe('friends-model', () =>{
  beforeEach(async () =>{
    await db('friends').truncate();
  })

  describe('add()', () =>{
    it('should add friend to db', async () =>{
      const records = await db('friends');
      expect(records).toHaveLength(0);

      await Friends.add({name: "Luna"});
      const friends = await db('friends');
      expect(friends).toHaveLength(1);
    })

    it('should add the correct friend name to db', async () =>{
      const person = await Friends.add({name: "Neville"});
      expect(person.name).toBe("Neville")
    })
  })

  describe('remove()', () =>{
    it('should delete friend from db', async () =>{
      await Friends.remove(1);
      const friends = await db('friends');
      expect(friends).toHaveLength(0);
    })

    it('should only removed specified ID', async () =>{
      Friends.add({name: "Ginny"})
      Friends.add({name: "Fred"})
      const friends = await db('friends')
      expect(friends).toHaveLength(2);

      await Friends.remove(1)
      const friend = await db('friends')
      expect(friend).toHaveLength(1);
    })
  })
})