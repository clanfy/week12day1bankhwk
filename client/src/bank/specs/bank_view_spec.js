var BankView = require('../../views/bankView');
var Bank = require('../bank');
var Account = require('../account');
var assert = require('assert');

  describe('bank view', function(){
    it('should start off with no bank accounts', function(){
      var bank = new Bank();
      var bankView = new BankView(bank);
      assert.equal(0, bankView.bank.accounts.length);
    });

    it('should ba able to add account', function(){
      var bank = new Bank();
      var bankView = new BankView(bank);
      var account = new Account({owner: 'Cookie', amount: 100, type: 'personal'});
      bank.addAccount(account);
      assert.deepEqual(account, bankView.bank.accounts[0]);
    });
  });