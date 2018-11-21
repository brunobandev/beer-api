const chai = require('chai');
const app = require('../server');
const expect = chai.expect;
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('API', () => {
    it('Check status GET /beers', (done) => {
        chai.request(app).get('/beers')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });

    it('Check status POST /beers', (done) => {
        chai.request(app).post('/beers')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done();
        });
    });
});