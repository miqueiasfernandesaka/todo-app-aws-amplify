export interface IRemoveTask {
  removeTask(id: string): Promise<string>
}
