document
  .getElementById("ibanForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const iban = document.getElementById("ibanInput").value;
    if (isValidIban(iban)) {
      const { sortCode, accountNumber } = extractSortCodeAndAccountNumber(iban);
      document.getElementById(
        "result"
      ).innerText = `Sort Code: ${sortCode}, Account Number: ${accountNumber}`;
    } else {
      document.getElementById("result").innerText = "Invalid IBAN.";
    }
  });

function isValidIban(iban) {
  return /^[A-Z]{2}\d{2}[A-Z]{4}[0-9A-Z]{6}[0-9A-Z]{8,16}$/.test(iban);
}

function extractSortCodeAndAccountNumber(iban) {
  return {
    sortCode: iban.substring(8, 14),
    accountNumber: iban.substring(14, 22),
  };
}
