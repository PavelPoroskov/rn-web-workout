// import { makeObservable, observable, action } from "mobx";

import { createContext } from "react";
// import { RouterStore } from "./RouterStore";
import { createAsyncStorage } from "@react-native-async-storage/async-storage";
import { WorkoutStore } from "./WorkoutStore";
import { WorkoutTimerStore } from "./WorkoutTimerStore";
import { configurePersistable } from 'mobx-persist-store';

const AsyncStorage = createAsyncStorage("appDB");

configurePersistable(
  {
    storage: AsyncStorage,
    // stringify: true,
    // debugMode: true,
  },
);

export class RootStore {
  // routerStore = new RouterStore(this)
  workoutStore = new WorkoutStore(this)
  workoutTimer = new WorkoutTimerStore()
}

export const RootStoreContext = createContext<RootStore>(new RootStore())