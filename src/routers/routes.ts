const router = require('express').Router(); // importa o Router do express

const taskController = require('../controllers/index');

router.post('/tasks', taskController.addTask);
router.get('/tasks', taskController.getTasks);
router.put('/tasks/:id', taskController.markTaskAsCompleted);
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
