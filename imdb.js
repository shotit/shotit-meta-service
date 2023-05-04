import pkg from "mongodb";
const { MongoClient } = pkg;

const { MONGODB_ATLAS_URL, MONGODB_ATLAS_DB } = process.env;

export default async (req, res) => {
  const client = await MongoClient.connect(MONGODB_ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => {
    console.log(err);
  });
  if (!client) return;
  try {
    const { ids = [] } = req.body;
    const db = client.db(MONGODB_ATLAS_DB);
    let collection = db.collection("imdb");
    console.log(typeof ids, ids);
    let checkedIds = ids;
    if (!Array.isArray(ids)) {
      // When application/x-www-form-urlencoded instead of application/json
      checkedIds = ids.split(",");
    }
    const mongoQueries = checkedIds.map((id) => ({
      id: id,
    }));
    const response = await Promise.all(
      mongoQueries.map(async (mongoQuery) => {
        const record = await collection.findOne(mongoQuery);
        return record;
      })
    );
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(503).json({
      error: `Error: MongoDB is not responding`,
    });
  } finally {
    client.close();
  }
};
