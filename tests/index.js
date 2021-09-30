const request = require('supertest');
const assert = require('assert');
const {marks} = require('../services/marks.microservice')

describe('Unit testing the / route', function() {

    it('should return OK status', function() {
      return request(marks)
        .get('/')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });
});

describe('Unit testing the /marks route', function() {

    it('should return OK status', function() {
      return request(marks)
        .get('/marks')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });
});

describe('Unit testing the /marks/rajesh route', function() {

    it('should return OK status', function() {
      return request(marks)
        .get('/marks/rajesh')
        .then(function(response){
            assert.equal(response.status, 200)
        })
    });
});