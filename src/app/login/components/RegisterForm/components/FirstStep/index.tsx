'use client'
import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import { RegisterFormState } from "../.."

type FirstStepProps = {
  handleNextStep: () => void,
  state: RegisterFormState,
  handleChangeState: (updateValues: RegisterFormState) => void
}

const FirstStep = ({handleNextStep, state, handleChangeState}:FirstStepProps) => {
  return (
    <>
    <TextInput
      label="E-mail"
      type="email"
      onChange={(e) => handleChangeState({email: e.target.value})}
      value={state.email}
      placeholder="E-mail"
      iconLeft="uil:envelope-alt"
    />
    <TextInput
      label="Senha"
      labelClassNames="text-black"
      placeholder="Senha"
      type="password"
      onChange={(e) => handleChangeState({password: e.target.value})}
      value={state.password}
      iconLeft="uil:key-skeleton-alt"
    />
    <TextInput
      label="Confirmar senha"
      labelClassNames="text-black"
      placeholder="Confirmar senha"
      type="password"
      onChange={(e) => handleChangeState({confirmPassword: e.target.value})}
      value={state.confirmPassword}
      iconLeft="uil:key-skeleton-alt"
    />
    <div className="mt-[24px]">
    <Button className="rounded-md w-[100%]" onClick={handleNextStep}>Próximo</Button>
    </div>
  </>
  )
}

export default FirstStep