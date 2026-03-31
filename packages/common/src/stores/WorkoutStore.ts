import { action, observable } from "mobx";
import {
  // clearPersistedStore,
  makePersistable,
  // startPersisting,
  // pausePersisting,
} from 'mobx-persist-store';
import type { RootStore } from "./RootStore";

type WorkoutDay = 'a' | 'b'

interface WorkoutHistory {
  [key: string]: Array<{ exercise: string, value: number }>
}

interface CurrentExercise {
  weight: number
  reps: number
  numSets: number
  exercise: string
  sets: string[]
}

export class WorkoutStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore

    makePersistable(this, {
      name: 'WorkoutStore',
      properties: [
        'currentSquat',
        'currentBenchPress',
        'currentOverheadPress',
        'currentDeadLift',
        'currentBarbellRow',
        'lastWorkoutType',
        'currentExercise',
        'history',
      ]
    }).then(() => {
      // action(() => {
      //   pausePersisting(this)
      //   clearPersistedStore(this).then(() => {
      //     startPersisting(this)
      //   })
      // })
    });
  }

  @observable accessor currentSquat: number
  @observable accessor currentBenchPress: number
  @observable accessor currentOverheadPress: number
  @observable accessor currentDeadLift: number
  @observable accessor currentBarbellRow: number

  @observable accessor lastWorkoutType: WorkoutDay

  @observable accessor currentExercise: CurrentExercise[] = []

  @observable accessor history: WorkoutHistory


  @action.bound
  setReps(exerciseIndex: number, setIndex: number, reps: string) {
    this.currentExercise[exerciseIndex].sets[setIndex] = reps
  }

  @action.bound
  addExercises(exerciseList: CurrentExercise[]) {
    while (this.currentExercise.length > 0) {
      this.currentExercise.pop()
    }
    this.currentExercise.push(...exerciseList)
  }
}

