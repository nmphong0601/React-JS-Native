const express = require('express');
const usersModel = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get('/', async (req, res, next) => {
  const rows = await usersModel.all();
  res.json(rows);
})

router.post('/login', async (req, res, next) => {
  const rows = await usersModel.authenticate(req.body.data.userName);
  if (rows.length === 0) {
    res.status(204).end();
  } else {
    if (bcrypt.compareSync(req.body.data.password, rows[0].password)) {
      const token = jwt.sign({ id: rows[0].id }, req.app.get("secretKey"), {
        expiresIn: "1h"
      });
      res.status(200).json({
        status: "success",
        message: "user found!!!",
        data: { user: rows[0], token: token }
      });
    } else {
      res.json({
        status: "error",
        message: "Invalid user name/password!!!",
        data: null
      });
    }
  }
})

router.get('/:id', async (req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).json({
      err: 'Invalid id.'
    });
  }

  const id = req.params.id || -1;
  try {
    const rows = await usersModel.loadById(id);
    if (rows.length === 0) {
      res.status(204).end();
    } else {
      res.json(rows[0]);
    }
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end('View error log on console.');
  }
})

router.post('/', async (req, res) => {
  try {
    const results = await usersModel.add(req.body.data);
    const ret = {
      id: results.insertId,
      ...req.body
    }
    res.status(201).json(ret);
  } catch (err) {

  }
})

router.put('/:id', async (req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).json({
      err: "Invalid id."
    });
  }

  const id = req.params.id || -1;
  try {
    const results = await usersModel.update(id, req.body.data);
    const ret = {
      id: results.updateId,
      ...req.body
    }
    res.status(201).json(ret);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end('View error log on console.');
  }
})

router.delete('/:id', async (req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).json({
      err: "Invalid id."
    });
  }

  const id = req.params.id || -1;
  try {
    const results = await usersModel.delete(id);
    const ret = {
      id: results.insertId,
      ...req.body
    }
    res.status(201).json(ret);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.end('View error log on console.');
  }

  // res.json({
  //   msg: 'del'
  // });
})

router.patch('/patch', (req, res) => {
  res.json({
    msg: 'patched'
  });
})

module.exports = router;