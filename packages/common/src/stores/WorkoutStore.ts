import type { RootStore } from "./RootStore"

type WorkoutDay = 'a' | 'b'

interface WorkoutHistory {
  [key: string]: Array<{ exercise: string, value: number }>
}

export class WorkoutStore {
  rootStore: RootStore

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
  }

  currentSquat: number
  currentBenchPress: number
  currentOverheadPress: number
  currentDeadLift: number
  currentBarbellRow: number

  lastWorkoutType: WorkoutDay

  history: WorkoutHistory
}
