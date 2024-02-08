import { RegisterLink, LoginLink, LogoutLink, getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Button } from "../ui/button";
export const Navbar = async () => {

  const { isAuthenticated } = getKindeServerSession()
  const isAuthed = await isAuthenticated();

  return (
    <nav>
      {isAuthed ? <Button variant={"secondary"}>
        <LogoutLink>Logout</LogoutLink>
      </Button> :
        <div className="flex justify-start items-center gap-3">
          <div>
            <Button variant={"secondary"}>
              <RegisterLink >Sign up</RegisterLink>
            </Button></div>
          <div>
            <Button variant={"secondary"}>
              <LoginLink>Login</LoginLink>
            </Button>
          </div>
        </div>}
    </nav>
  )
}