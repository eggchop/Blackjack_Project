const RequestHelper = require('../helpers/request_helper.js');

const Player = function(){
  this.id = null;
  this.hand = null;
  this.wallet = 100;
};

Player.prototype.placeBet = function(amount) {

};

Player.prototype.winMoney = function(amount){

};

Player.prototype.updateWallet = function(){
  const request = new RequestHelper(`http://localhost:3000/api/players/${this.id}`)
  request.put({"wallet": this.wallet})
  .then((player) => {
    this.wallet = player.wallet();
  })
  .catch(console.error);
};

Player.prototype.save = function (){
  const request = new RequestHelper('http://localhost:3000/api/players')
  request.post({"wallet": this.wallet})
  .then((player) => {
    this.id = player.id;
  })
  .catch(console.error);
};

module.exports = Player;
