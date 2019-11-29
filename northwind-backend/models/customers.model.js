const db = require('../utils/db');

module.exports = {
  all: () => {
    const sql = "select * from customers";
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from customers where id = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, "customers"),
  update: (id, entity) => db.update(id, entity, "customers"),
  delete: id => db.delete(id, "customers")
};
