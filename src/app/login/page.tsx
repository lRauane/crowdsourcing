import Card from "@/components/Card";
import LoginSideBarImage from "./components/LoginSideBarImage";
import Button from "@/components/Button";

export default function Login() {
  return (
    <main className="flex h-screen">
      <LoginSideBarImage />
      <div className="flex-1 flex items-center justify-center">
        <Card>
          Text
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