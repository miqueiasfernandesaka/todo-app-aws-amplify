import { List } from '../../models/list'

export interface IGetList {
  getList(id: string): List
}
