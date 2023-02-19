migrate((db) => {
  const collection = new Collection({
    "id": "b4tsom4n7lcakxh",
    "created": "2023-02-18 19:10:09.646Z",
    "updated": "2023-02-18 19:10:09.646Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "orq9uwqk",
        "name": "title",
        "type": "text",
        "required": true,
        "unique": true,
        "options": {
          "min": null,
          "max": 30,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "5zwkvdnh",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 1000,
          "pattern": ""
        }
      }
    ],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("b4tsom4n7lcakxh");

  return dao.deleteCollection(collection);
})
