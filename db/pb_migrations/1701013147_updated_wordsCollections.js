/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cle1zvg3e2ol4eg")

  collection.deleteRule = "id != \"\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cle1zvg3e2ol4eg")

  collection.deleteRule = null

  return dao.saveCollection(collection)
})
