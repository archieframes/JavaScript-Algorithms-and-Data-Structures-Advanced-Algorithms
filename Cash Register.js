// Write a cash register function that takes three arguments: purchase price, payment, and cash-in-drawer.
// Return an object with status and change keys.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order.

function checkCashRegister(price, cash, cid) {
    const obj = {
        status: "",
        change: {
            "ONE HUNDRED": 0,
            "TWENTY": 0,
            "TEN": 0,
            "FIVE": 0,
            "ONE": 0,
            "QUARTER": 0,
            "DIME": 0,
            "NICKEL": 0,
            "PENNY": 0
        }
    };
  
    const changeInDrawer = {};
    cid.forEach(el => changeInDrawer[el[0]] = Math.round(el[1] * 100));
    let tid = 0;
    for (const property in changeInDrawer) {tid += changeInDrawer[property]};
    const pri = Math.round(price * 100);
    const cas = Math.round(cash * 100);
    const changeDue = cas - pri;
    let changeLeft = changeDue;
  
    if (tid < changeDue) {
        obj.status = "INSUFFICIENT_FUNDS";
    } else if (tid == changeDue) {
        obj.status = "CLOSED";
        obj.change = cid;
        return obj;
    } else if (tid > changeDue) {
        obj.status = "OPEN";
        if (changeLeft >= 10000 && changeInDrawer["ONE HUNDRED"] > 0) {
            do {
            changeInDrawer["ONE HUNDRED"] -= 10000;
            obj.change["ONE HUNDRED"] += 100;
            changeLeft -= 10000;
            } while (changeLeft >= 10000 && changeInDrawer["ONE HUNDRED"] > 0);
        } 
        if (changeLeft >= 2000 && changeInDrawer["TWENTY"] > 0) {
            do {
            changeInDrawer["TWENTY"] -= 2000;
            obj.change["TWENTY"] += 20;
            changeLeft -= 2000;
            } while (changeLeft >= 2000 && changeInDrawer["TWENTY"] > 0);
        }
        if (changeLeft >= 1000 && changeInDrawer["TEN"] > 0) {
            do {
            changeInDrawer["TEN"] -= 1000;
            obj.change["TEN"] += 10;
            changeLeft -= 1000;
            } while (changeLeft >= 1000 && changeInDrawer["TEN"] > 0);
        }
        if (changeLeft >= 500 && changeInDrawer["FIVE"] > 0) {
            do {
            changeInDrawer["FIVE"] -= 500;
            obj.change["FIVE"] += 5;
            changeLeft -= 500;
            } while (changeLeft >= 500 && changeInDrawer["FIVE"] > 0);
        }
        if (changeLeft >= 100 && changeInDrawer["ONE"] > 0) {
            do {
            changeInDrawer["ONE"] -= 100;
            obj.change["ONE"] += 1;
            changeLeft -= 100;
            } while (changeLeft >= 100 && changeInDrawer["ONE"] > 0);
        }
        if (changeLeft >= 25 && changeInDrawer["QUARTER"] > 0) {
            do {
            changeInDrawer["QUARTER"] -= 25;
            obj.change["QUARTER"] += .25;
            changeLeft -= 25;
            } while (changeLeft >= 25 && changeInDrawer["QUARTER"] > 0);
        }
        if (changeLeft >= 10 && changeInDrawer["DIME"] > 0) {
            do {
            changeInDrawer["DIME"] -= 10;
            obj.change["DIME"] += .1;
            changeLeft -= 10;
            } while (changeLeft >= 10 && changeInDrawer["DIME"] > 0);
        }
        if (changeLeft >= 5 && changeInDrawer["NICKEL"] > 0) {
            do {
            changeInDrawer["NICKEL"] -= 5;
            obj.change["NICKEL"] += .05;
            changeLeft -= 5;
            } while (changeLeft >= 5 && changeInDrawer["NICKEL"] > 0);
        }
        if (changeLeft >= 1 && changeInDrawer["PENNY"] > 0) {
            do {
            changeInDrawer["PENNY"] -= 1;
            obj.change["PENNY"] += .01;
            changeLeft -= 1;
            } while (changeLeft >= 1 && changeInDrawer["PENNY"] > 0);
        }
        if (changeLeft > 0) {
            obj.status = "INSUFFICIENT_FUNDS";
            obj.change = [];
        }
    }

    const changeObj = obj.change;
    const changeArray = [];
    for (const property in changeObj) {
        if (changeObj[property] != 0) {
            changeArray.push([property, changeObj[property]]);
        }
    }

    obj.change = changeArray;
    return obj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
