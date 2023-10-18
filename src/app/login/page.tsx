import Card from "@/components/Card";
import LoginSideBarImage from "./components/LoginSideBarImage";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

export default function Login() {
  return (
    <main className="flex h-screen">
      <LoginSideBarImage />
      <div className="flex-1 flex items-center justify-center">
        <Card>
          <TextInput
          placeholder="E-mail"
          type="email"
          iconLeft="uil:envelope-alt">

          </TextInput>
          <TextInput
          placeholder="Senha"
          type="password"
          iconLeft="uil:key-skeleton-alt">

          </TextInput>
          <Button
           className="rounded-md">
            Entrar
          </Button>
          <Button
          iconLeft="uil:facebook-f"
           variant="secondary" className="rounded-md">
            Entrar com o Facebook
          </Button>
          <Button
          iconLeft="fe:google"
           variant="secondary" className="rounded-md">
            Entrar com o Google
          </Button>
          </Card>
      </div>
    </main>
  )
}