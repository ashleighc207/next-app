import Link from "next/link";
const App = () => {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <h1>Index page</h1>
    </div>
  );
};

export default App;
