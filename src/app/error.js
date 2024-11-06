"use client";

export default function GlobalError({ error, reset }) {
  return (
    <div className="text-center mt-10 place-content-center text-2xl ">
      <h2>Something went wrong !</h2>
      <p>{error.message}</p>
      <button
        className="bg-pink-300 hover:bg-pink-500 hover:text-pink-300 text-black px-3 py-2 rounded mt-4 mb-4 "
        onClick={() => reset()}
      >
        Try again
      </button>
      <br />
    </div>
  );
}
