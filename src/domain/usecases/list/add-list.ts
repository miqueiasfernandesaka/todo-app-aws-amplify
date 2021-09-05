import { List } from '../../models/list'

export interface IAddList {
  addList(listInformation: List): Promise<List>
}
