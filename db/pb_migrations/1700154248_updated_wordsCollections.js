/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cle1zvg3e2ol4eg")

  collection.listRule = "id != \"\""
  collection.viewRule = "id != \"\""
  collection.createRule = "id != \"\""
  collection.updateRule = "id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cle1zvg3e2ol4eg")

  collection.listRule = ""
  collection.viewRule = ""
  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
