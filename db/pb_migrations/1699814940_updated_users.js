/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("hubxmlen")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yqnvmgfp",
    "name": "wordsColllection",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hubxmlen",
    "name": "field",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "words"
      ]
    }
  }))

  // remove
  collection.schema.removeField("yqnvmgfp")

  return dao.saveCollection(collection)
})
