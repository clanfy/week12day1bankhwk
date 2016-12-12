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

//  var businessTotalDisplay = document.getElementById('business-total');
//  businessTotalDisplay.innerText = "Business Accounts Total: £" + bank.totalCash("business");

//  var businessAccountList = document.getElementById('business-accounts');
//  for (var businessAccount of bank.filteredAccounts("business")){
//   var businessAccountListItem = document.createElement('li');
//   businessAccountListItem.innerText = businessAccount.owner + ": £" + businessAccount.amount.toFixed(2);
//   businessAccountList.appendChild(businessAccountListItem);
// }

// var personalTotalDisplay = document.getElementById('personal-total');
// personalTotalDisplay.innerText = "Personal Accounts Total: £" + bank.totalCash("personal").toFixed(2); 

// var personalAccountsList = document.getElementById('personal-accounts');
// for (var personalAccount of bank.filteredAccounts("personal")){
//   var personalAccountListItem = document.createElement('li');
//   personalAccountListItem.innerText = personalAccount.owner + ": £" + personalAccount.amount.toFixed(2);
//   personalAccountsList.appendChild(personalAccountListItem);
// }

var businessTotalDisplay = document.getElementById('business-total');
var personalTotalDisplay = document.getElementById('personal-total');

businessTotalDisplay.innerText = "Total Business: £" + bank.totalCash('business');
personalTotalDisplay.innerText = "Total Personal: £" + bank.totalCash('personal');

var businessList = document.getElementById('business-accounts');
var personalList = document.getElementById('personal-accounts');

populateAccountList(businessList, bank.filteredAccounts('business'));
populateAccountList(personalList, bank.filteredAccounts('personal'));


};
