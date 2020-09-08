module.exports = class User {
  constructor(nickname) {
    this.nickname = nickname;
    this.nMsgs = 0;
    this.msgLog = [];
  }
};
