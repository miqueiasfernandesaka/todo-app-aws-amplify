import { List } from './list'

export type Task = {
  id: string
  title: string
  description: string
  done: boolean
  list: List
}
