import Link from "next/link";
export default function NotFoundPage() {
  return (
    <div className="text-center mt-10 place-content-center text-2xl ">
      <h1>This page does not exist!</h1>
      <h1 className="mb-8">
        Think carefully about where you would like to go please
      </h1>

      <Link
        className=" bg-pink-300 hover:bg-pink-500 hover:text-pink-300 text-black px-3 py-2 rounded "
        href="/"
      >
        Go Home 🏠
      </Link>
    </div>
  );
}
