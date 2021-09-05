import { Filter } from '../../models/filter'
import { Task } from '../../models/task'

export default interface IShowTasks {
  show(filter: Array<Filter>): Promise<Array<Task>>
}
