import { Task } from './task'

export type List = {
  id: string
  title: string
  icon: string
  tasks: Array<Task>
  idUser: string
}
