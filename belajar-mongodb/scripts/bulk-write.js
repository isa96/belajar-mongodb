db.customers.bulkWrite([
    {
        insertOne: {
            document: {
                _id: "aaa",
                full_name: "aaa"
            }
        }
    },
    {
        insertOne: {
            document: {
                _id: "bbb",
                full_name: "bbb"
            }
        }
    },
    {
        updateMany: {
            filter: {
                _id: {
                    $in: ["aaa", "bbb", "ccc"]
                }
            },
            update: {
                $set: {
                    full_name: "aaa bbb ccc"
                }
            }
        }
    }
])