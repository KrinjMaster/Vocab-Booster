/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cle1zvg3e2ol4eg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oj9iipud",
    "name": "author",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cle1zvg3e2ol4eg")

  // remove
  collection.schema.removeField("oj9iipud")

  return dao.saveCollection(collection)
})
