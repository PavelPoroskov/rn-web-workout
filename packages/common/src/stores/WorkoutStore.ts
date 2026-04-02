import dayjs from "dayjs";
import { action, observable } from "mobx";
import {
  // clearPersistedStore,
  makePersistable,
} from 'mobx-persist-store';
import type { RootStore } from "./RootStore";

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

  @observable accessor currentSquat: number = 45
  @observable accessor currentBenchPress: number = 45
  @observable accessor currentOverheadPress: number = 45
  @observable accessor currentDeadLift: number = 65
  @observable accessor currentBarbellRow: number = 65

  @observable accessor lastWorkoutType: WorkoutDay = 'a'

  @observable accessor currentExercise: CurrentExercise[] = []

  @observable accessor history: WorkoutHistory = {}

  @action.bound
  setReps(exerciseIndex: number, setIndex: number, reps: string) {
    this.currentExercise[exerciseIndex].sets[setIndex] = reps
  }

  // @computed
  // get hasCurrentWorkout() {
  //   return this.currentExercise.length > 0
  // }

  @action.bound
  fillExercises() {
    if (!(this.currentExercise.length === 0)) {
      return
    }

    let exerciseList: CurrentExercise[] = []
    const emptySet = ['', '', '', '', '']

    if (this.lastWorkoutType === 'b') {
        exerciseList = [
          {
            exercise: 'Squat',
            numSets: 5,
            reps: 5,
            sets: [...emptySet],
            weight: this.currentSquat,
          },
          {
            exercise: 'Bench Press',
            numSets: 5,
            reps: 5,
            sets: [...emptySet],
            weight: this.currentBenchPress,
          },
          {
            exercise: 'Deadlift',
            numSets: 1,
            reps: 5,
            sets: ['', 'x', 'x', 'x', 'x'],
            weight: this.currentDeadLift,
          },
        ]

        this.currentSquat += 5
        this.currentBenchPress += 5
        this.currentDeadLift += 5
    } else {
        exerciseList = [
          {
            exercise: 'Squat',
            numSets: 5,
            reps: 5,
            sets: [...emptySet],
            weight: this.currentSquat,
          },
          {
            exercise: 'Overhead Press',
            numSets: 5,
            reps: 5,
            sets: [...emptySet],
            weight: this.currentBenchPress,
          },
          {
            exercise: 'Barbell Row',
            numSets: 1,
            reps: 5,
            sets: [...emptySet],
            weight: this.currentDeadLift,
          },
        ]

        this.currentSquat += 5
        this.currentOverheadPress += 5
        this.currentBarbellRow += 5
    }

    this.currentExercise.push(...exerciseList)
    this.lastWorkoutType = this.lastWorkoutType === 'a' ? 'b' : 'a'
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

