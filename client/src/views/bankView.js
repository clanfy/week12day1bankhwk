var BankView = function(bank, listElement, accounts){
  this.bank = bank;
  this.listElement = listElement;
  this.accounts = accounts;
};

BankView.prototype = {
  createItemForAccount: function(account){
    var accountListItem = document.createElement('li');
    accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
    return accountListItem;
  }, 
  populateAccountList: function(listElement, accounts){
    for (account of accounts){
      listElement.appendChild(createItemForAccount(account));
    }
  }

};

module.exports = BankView;