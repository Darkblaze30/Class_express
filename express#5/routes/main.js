import mongoose from "mongoose";
import express from "express";

const collectionRoute = express.Router();

function connectionMongo(nameCollection, Schema) {
  mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`);

  const Collection = mongoose.model(nameCollection, Schema);

  collectionRoute.get("/", (req, res) => {
    Collection.find({})
      .then((docs) => res.send(docs))
      .catch((err) => res.send(err));
  });

  collectionRoute.post("/", (req, res) => {
    const collection = new Collection(req.body);
    collection
      .save()
      .then((docs) => res.status(201).send(docs))
      .catch((err) => res.send(err));
  });

  collectionRoute.get("/:_id", (req, res) => {
    Collection.find(req.params)
      .then((docs) => {
        res.send(docs);
      })
      .catch((error) => {
        res.send("error:" + error);
      });
  });

  collectionRoute.put("/:_id", (req, res) => {
    Collection.updateOne(req.params, { $set: req.body })
      .then((docs) => {
        res.send(docs);
      })
      .catch((error) => {
        res.send("error:" + error);
      });
  });

  collectionRoute.delete("/:_id", (req, res) => {
    Collection.updateOne(req.params)
      .then((docs) => {
        res.send(docs);
      })
      .catch((error) => {
        res.send("error:" + error);
      });
  });

  return collectionRoute;
}

export default connectionMongo;
