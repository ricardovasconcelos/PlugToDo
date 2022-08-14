import { TaskContainer, TitleStatus, Divisor } from './styles';

export function Task() {
  return (
    <TaskContainer>
      <div>
        <TitleStatus>TO DO</TitleStatus>
        <span>task para plug</span>
        <span>task para plug</span>
      </div>
      <Divisor />
      <div>
        <TitleStatus>DONE</TitleStatus>
        <span>task para plug</span>
        <span>task para plug</span>
      </div>
    </TaskContainer>
  );
}
