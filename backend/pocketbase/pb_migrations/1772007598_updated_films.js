/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3446577680",
    "hidden": false,
    "id": "relation113706113",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "producteurs",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date1010815986",
    "max": "",
    "min": "",
    "name": "date_sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2220277813",
    "max": null,
    "min": null,
    "name": "duree_min",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3446577680",
    "hidden": false,
    "id": "relation733281835",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "acteurs",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3446577680",
    "hidden": false,
    "id": "relation2128342544",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "realisateurs",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3295370174")

  // remove field
  collection.fields.removeById("relation113706113")

  // update field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "date1010815986",
    "max": "",
    "min": "",
    "name": "sortie",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number2220277813",
    "max": null,
    "min": null,
    "name": "duree",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // update field
  collection.fields.addAt(6, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3446577680",
    "hidden": false,
    "id": "relation733281835",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "personnes",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3446577680",
    "hidden": false,
    "id": "relation2128342544",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "producteur",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
