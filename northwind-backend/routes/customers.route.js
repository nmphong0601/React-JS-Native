const express = require('express');
const customersModel = require("../models/customers.model");

const router = express.Router();

router.get('/', async (req, res, next) => {
  const rows = await customersModel.all();
  res.json(rows);
})

router.get('/:id', async (req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).json({
      err: 'Invalid id.'
    });
  }

  const id = req.params.id || -1;
  try {
    const rows = await customersModel.loadById(id);
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
    const results = await customersModel.add(req.body);
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
    const results = await customersModel.update(id, req.body);
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
})

router.delete('/:id', async (req, res) => {
  if (isNaN(req.params.id)) {
    return res.status(400).json({
      err: "Invalid id."
    });
  }

  const id = req.params.id || -1;
  try {
    const results = await customersModel.delete(id);
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