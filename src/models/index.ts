interface Task {
    id: number;
    description: string;
    dueDate: string;
    completed: boolean;
}

class TaskModel {
    private tasks: Task[];

    constructor() {
        this.tasks = JSON.parse(window.localStorage.getItem('tasks') ?? '') || [];
    }

    public addTask(description: string, dueDate: string): Task {
        const newTask: Task = {
            id: new Date().getTime(),
            description,
            dueDate,
            completed: false,
        };
        this.tasks.push(newTask);
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
        return newTask;
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public markTaskAsCompleted(taskId: number): Task {
        const task: Task | undefined = this.tasks.find((t: Task) => t.id === taskId);
        if (!task) throw new Error(`Task with id ${taskId} not found.`);
        task.completed = true;
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
        return task;
    }

    public deleteTask(taskId: number): void {
        const taskIndex: number = this.tasks.findIndex((t: Task) => t.id === taskId);
        if (taskIndex === -1) throw new Error(`Task with id ${taskId} not found.`);
        this.tasks.splice(taskIndex, 1);
        window.localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}

export { Task, TaskModel };
