import { useEffect, useState } from "react";

const getSecondsUntilCrunchTime = () => {
  const crunchTime = new Date('2023-11-24T13:05:00'); // ACTUAL
  // const crunchTime = new Date('2023-11-24T01:25:00'); // TEST
  const now = new Date()
  return crunchTime - now;
}

export const Timer = ({ submit }) => {

  const timeRemaining = getSecondsUntilCrunchTime()
  const [hrs, setHours] = useState(Math.floor((timeRemaining / (1000 * 60 * 60)) % 24));
  const [mins, setMinutes] = useState(Math.floor((timeRemaining / 1000 / 60) % 60))
  const [seconds, setSecs] = useState(Math.floor((timeRemaining / 1000) % 60))

  useEffect(() => {
    const interval = setInterval(() => {
      const timeRemaining = getSecondsUntilCrunchTime()

      setHours(Math.floor((timeRemaining / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((timeRemaining / 1000 / 60) % 60))
      setSecs(Math.floor((timeRemaining / 1000) % 60))
    }, 1000);

    const timeout = setTimeout(() => {
      submit()
    }, getSecondsUntilCrunchTime())

    return () => {
      clearInterval(interval);
      clearTimeout(timeout)
    }
  }, []);

  if (timeRemaining < 0) {
    return <p style={{fontSize: `2rem`, fontWeight: `bold`}}>The deadline has passed!!</p>
  }

  return <p style={{fontSize: `2rem`, fontWeight: `bold`}}>
    Deadline in {hrs.toString().padStart(2, `0`)}:{mins.toString().padStart(2, `0`)}:{seconds.toString().padStart(2, `0`)}
  </p>
}
