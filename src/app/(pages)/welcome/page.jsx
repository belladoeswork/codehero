import Image from "next/image.js";
import Logo from "../../../assets/codeHero/logo1.png";
import Link from "next/link.js";
// import CodeHero from "/public/assets/Level1.png";

export default function Login() {
  //const router = useRouter();

  return (
    <div className="welcome-container ">
      {/* <Image src={CodeHero} alt="Level One Map" className="welcome-logo" /> */}

      <Image src="/assets/Level1.png" alt="Level One Map" className="welcome-logo" width={500} height={300} />

      <h3>
        Welcome to <span id="welcomeSpan">CodeHero</span>
      </h3>
      <Link href={"/login"} id="welcomeBtn">
        Login
      </Link>
    </div>
  );
}

//<Image className="welcome-logo" src={Logo} alt="CodeHero Logo" />
