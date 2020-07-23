let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
var should = chai.should();
chai.use(chaiHttp);
//check whether the response code is 200 or not
describe('These test cases are for tech challenge API', () => {
  it('Check responses on /version GET', function(done) {
    chai.request(server)
      .get('/version')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });
  //validate json response
  it('Validate json response', function(done) {
    chai.request(server)
      .get('/version')
      .end(function(err, res){
        res.body.myapplication[0].should.have.property('apiVersion').and.to.be.a('string').and.to.match(/^[0-9.]/)
        res.body.myapplication[0].should.have.property('lastcommitsha').and.to.be.a('string').and.to.match(/^[0-9a-z]/)
        res.body.myapplication[0].should.have.property('description').and.to.be.a('string')
        res.body.myapplication[0].description.should.equal('pre-interview technical test')
        done();
      });
  });
});