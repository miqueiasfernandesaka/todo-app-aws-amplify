import { List } from '../../models/list'

export interface IEditList {
  editList (id: string, listInformation: List): Promise<List>
}
