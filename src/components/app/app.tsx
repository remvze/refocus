import { Container } from '@/components/container';
import { SnackbarProvider } from '@/contexts/snackbar';
import { PomodoroTimer } from '../pomodoro';

export function App() {
  return (
    <SnackbarProvider>
      <Container>
        <PomodoroTimer />
      </Container>
    </SnackbarProvider>
  );
}
