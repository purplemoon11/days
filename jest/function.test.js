const data = require('./function')

test('Add 2 + 2 equals 4',()=>{
    expect(data.add(2, 2)).toBe(4);
})

test('Add 2 + 2 NOT equals 5',()=>{
    expect(data.add(2, 2)).not.toBe(5);
})

test('Should be Null',()=>{
    expect(data.isNull()).toBeNull();
})

test('Should be falsy',()=>{
    expect(data.checkValue()).toBeFalsy();
})

test('Should be Hello World Object',()=>{
    expect(data.createUser()).toEqual({firstName: 'Hello', lastName: 'World'});
})

//less than or greater than
test('Should be under 1600', ()=>{
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
})

//Regex
test("There is no I in team", ()=>{
    expect('team').not.toMatch(/I/);
})

//Array
test('Admin should be in the usernames', ()=>{
    usernames = ['john', 'karen'];
    expect(usernames).toContain('admin')
})

test('the data is peanut butter', done => {
    function callback(data) {
      try {
        expect(data).toBe('peanut butter');
        done();
      } catch (error) {
        done(error);
      }
    }
   
    fetchData(callback);
   });

   test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
   });
   
   