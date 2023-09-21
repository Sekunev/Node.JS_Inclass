const personal = class Person {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    return `Benim Adım ${this.name}`;
  }
};

const bankAccount = class BankAccount extends personal {
  #balance;
  constructor(name, balance) {
    super(name);
    this.balance = balance;
  }
  deposit(para) {
    if (para > 0) {
      this.balance += para;
      return `Hesabına ${para} eklendi. Yeni Bakiyen: ${this.balance}`;
    } else {
      return "Yatırma için geçersiz tutar";
    }
  }
  withdraw(para) {
    if (para > 0 && para <= this.balance) {
      this.balance -= para;
      return `Hesabından ${para} Çekildi. Yeni Bakiyen: ${this.balance}`;
    } else {
      return "Yeterli bakiye yok";
    }
  }
  getBalance() {
    return `Bakiyen ${this.balance}`;
  }
};

const bankaHesabı = new bankAccount("Ahmet", 5000);

console.log(bankaHesabı.sayName());
console.log(bankaHesabı.deposit(1000));
console.log(bankaHesabı.withdraw(2000));
console.log(bankaHesabı.withdraw(1000));
console.log(bankaHesabı.deposit(5000));
console.log(bankaHesabı.getBalance());
console.log(bankaHesabı.balance + 2000);
console.log(bankaHesabı.getBalance());
