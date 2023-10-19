'use client'

import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { RegisterFormState } from "../.."

type SecondStepProps ={
  state: RegisterFormState,
  handleChangeState: (updateValues: RegisterFormState) => void
}

const SecondStep = ({state, handleChangeState}:SecondStepProps) => {
  return(
    <>
    <TextInput
      label="Nome completo"
      type="text"
      onChange={(e) => handleChangeState({fullName: e.target.value})}
      value={state.fullName}
      placeholder="Nome completo"
      iconLeft="uil:user"
    />
    <TextInput
      label="Data de nascimento"
      labelClassNames="text-black"
      placeholder="DD/MM/AAAA"
      onChange={(e) => handleChangeState({dateOfBirth: e.target.value})}
      value={state.dateOfBirth?.toString()}
      type="date"
      iconLeft="uil:calendar-alt"
    />
    <TextInput
      label="Celular"
      onChange={(e) => handleChangeState({cellPhone: e.target.value})}
      value={state.cellPhone}
      labelClassNames="text-black"
      placeholder="(00)-9 0000-0000"
      type="text"
      iconLeft="uil:key-skeleton-alt"
    />
    <div className="mt-[24px]">
    <Button className="rounded-md w-[100%]">Próximo</Button>
    </div>
  </>
  )
}

export default SecondStep;