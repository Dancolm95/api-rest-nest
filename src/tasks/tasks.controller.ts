import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Get('tasks')
  getAllTasks(): string {
    return this.taskService.getAllTasks();
  }
}
