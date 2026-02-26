//problem-01
let friendInvite = true;   
let pocketMoney = 1200;    

if (friendInvite) {
    console.log("I will go to his birthday party.");

    if (pocketMoney > 1000) {
        console.log("I will buy a gift for my friend.");
    } else {
        console.log("I will go empty handed.");
    }

} else {
    console.log("I will remove him from my friend list!");
}


//problem-02
let guestWantsTea = true;
let wantsBiscuit = false;

if (guestWantsTea) {
    console.log("I will serve tea.");

    if (wantsBiscuit) {
        console.log("I will serve biscuits too.");
    } else {
        console.log("Only tea is ready.");
    }

} else {
    console.log("Please sit and relax.");
}




//problem-03
let accountActive = true;
let isPremium = false;

if (accountActive) {
    console.log("Account is active.");

    if (isPremium) {
        console.log("Premium features will be shown.");
    } else {
        console.log("Free version will be shown.");
    }

} else {
    console.log("Account is not active.");
}




//problem-04
let foodInFridge = false;
let deliveryAppWorking = true;

if (foodInFridge) {
    console.log("I will heat the food and eat.");
} else {
    if (deliveryAppWorking) {
        console.log("I will order food from a delivery app.");
    } else {
        console.log("Today I will stay hungry.");
    }
}



//problem-05
let guestNumber = 120;
let everyoneBringsGift = true;

if (guestNumber > 100) {

    if (everyoneBringsGift) {
        console.log("Let's party all night!");
    } else {
        console.log("I will party with myself.");
    }

} else {
    console.log("It will be a small party.");
}