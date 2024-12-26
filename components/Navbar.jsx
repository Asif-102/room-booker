import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import Logout from "./auth/Logout";

const Navbar = async ({ sideMenu }) => {
  const session = await auth();
  return (
    <nav>
      <Link href="/">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="RoomBooker" width={200} height={200} />
          <p className="ml-[-80px] text-3xl font-bold">Stay Swift</p>
        </div>
      </Link>

      {sideMenu && (
        <ul>
          <li>
            <Link href="#">Recommended Places</Link>
          </li>

          <li>
            <Link href="#">About Us</Link>
          </li>

          <li>
            <Link href="#">Contact us</Link>
          </li>

          <li>
            <Link href="/bookings">Bookings</Link>
          </li>

          <li>
            {session?.user ? (
              <div>
                <span className="mx-1">{session?.user?.name}</span>
                <span> | </span>
                <Logout />
              </div>
            ) : (
              <Link href="/login" className="login">
                Login
              </Link>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
