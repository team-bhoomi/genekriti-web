
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server"

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl text-sky-800">Welcome to Genekriti</h1>
      <div>
        <Button><RegisterLink>Sign up</RegisterLink></Button>
        <Button><LoginLink>Login</LoginLink></Button>
      </div>
    </main>
  );
}
