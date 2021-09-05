import { Task } from '../../models/task'

export interface IDoneTask {
  done(id: string): Promise<Task>
}
