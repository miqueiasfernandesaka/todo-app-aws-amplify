import { Task } from '../../models/task'

export interface IUndoneTask {
  undone(id: string): Promise<Task>
}
