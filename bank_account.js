// bank_account.js
class BankAccount {
  constructor(initialBalance = 0) {
    this.balance = initialBalance;
  }

  async deposit(amount) {
    try {
      await this.delay(2000); // Simulasi operasi asynchronous dengan delay 2 detik
      if (isNaN(amount) || amount <= 0) {
        throw new Error("Jumlah deposit harus berupa angka positif.");
      }
      this.balance += amount;
      console.log(`Deposit sebesar ${amount} berhasil. Saldo sekarang: ${this.balance}`);
    } catch (error) {
      console.error(`Error saat melakukan deposit: ${error.message}`);
    }
  }

  async withdraw(amount) {
    try {
      await this.delay(2000); // Simulasi operasi asynchronous dengan delay 2 detik
      if (isNaN(amount) || amount <= 0) {
        throw new Error("Jumlah penarikan harus berupa angka positif.");
      }
      if (amount > this.balance) {
        throw new Error("Saldo tidak mencukupi untuk penarikan.");
      }
      this.balance -= amount;
      console.log(`Penarikan sebesar ${amount} berhasil. Saldo sekarang: ${this.balance}`);
    } catch (error) {
      console.error(`Error saat melakukan penarikan: ${error.message}`);
    }
  }
  getSaldo() {
    return this.balance;
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = BankAccount;
