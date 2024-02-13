
import { Button } from "@/components/ui/button";
import { RegisterLink, LoginLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { redirect } from "next/navigation";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession()
  const isAuthed = await isAuthenticated();
  if (isAuthed) {
    redirect("/dashboard");
  }
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
