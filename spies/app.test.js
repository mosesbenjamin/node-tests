const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

// Rewire adds the following to our app
// app.__set.__
// app.__get.__

describe('App', ()=>{
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', ()=>{
        var spy = expect.createSpy();
        spy('Mavewrick', 20);
        expect(spy).toHaveBeenCalledWith('Mavewrick', 20);
    })

    it('should call saveUser with user object', ()=>{
        var email = 'Mavewrick@mail.com';
        var password = '123abc';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    })
})