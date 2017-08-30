var request = require('supertest')

assert = require('chai').assert
supertest = require("supertest");

app = require("../app");
express =require('express')
var url = supertest("http://localhost:3000");



describe("Testing add and mulltiply route", function(err) {

    it("should multiply the value", function(done) {

        url

            .post("/multiply/5/6")

            .end(function(err, res) {

                if (err) {

                    throw err;
         }

          assert.equal(res.text, 30)


done();
            });

    });
 






    it("should add the value", function(done) {
url
     .post("/add/5/6")

            .end(function(err, res) {

                if (err) {
                     throw err;
         }

          assert.equal(res.text, 11);


done();
            });

    });
 
 

});