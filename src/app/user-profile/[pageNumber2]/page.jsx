import { UserPostList } from "@/components/UserPostList";
import auth from "@/app/middleware.js";
export default async function UserProfile({ params }) {
  const session = await auth();
  return (
    <div className="text-center place-content-center mt-10">
      <h1>Hello {session.user.name},</h1>
      <p>These are you posts</p>
      <UserPostList currentPage={parseInt(params.pageNumber2, 10)} />
    </div>
  );
}
