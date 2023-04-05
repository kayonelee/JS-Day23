let appData = {
    name: "Gmail",
    mailboxes: [
            "inbox",
            "trash",
            "sent",
            ],
    contacts: [
            {name: 'Zillow', email: "testing1@yahoo.com", lastMessage: "Pending Sale 157 Franklin Ln"},
            {name: 'Pestie', email: "testing1@yahoo.com", lastMessage: "Leave us a review"}
            ],
    sent: [ 
            {to: "Name Here", from: "Me", status: "sent", subject: "Hello", body: "sent body message text"},
            {to: "Name Here", from: "Me", status: "sent", subject: "Hello", body: "sent body message text"},
            {to: "Name Here", from: "Me", status: "sent", subject: "Hello", body: "sent body message text"}
            ],
    inbox: [ 
            {to: "Me", from: "Name Here", status: "unread", subject: "Hello", body: "first inbox body message text"},
            {to: "Me", from: "Name Here", status: "unread", subject: "Hello", body: "second inbox body message text"},
            {to: "Me", from: "Name Here", status: "read", subject: "Hello", body: "third inbox body message text"}
             ],
    drafts: [ 
            {to: "Name Here", from: "Me", status: "unsent", subject: "Hello", body: "draft body message text"},
            {to: "Name Here", from: "Me", status: "unsent", subject: "Hello", body: "draft body message text"}
        ],

}

appData.drafts.newDraft = {to: "Leyla", from: "Me", status: "unsent", subject: "Hi", body: "Template message"};  //this adds my draft message to Leyla


appData.sent[0].status = "Marked Sent"; //marks email as sent
//console.log(appData); prints to check


//printing stuff
console.log(appData.mailboxes.join(", ")); //This is the list of mailbox
console.log(" ");
console.log(appData.contacts); //This is the list of contacts/email
console.log(" ");
console.log(appData.inbox[1]); // This is the text of the second email in the visible list
console.log(" ");
// console.log(appData.inbox[0].body); //prints the body text of the second email in the inbox

console.log(appData.sent[0].status); //marking an email as sent
console.log(" ");
console.log(appData.drafts); // prints the added draft email 