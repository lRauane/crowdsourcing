'use client'

type TitleProps = {
  content: string
}

const Title = ({content}: TitleProps) => {
  const defaultClasses = 'text-[56px] text-black font-extrabold text-center'

  return (
    <h1 className={`${defaultClasses}`}>
      {content}
    </h1>
  )
}

export default Title;