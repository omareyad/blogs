import { ref } from "vue";
export function UseTimerUp(status1, status2, initSecond) {
  // Timer Methods
  const MyTimer = ref("");
  const totalSeconds = ref(initSecond);
  const activeStartButton = ref(status1);
  const activeStopButton = ref(status2);
  const progressTimer = ref("");
  const startTimer = () => {
    MyTimer.value = setInterval(countUpTimer, 1000);
    activeStartButton.value = true;
    activeStopButton.value = false;
  };
  const stopTimer = () => {
    clearInterval(MyTimer.value);
    activeStartButton.value = false;
    activeStopButton.value = true;
  };
  const countUpTimer = () => {
    totalSeconds.value++;
    let hour = Math.floor(totalSeconds.value / 3600);
    let minute = Math.floor((totalSeconds.value - hour * 3600) / 60);
    let seconds = totalSeconds.value - (hour * 3600 + minute * 60);
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (seconds < 10) seconds = "0" + seconds;
    progressTimer.value = hour + ":" + minute + ":" + seconds;
  };
  const onUserEdit = () => {
    if (!activeStartButton.value) {
      startTimer();
    }
  };

  return {
    startTimer,
    stopTimer,
    onUserEdit,
    activeStartButton,
    activeStopButton,
    progressTimer,
  };
}
