const db = require('../utils/db');

module.exports = {
  authenticate: userName => {
    const sql = `select * from users where user_name = '${userName}'`;
    return db.load(sql);
  },

  all: () => {
    const sql = "select * from users";
    return db.load(sql);
  },

  loadById: id => {
    const sql = `select * from users where id = ${id}`;
    return db.load(sql);
  },

  add: entity => db.add(entity, "users"),
  update: (id, entity) => db.update(id, entity, "users"),
  delete: id => db.delete(id, "users")
};
