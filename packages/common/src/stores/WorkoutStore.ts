import { action, observable } from "mobx";
import {
  // clearPersistedStore,
  makePersistable,
  // startPersisting,
  // pausePersisting,
} from 'mobx-persist-store';
import type { RootStore } from "./RootStore";
import dayjs from "dayjs";

type WorkoutDay = 'a' | 'b'

export interface CurrentExercise {
  weight: number
  reps: number
  numSets: number
  exercise: string
  sets: string[]
}

interface WorkoutHistory {
  [key: string]: CurrentExercise[]
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

  @observable accessor history: WorkoutHistory = {}


  @action.bound
  setReps(exerciseIndex: number, setIndex: number, reps: string) {
    this.currentExercise[exerciseIndex].sets[setIndex] = reps
  }

  @action.bound
  addExercises(exerciseList: CurrentExercise[]) {
    this.currentExercise  = []
    this.currentExercise.push(...exerciseList)
  }

  @action.bound
  saveHistory() {
    const strDate =  dayjs().format('YYYY-MM-DD')
    // const strDate =  '2026-04-01'
    this.history[strDate] = this.currentExercise.map((exercise) => {
      const {sets, ...rest} = exercise

      return {
        ...rest,
        sets: [...sets],
      }
    })

    this.currentExercise  = []
  }
}

