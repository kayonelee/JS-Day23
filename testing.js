let appData = {
    name: 'Gmail',
    mailboxes: [
            'inbox',
            'trash',
            'sent',
             ],
    contacts: [
            {name: 'Zillow', lastMessage: "I wont be in class today"},
            {name: 'Pestie', lastMessage: "Today, we are going to rock it!"}
            ],    
    sent: [
            {to: "personName", from: "Me", subject: "Hello", body: "body text"},
            {to: "personName", from: "Me", subject: "Hello", body: "body text"},
            {to: "personName", from: "Me", subject: "Hello", body: "body text"}
            ],
    inbox: [
            {to: "Me", from: "personName", subject: "Hello", body: "body text"},
            {to: "Me", from: "personName", subject: "Hello", body: "second body text"},
            {to: "Me", from: "personName", subject: "Hello", body: "body text"}
             ],
    drafts: [
            {to: "personName", from: "Me", subject: "Hello", body: "body text"},
            {to: "personName", from: "Me", subject: "Hello", body: "body text"}
        ],


}

appData.drafts.newDraft = {to: "Sher", from: "Me", subject: "Hi", body: "this is an added draft email"}; //added draft email

//marks email as sent
appData.sent[0].status = "Marked Sent";
//console.log(appData); prints to check




//prints stuff
console.log("This is a list of mailboxes:  " + appData.mailboxes.join(", ")); 
console.log(" ");
console.log("This is a list of emails (from the inbox): ",  appData.inbox); //This doesn't seem like what the instructions mean by list
console.log(" ");
console.log('This is the text in the second email in the visible list: ', appData.inbox[1]); 
console.log(appData.inbox[0].body); //prints the body text of the second email in the inbox
console.log(appData.drafts); // prints all emails in drafts