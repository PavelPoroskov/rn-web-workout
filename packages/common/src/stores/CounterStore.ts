import { makeObservable, observable, action } from "mobx";
import { createContext } from "react";

class CounterStore {
    count = 0

    constructor() {
        makeObservable(this, {
            count: observable,
            incrementCount: action.bound
        })
    }

    incrementCount() {
        this.count += 1
    }
}

// class CounterStore {
//     @observable
//     count = 0

//     @action.bound
//     incrementCount() {
//         this.count += 1
//     }
// }

export const CounterStoreContext = createContext<CounterStore>(new CounterStore())
// export const counterStore = new CounterStore()
