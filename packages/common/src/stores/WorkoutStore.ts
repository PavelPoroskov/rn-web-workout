import { action, observable } from "mobx"
import type { RootStore } from "./RootStore"

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
}
