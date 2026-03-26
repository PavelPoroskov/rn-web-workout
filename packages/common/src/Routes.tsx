import { Route, Router, Routes } from './Router';
import { CurrentWorkoutScreen } from './screens/CurrentWorkout';
import { WorkoutHistoryScreen } from './screens/WorkoutHistory';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkoutHistoryScreen />}/>
        <Route path="/current-workout" element={<CurrentWorkoutScreen />}/>
      </Routes>
    </Router>
  )
}