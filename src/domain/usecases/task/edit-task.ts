import { Task } from '../../models/task'

export interface IEditList {
  editTask (id: string, taskInformation: Task): Promise<Task>
}
