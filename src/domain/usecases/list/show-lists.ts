import { Filter } from '../../models/filter'
import { List } from '../../models/list'

export default interface IShowLists {
  show(filter: Array<Filter>): Promise<Array<List>>
}
