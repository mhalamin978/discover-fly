// Handle control button trigger
function handleTicketChange(ticket, isIncrease) {
    const userTicket = document.getElementById(ticket + '-count');
    const ticketNumber = parseInt(userTicket.value);
    let ticketNewCount = ticketNumber;
    // validation & trigger response
    if (isIncrease == true) {
        ticketNewCount = ticketNumber + 1;
    };
    if (ticketNumber < 0) {
        ticketNewCount = ticketNumber * -1;
    };
    if (isIncrease == false && ticketNewCount > 0) {
        ticketNewCount = ticketNumber - 1;
    };
    userTicket.value = ticketNewCount;
    calculateTicketPrice();
};

// Calculate user ticket price
function calculateTicketPrice() {
    const firstClassTicketNumber = getTicket('firstClass');
    const economyTicketNumber = getTicket('economy');
    const subTotal = firstClassTicketNumber * 150 + economyTicketNumber * 100;
    document.getElementById("sub-total").innerText = '$' + subTotal;
    const ticketTax = subTotal * 0.1;
    document.getElementById('ticket-tax').innerText = '$' + ticketTax;
    const ticketTotal = subTotal + ticketTax;
    document.getElementById('ticket-total').innerText = '$' + ticketTotal;
};

// Get user ticket number
function getTicket(ticket) {
    const userTicket = document.getElementById(ticket + '-count');
    const userTicketNumber = parseInt(userTicket.value);
    return userTicketNumber;
};