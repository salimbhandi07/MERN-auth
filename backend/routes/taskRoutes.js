const express = require('express');
const router = express.Router();
const {
  getTasks,
  setTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getTasks);
router.route('/').post(protect, setTask);
router.route('/:id').put(protect, updateTask);
router.route('/:id').delete(protect, deleteTask);

module.exports = router;
