let balance = 1000;

while (true) {
    let choice = prompt("Select an option:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit");

    switch (choice) {
        case "1":
            alert("Your balance is :" + balance);
            break;

        case "2":
            let deposit = +(prompt("Enter deposit amount:"));
            if (isNaN(deposit) || deposit < 0) {
                alert("Invalid deposit amount!");
            } 
            else {
                balance += deposit;
                alert("Deposit successful. New balance =" + balance);
            }
            break;

        case "3":
            let withdraw = +(prompt("Enter withdrawal amount:"));
            if (withdraw <= balance) 
            {
                balance -= withdraw;
                alert("Withdrawal successful. Remaining balance = " + balance);
            } 
            else {
                alert("Insufficient Balance");
            }
            break;

        case "4":
            alert("Exiting. Thank you For using ATM!");
            break;

        default:
            alert("Invalid choice. Please enter a valid option.");
            break;
    }
}
