import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller()
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Get('tasks')
  getAllTasks(): any {
    return this.taskService.getAllTask();
  }
  @Post('tasks')
  createTask(@Body() body: { description: string }) {
    const description = body.description;

    if (!description || description.trim().length === 0) {
      throw new BadRequestException('El campo descripcion no puede ir vacia');
    }
    const task = this.taskService.createTask(description);

    return {
      message: 'tarea crada con exito',
      task: task,
    }
  }
}