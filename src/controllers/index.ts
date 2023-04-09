import { Request, Response } from 'express';
import { TaskModel } from '../models/index';

interface Task {
    id: number;
    description: string;
    dueDate: string;
    completed: boolean;
}

class TaskController {
    private taskModel: TaskModel;

    constructor() {
        this.taskModel = new TaskModel();
    }

    public addTask(req: Request, res: Response): void {
        const { description, dueDate } = req.body;
        const newTask: Task = this.taskModel.addTask(description, dueDate);
        res.status(201).json(newTask);
    }

    public getTasks(req: Request, res: Response): void {
        const tasks: Task[] = this.taskModel.getTasks();
        res.status(200).json(tasks);
    }

    public markTaskAsCompleted(req: Request, res: Response): void {
        const taskId: string = req.params.id;
        const task: Task = this.taskModel.markTaskAsCompleted(Number(taskId));
        res.status(200).json(task);
    }

    public deleteTask(req: Request, res: Response): void {
        const taskId: string = req.params.id;
        this.taskModel.deleteTask(Number(taskId));
        res.sendStatus(204);
    }
}

export default TaskController;
