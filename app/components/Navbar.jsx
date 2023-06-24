import Link from "next/link";
import NavItems from "./NavItems";


const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg p-3  bg-dark">
      <div class="container-fluid">
        <Link href={"/"} className="navbar-brand text-light">
            CodeWithAJ
        </Link>
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <NavItems />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
