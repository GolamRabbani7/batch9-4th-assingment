




function calculateMoney(ticketSale){
    if(ticketSale<0){
        return 'Invalid Number. You have to give positive number'
    }
    const secqurityCost=500;
    const lunchCost=50*8;
    const totaCost=secqurityCost+lunchCost;
    const allTicket=ticketSale*120;

    const result=allTicket-totaCost;

    return result;

}

// comlited..





