/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cle1zvg3e2ol4eg",
    "created": "2023-11-12 19:31:32.342Z",
    "updated": "2023-11-12 19:31:32.342Z",
    "name": "wordsCollections",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fryv9vhm",
        "name": "name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "la2kl48o",
        "name": "words",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cle1zvg3e2ol4eg");

  return dao.deleteCollection(collection);
})
