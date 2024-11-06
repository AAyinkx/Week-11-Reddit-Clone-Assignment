import auth from "../app/middleware";
import { LoginButton } from "./LoginButton";
import { LogoutButton } from "./LogoutButton";
import Link from "next/link";

export async function UserInfo() {
  const session = await auth();

  return (
    <div>
      {session ? (
        <div>
          {session.user.name}{" "}
          <span className="text-xs text-zinc-400 mr-3">#{session.user.id}</span>
          <Link
            href="/user-profile/1"
            className="ml-4 hover:bg-zinc-300 px-3 py-2 rounded bg-pink-300 text-black mr-3"
          >
            User Profile
          </Link>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <span className="mr-4">Welcome, Guest!</span>
          <LoginButton />
        </div>
      )}
    </div>
  );
}
