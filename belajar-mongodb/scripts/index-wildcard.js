// membuat wildcard index
db.customers.createIndex({
    "customFields.$**" : 1
});

// Insert many customers
db.customers.insertMany([
    {
        _id: "aaa",
        full_name: "Aaa",
        customFields: {
            hobby: "Gaming",
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "bbb",
        full_name: "Bbb",
        customFields: {
            ipk: 3.2,
            university: "Universitas Belum Ada"
        }
    },
    {
        _id: "ccc",
        full_name: "Ccc",
        customFields: {
            motherName: "Ddd",
            passion: "Entepreneur"
        }
    }
])

// Debug wildcard index
db.customers.find({
    "customFields.passion": "Enterpreneur"
}).explain();
db.customers.find({
    "customFields.ipk": 3.2
}).explain();
db.customers.find({
    "customFields.hobby": "Gaming"
}).explain();