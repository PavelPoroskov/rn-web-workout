import { createContext } from "react";

type WorkoutDay = 'a' | 'b'

interface WorkoutHistory {
    [key: string]: Array<{exercise: string, value: number}>
}

class WorkoutStore {
    currentSquat: number
    currentBenchPress: number
    currentOverheadPress: number
    currentDeadLift: number
    currentBarbellRow: number

    lastWorkoutType: WorkoutDay

    history: WorkoutHistory
}

export const WorkoutStoreContext = createContext<WorkoutStore>(new WorkoutStore())