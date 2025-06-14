import { useEffect } from "react"

function Timer({timeLeft, setTimeLeft}) {


    useEffect(() => {
    if (timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup on unmount or when timeLeft changes
    return () => clearInterval(timer);
    }, [timeLeft]);

    // Format time as MM:SS
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs.toString().padStart(2, "0")}`;
    };

    return (
        <div>
            {formatTime(timeLeft)}
        </div>
    )

}

export default Timer;