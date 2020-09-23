const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', ()=>{

    describe('GET /', ()=>{
        it('should return hello world response', (done)=>{
            request(app)
            .get('/')
            .expect(404)
            .expect((res)=>{
                expect(res.body).toInclude({name: 'Example test.'})
            })
            .end(done);
        });
    })
    
    describe('GET /users', ()=>{
        it('should return an array of users data', (done)=>{
            request(app)
            .get('/users')
            .expect(200)
            .expect((res)=>{
                expect(res.body).toInclude({name: 'Mavewrick', age: 20})
            })
            .end(done);
        });
    });
});