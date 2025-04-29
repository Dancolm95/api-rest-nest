import { BadRequestException, Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksService } from './tasks/tasks.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createTask(@Body() body: { description: string }) {
    const description = body.description;

    if (!description.trim() || description.trim().length === 0)
      throw new BadRequestException('La tarea no es válida ya que esta vacía');
    else {
      const newTask = this.tasksService.createTask(description);
      const updateTask = this.taskService.findAll();
      }
    }
}
