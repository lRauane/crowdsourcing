'use client'

type VotingPeriodProps = {
  dateTime: string
}

const VotingPeriod = ({dateTime} : VotingPeriodProps) => {
  const formatteDate = new Date(dateTime).toLocaleDateString();
  const formateHours = new Date(dateTime).toLocaleTimeString();

  return (
    <p className=" text-sm">
    *Você pode votar até às <span>{formateHours}</span> do dia{" "}
    <span>{formatteDate}</span>
  </p>
  )
}

export default VotingPeriod;