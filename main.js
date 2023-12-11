document.getElementById('ibanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const iban = document.getElementById('ibanInput').value;
    if (isValidIban(iban)) {
        const { sortCode, accountNumber } = extractSortCodeAndAccountNumber(iban);
        const resultText = `Sort Code: ${sortCode}, Account Number: ${accountNumber}`;
        document.getElementById('result').innerText = resultText;
        document.getElementById('copyButton').style.display = 'block';
    } else {
        document.getElementById('result').innerText = "Invalid IBAN.";
        document.getElementById('copyButton').style.display = 'none';
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const resultText = document.getElementById('result').innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
});

function isValidIban(iban) {
    return /^[A-Z]{2}\d{2}[A-Z]{4}[0-9A-Z]{6}[0-9A-Z]{8,16}$/.test(iban);
}

function extractSortCodeAndAccountNumber(iban) {
    return {
        sortCode: iban.substring(8, 14),
        accountNumber: iban.substring(14, 22)
    };
}
