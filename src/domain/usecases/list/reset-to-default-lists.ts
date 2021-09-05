import { List } from '../../models/list'

export interface IResetToDefaultLists {
  reset(): Promise<Array<List>>
}
