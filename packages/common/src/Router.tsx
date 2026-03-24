import { useContext } from 'react';
import { observer } from 'mobx-react-lite'
import { WorkoutHistoryScreen } from './screens/WorkoutHistory';
import { CurrentWorkoutScreen } from './screens/CurrentWorkout';
import { RootStoreContext } from './stores/RootStore';

export const Router = observer(() => {
    const rootStore = useContext(RootStoreContext)

    return rootStore.routerStore.screen === 'WorkoutHistory'
        ? <WorkoutHistoryScreen />
        : <CurrentWorkoutScreen />
})