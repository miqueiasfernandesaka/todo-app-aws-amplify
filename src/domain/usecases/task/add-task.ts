import { Task } from '../../models/task'

export interface IAddTask {
  addList(listInformation: Task): Promise<Task>
}
