import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "../../lib/options";
// import { options } from "../api/auth/[...nextauth]/options";


const Nav = async () => {
  const session = await getServerSession(options);
  return (
    <header className="bg-gray-600 text-gray-100">
      <nav className="flex justify-between items-center w-full px-10 py-4">
        <div>My Site</div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          <Link href="/CreateUser">Create User</Link>
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public</Link>
          {session ? (
            <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
          ) : (
            <Link href="http://localhost:3000/api/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;