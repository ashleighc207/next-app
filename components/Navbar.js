import Link from "next/link";
const Navbar = () => {
  return (
    <div>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
};

export default Navbar;
