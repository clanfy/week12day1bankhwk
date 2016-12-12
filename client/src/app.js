var Bank = require('./bank/bank.js');
var sampleAccounts = require('../sample.json');
var Account = require('./bank/account.js');

var createItemForAccount = function(account){
  var accountListItem = document.createElement('li');
  accountListItem.innerText = account.owner + ": £" + account.amount.toFixed(2);
  return accountListItem;
};

var populateAccountList = function(listElement, accounts){
  for (account of accounts){
    listElement.appendChild(createItemForAccount(account));
  }
};

window.onload = function() {
  console.log('loaded');
  var bank = new Bank();
  for (var accountData of sampleAccounts){
    bank.addAccount(new Account(accountData));
  }
  console.log("We created a new bank", bank);

  var totalDisplay = document.getElementById('total');
  totalDisplay.innerText = "Total: £" + bank.totalCash();

  var accountList = document.getElementById('accounts');
  for (var account of bank.accounts){
   var accountListItem = document.createElement('li');
   accountListItem.innerText =  account.owner + ": £" + account.amount.toFixed(2);
   accountList.appendChild(accountListItem);
 }

var businessTotalDisplay = document.getElementById('business-total');
var personalTotalDisplay = document.getElementById('personal-total');

businessTotalDisplay.innerText = "Total Business: £" + bank.totalCash('business');
personalTotalDisplay.innerText = "Total Personal: £" + bank.totalCash('personal');

var businessList = document.getElementById('business-accounts');
var personalList = document.getElementById('personal-accounts');

populateAccountList(businessList, bank.filteredAccounts('business'));
populateAccountList(personalList, bank.filteredAccounts('personal'));


};
