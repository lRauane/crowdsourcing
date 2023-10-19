import Card from "@/components/Card";
import FirstStep from "./components/FirstStep";
import React from "react";
import SecondStep from "./components/SecondStep";
import { Icon } from "@iconify/react/dist/iconify.js";
import { LoginPageActionTypes } from "../../page";

export type RegisterFormState = {
  step?: number;
  email?: string;
  password?: string;
  confirmPassword?: string;
  fullName?: string;
  dateOfBirth?: string | Date;
  cellPhone?: string;
};

type RegisterFormProps ={
  handleSetAction: (action: LoginPageActionTypes) => void
}

const RegisterForm = ({handleSetAction}: RegisterFormProps) => {
  const [state, setState] = React.useState<RegisterFormState>({
    step: 0,
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    dateOfBirth: "",
    cellPhone: "",
  });

  const handleChangeState = (updatedValues: RegisterFormState) => {
    setState((previousState) => ({
      ...previousState,
      ...updatedValues,
    }));
  };

  const handleNextStep = () => {
    handleChangeState({ step: state.step ? state.step++ : 1 });
  };

  const steps = [
    <FirstStep
      handleNextStep={handleNextStep}
      key={0}
      handleChangeState={handleChangeState}
      state={state}
    />,

    <SecondStep state={state} handleChangeState={handleChangeState} key={1} />,
  ];

  return (
    <Card className="border-[#121212]">
      {steps[state.step ?? 0]}
      <div className="mt-[26px]">
        <span className="flex items-center gap-1 text-sub cursor-pointer" onClick={() => handleSetAction('login')}>
          <Icon icon={"uil:user"} />
          Login
        </span>
      </div>
    </Card>
  );
};

export default RegisterForm;
