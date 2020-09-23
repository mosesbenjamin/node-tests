const expect = require('expect');

const utils = require('./utils');

describe('Utils', ()=>{

    describe('#add', ()=>{
        it('should add two numbers', ()=>{
            var res = utils.add(33, 11);
        
            expect(res).toBe(44).toBeA('number');
        });
        
        it('should async add two numbers', (done)=>{
            utils.asyncAdd(4, 3, (sum)=>{
                expect(sum).toBe(7).toBeA('number');
                done();
            });
        });
    })
    
    describe('#square', ()=>{
        it('should square a number', ()=>{
            var res = utils.square(5);
        
            expect(res).toBe(25).toBeA('number');
        });
        
        it('should async square a number', (done)=>{
            utils.asyncSquare(8, (square)=>{
                expect(square).toBe(64).toBeA('number');
                done();
            });
        });
    })

    it('should verify first and last names are set', ()=>{
        var user = {age: 20, location: 'Nigeria'};
        var res = utils.setName(user, 'Moses Benjamin');

        expect(res).toInclude({firstName: 'Moses', lastName: 'Benjamin'});
    });
})

// it('should expect some values', ()=>{
//     // expect(12).toNotBe(12);
//     // // Objects and arrays
//     expect({name: 'Mavewrick'}).toEqual({name: 'Mavewrick'}).toNotEqual({name: 'Brad'});
//     // expect([2, 3, 4]).toInclude(3);
//     expect({name: 'Mavewrick', age: 20, location: 'Nigeria'}).toInclude({age: 20}).toExclude({location: 'Ghana'});
// });
