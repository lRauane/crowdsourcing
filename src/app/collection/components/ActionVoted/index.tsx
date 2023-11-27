import { Icon } from "@iconify/react/dist/iconify.js";

type ActionVotedProps = {
  actionVoted: SolutionVoted;
}

const ActionVoted= ({actionVoted}: ActionVotedProps) => {
  const {title, description, amountRequired, votes} = actionVoted;

  return (
    <>
      <h3 className="font-bold text-base">{title}</h3>
                <p>
                  {description}
                </p>
                <div className="flex flex-col justify-center items-center">
                <p className="text-sm text-center">
                  <span className="text-base font-bold">R$ {amountRequired}</span> Quantia necessária para esta solução 
                </p>
                <div className="flex items-center text- text-base font-bold gap-1 voted">
                  <Icon icon="fluent:star-24-filled" color="voted"/>
                  <span>{votes} votos recebidos</span>
                </div>
                </div>
    </>
  )
}

export default ActionVoted;