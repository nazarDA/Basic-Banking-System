// Import BankAccount model
const BankAccount = require("./bank_account.js");

// Buat objek myAccount
const myAccount = new BankAccount(0);

// Fungsi untuk menangani deposit
async function deposit(amount) {
  try {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Jumlah deposit tidak valid.");
    }
    await myAccount.deposit(amount);
  } catch (error) {
    console.error(`Error saat melakukan deposit: ${error.message}`);
  }
}

// Fungsi untuk menangani penarikan
async function withdraw(amount) {
  try {
    if (isNaN(amount) || amount <= 0) {
      throw new Error("Jumlah penarikan tidak valid.");
    }
    await myAccount.withdraw(amount);
  } catch (error) {
    console.error(`Error saat melakukan penarikan: ${error.message}`);
  }
}


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Menampilkan menu dan menunggu input pengguna
function showMenu() {
  console.log("Pilih tindakan:");
  console.log("1. Deposit");
  console.log("2. Withdraw");
  console.log("3. Keluar");

  rl.question("Masukkan nomor tindakan: ", (choice) => {
    switch (choice) {
      case "1":
        rl.question("Masukkan jumlah deposit: ", (amount) => {
          deposit(parseFloat(amount));
          showMenu();
        });
        break;
      case "2":
        rl.question("Masukkan jumlah penarikan: ", (amount) => {
          withdraw(parseFloat(amount));
          showMenu();
        });
        break;
      case "3":
        console.log("Terima kasih! Sampai jumpa.");
        rl.close();
        break;
      default:
        console.log("Tindakan tidak valid.");
        showMenu();
        break;
    }
  });
}


showMenu();
