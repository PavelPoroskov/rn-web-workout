import dayjs from "dayjs";
import { action, computed, observable } from "mobx";

export class WorkoutTimerStore {
  @observable accessor startTime = dayjs()
  @observable accessor isRunning = false
  @observable accessor seconds = 0

  timerId = 0

  @action
  measure() {
    if (!this.isRunning) {
      return
    }

    this.seconds = dayjs().diff(this.startTime, 'seconds')
    this.timerId = setTimeout(() => this.measure(), 1000)
  }

  @action.bound
  startTimer() {
    // if (this.timerId) {
    //   clearTimeout(this.timerId)
    //   this.timerId = 0
    // }

    this.startTime = dayjs()
    this.isRunning = true
    this.measure()
  }

  @action.bound
  stopTimer() {
    if (this.timerId) {
      clearTimeout(this.timerId)
      this.timerId = 0
    }

    this.isRunning = false
    this.seconds = 0
  }

  @computed
  get display() {
    const minutes = Math.floor(this.seconds / 60)
    const seconds = this.seconds % 60
    const strSeconds = `${seconds}`

    return `${minutes}:${strSeconds.padStart(2, "0")}`
  }

  @computed
  get percent() {
    return `${Math.min(100, (this.seconds / 180)*100)}%`
  }
}

