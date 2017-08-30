let expect = require('chai').expect
let request = require('supertest')
let express = require('express')
let sinon = require('sinon')
let App = require('../app')
let model = require('../models/user')
let modelStub = sinon.stub(model,'find')
let modelPost= sinon.stub(model.prototype,'save')
let server = request.agent('http://localhost/3000')
let updateStub = sinon.stub(model, 'update');
let removeStub = sinon.stub(model, 'remove');
describe('GET /', () => {
 
        
    
    it('respond with json', (done) => {
         modelStub.yields(null, [{ name: 'Let us C', age: 22 }])
            request(App)
            .get('/add')
            // .expect('Contenaget-Type', /json/) 
            .end((err, res) => {

                if (err) return done(err);
                expect({ name: 'Let us C', age: 22 }).to.deep.equal({ name: res.body[0].name, age: res.body[0].age });
                // expect({ title: 'Let us D', author: 'Yashwant1' }).to.deep.equal({ title: res.body[1].title, author: res.body[1].author });
                // console.log(res);
                done();
            })
    });
});

describe('POST', function() {
  before(function() {
      modelPost.yields(null, { name: "bio"})
  })
  it('checking post', function(done) {
      request(App)
          .post('/add')
          // .expect('Content-Type', /json/)
          .end(function(err, res) {
              if (err) return done(err);
              expect(res.body.name).to.be.equal("bio");
              
              done();
          })
  })
})


describe('Update', () => {
    before(() => {
        updateStub.withArgs({ _id: "YashGupta" }, { $set: { title: "developer" } })
            .yields(null, {
                "ok": 1,
                "nModified": 1,
                "n": 1
            });
    })
    it('respond with json', (done) => {
        console.log('inside put Test');
        request(App)
            .put('/add/update/YashGupta')
            .send({ title: "developer" })
            .end((err, res) => {
                if (err) return done(err);
                else {
                    //console.log(res.body);
                    expect(res.body.ok).to.be.equal(1);
                    done();
                }
            });
    });
});
describe('Remove', () => {
    before(() => {
        removeStub.withArgs({ '_id': "YashGupta" })
            .yields(null, {
                "ok": 1,
                "nModified": 1,
                "n": 1
            });
    })

    it('respond with json', (done) => {
        console.log('inside delete Test');
        request(App)
            .delete('/add/delete/YashGupta')
            .end((err, res) => {
                if (err) return done(err);
                else {
                    //console.log(res.body);
                    expect(res.body.ok).to.be.equal(1);
                    done();
                }
            });
    });
});

//      it('respond with json', (done) => {
//      let obj={name:'mamam' ,age:21};
     
//      request(App)
//      .post('/add')
//      .send(obj)
//      .end((err,res)=>{
//         if(err) throw err;
//          expect({ name: 'mamam', age: 21 }).to.deep.equal({ name: res.body.name, age: res.body.age });
//                 // console.log(res)
//                 done();
//             })
//  })
       


//   it('respond with json', (done) => {
//      let obj={id:1,name:'ranu' ,age:21};
     
//      request(App)
//      .delete('/add/delete/10')
//      .send(obj)
//      .end((err,res)=>{
//         if(err) throw err;

//          expect({ id:'111' }).to.deep.equal({ id:res.body.id });
//             console.log(res)        
                
//             })
//         done();
//         });
// });


