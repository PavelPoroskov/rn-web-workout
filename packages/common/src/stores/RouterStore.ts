// import { makeObservable, observable, action } from "mobx";
import { action, observable } from "mobx";
import type { RootStore } from "./RootStore";

type Routes = 'WorkoutHistory' | 'CurrentWorkout'

export class RouterStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  @observable
  accessor screen: Routes = 'WorkoutHistory'

  @action.bound
  setScreen(inScreen: Routes) {
    this.screen = inScreen
  }
}
