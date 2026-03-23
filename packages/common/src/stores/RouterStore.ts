// import { makeObservable, observable, action } from "mobx";
import { action, observable } from "mobx";
import { createContext } from "react";

type Routes = 'WorkoutHistory' | 'CurrentWorkout'

class RouterStore {
    @observable
    accessor screen: Routes = 'CurrentWorkout'

    @action.bound
    setScreen(inScreen: Routes) {
        this.screen = inScreen
    }    
}

export const RouterStoreContext = createContext<RouterStore>(new RouterStore())
