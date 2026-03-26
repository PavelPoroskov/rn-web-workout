// import { makeObservable, observable, action } from "mobx";

import { createContext } from "react";
// import { RouterStore } from "./RouterStore";
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";

export class RootStore {
  // routerStore = new RouterStore(this)
  workoutStore = new WorkoutStore(this)
  workoutTimer = new WorkoutTimerStore()
}

export const RootStoreContext = createContext<RootStore>(new RootStore())