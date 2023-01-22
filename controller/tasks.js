const Task = require("../models/tasks");

//
const getallTasks = async (req, res, next) => {
  // console.log("get all task");
  try {
    const get = await Task.find(() => {});
    res.status(201).json(get);
  } catch (error) {
    next(error);

    // res.status(500).json({ message: error });
    // console.log(error)
  }
};

//
// creating a task
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ message: error });
    console.log(error);
  }
};

// get single task
const getsingleTask = async (req, res) => {
  try {
    console.log(req.params);
    const get = await Task.findOne({ _id: req.params.id });
    if (!get) {
      return res.status(404).json({ msg: `no task with ${req.params.id}` });
    }
    res.status(201).json(get);
    console.log("okay");
  } catch (error) {
    res.status(500).json({ message: error });
    // console.log(error)
  }
};

//
//
const deleteTask = async (req, res) => {
  try {
    const result = await Task.findOneAndDelete({ _id: req.params.id });
    if (!result) {
      return res.status(404).json({ msg: `no task with ${req.params.id}` });
    }
    res.status(200).json({ result });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

//
const updateTask = async (req, res) => {
  try {
    const result = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = {
  getallTasks,
  createTask,
  getsingleTask,
  updateTask,
  deleteTask,
};
