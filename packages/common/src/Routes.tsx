import { Route, Router, Routes } from './Router';
import { CurrentWorkoutScreen } from './screens/CurrentWorkout';
import { WorkoutHistoryScreen } from './screens/WorkoutHistory';

const routerFutureFlags = {
  v7_relativeSplatPath: true,
  v7_startTransition: true,
}

export const AppRoutes = () => {
  return (
    <Router future={routerFutureFlags}>
      <Routes>
        <Route path="/" element={<WorkoutHistoryScreen />} />
        <Route path="/current-workout" element={<CurrentWorkoutScreen />} />
        <Route path="/workout/:date" element={<CurrentWorkoutScreen />} />
      </Routes>
    </Router>
  )
}