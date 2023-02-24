const sinon = require('sinon');
const Utils = require('./utils');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');


describe('sendPaymentRequestToApi', function (){
	it ('test if calculateNumber is called from sendPaymentRequestToApi', function(){
		const spy = sinon.spy(Utils, 'calculateNumber');
		sendPaymentRequestToApi(100, 20);
		expect(spy.calledOnce).to.be.true;
		expect(spy.calledWithMatch('SUM')).to.be.true;
		spy.restore();
	})
});
