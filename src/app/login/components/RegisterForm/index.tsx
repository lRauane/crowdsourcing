import Button from "@/components/Button";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";

const RegisterForm = () => {
  return (
    <Card className="border-[#121212]">
      <>
        <TextInput
          label="E-mail"
          type="email"
          placeholder="E-mail"
          iconLeft="uil:envelope-alt"
        />
        <TextInput
          label="Senha"
          labelClassNames="text-black"
          placeholder="Senha"
          type="password"
          iconLeft="uil:key-skeleton-alt"
        />
        <TextInput
          label="Confirmar senha"
          labelClassNames="text-black"
          placeholder="Confirmar senha"
          type="password"
          iconLeft="uil:key-skeleton-alt"
        />
        <div className="mt-[24px]">
        <Button className="rounded-md w-[100%]">Próximo</Button>
        </div>
      </>
    </Card>
  );
};

export default RegisterForm;
