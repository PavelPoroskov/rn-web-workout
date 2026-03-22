import { useContext } from 'react';
import { RouterStoreContext } from './stores/RouterStore';
import { observer } from 'mobx-react-lite'
import { WorkoutHistoryScreen } from './screens/WorkoutHistory';
import { CurrentWorkoutScreen } from './screens/CurrentWorkout';

export const Router = observer(() => {
    const routerStore = useContext(RouterStoreContext)
    
    return routerStore.screen === 'WorkoutHistory'
        ? <WorkoutHistoryScreen />
        : <CurrentWorkoutScreen />
})