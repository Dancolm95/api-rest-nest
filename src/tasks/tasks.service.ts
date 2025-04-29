import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  tasks = [
    {
      id: 1,
      description: ' ',
      completed: false,
    },
  ];

  getAllTasks(): string {
    return 'hola mundo';
  }
  findAll(): object {
    return this.tasks;
  }

  createTask(description: string): object {
    const newTask = {
      id: this.tasks.length + 1,
      description: description,
      completed: false,
    };

    this.tasks.push(newTask);

    return newTask;
  }
}
