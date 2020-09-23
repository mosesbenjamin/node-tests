const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', ()=>{
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should square a number', ()=>{
    var res = utils.square(5);

    expect(res).toBe(25).toBeA('number');
});

// it('should expect some values', ()=>{
//     // expect(12).toNotBe(12);
//     // // Objects and arrays
//     expect({name: 'Mavewrick'}).toEqual({name: 'Mavewrick'}).toNotEqual({name: 'Brad'});
//     // expect([2, 3, 4]).toInclude(3);
//     expect({name: 'Mavewrick', age: 20, location: 'Nigeria'}).toInclude({age: 20}).toExclude({location: 'Ghana'});
// });

it('should verify first and last names are set', ()=>{
    var user = {age: 20, location: 'Nigeria'};
    var res = utils.setName(user, 'Moses Benjamin');

    expect(res).toInclude({firstName: 'Moses', lastName: 'Benjamin'});
});