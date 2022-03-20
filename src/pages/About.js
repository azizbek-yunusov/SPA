import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1 className="text-xl">Not About Page</h1>
      <Link to="/" className="text-xl p-3 bg-green-500">home</Link>
    </div>
  );
}