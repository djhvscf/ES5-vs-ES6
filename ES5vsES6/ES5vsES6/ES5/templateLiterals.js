var customer = {
    name: "Foo"
};

var card = {
    amount: 7,
    product: "Bar",
    unitprice: 42
};

message = "Hello " + customer.name + ",\n" +
"want to buy " + card.amount + " " + card.product + " for\n" +
"a total of " + (card.amount * card.unitprice) + " bucks?";