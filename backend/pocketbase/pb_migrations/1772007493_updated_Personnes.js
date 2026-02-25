/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3446577680")

  // update collection data
  unmarshal({
    "name": "personnes"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3446577680")

  // update collection data
  unmarshal({
    "name": "Personnes"
  }, collection)

  return app.save(collection)
})
