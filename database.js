const { MongoClient } = require("mongodb");

const URL =
  "mongodb+srv://jubairk:X53SwsPJUifU5weH@cluster0.n9xubax.mongodb.net/";

const client = new MongoClient(URL);

const dbName = "Nodejs";

async function main() {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("User");

  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);

  const data = {
    first_name: "salman",
    last_name: "ks",
    desgination: "Software Engineer",
    city: "salem",
    age: 28,
    mobile: 9095517274,
  };

    const insertResult = await collection.insertOne(data);
    console.log("Inserted a single document =>", insertResult);

  //   const countResult = await collection.estimatedDocumentCount();
  //   console.log(countResult);

  //   const Findresult = await collection.find({ first_name: "salman" }).toArray();
  //   console.log(Findresult);

  //   const RenamedResult = await collection.updateOne(
  //     { first_name: "jubair" },
  //     { $set: { first_name: "salman" } }
  //   );
  //   console.log(RenamedResult);

//   const DeletedResult = await collection.deleteOne({ first_name: "salman" });
//   console.log(DeletedResult);

  return "done";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
