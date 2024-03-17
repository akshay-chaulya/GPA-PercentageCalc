import { logo } from "../assets/img";
import { closeIcon, menuIcon } from "../assets/icons";
import { navLinks } from "../constants";
import {Link} from "../components"

// import { Button } from "../components"

export default function Nav({ isMenuOpened, onMenuOpened, page, onSetPage }) {
    return (
        <header className="w-full h-[100px] z-10 px-20 py-4 max-sm:bg-[lightseagreen]">
            <nav className="w-full flex items-center justify-between text-3xl">
                <a href="/">
                    <img className="w-[60px] lg:w-[70px]" src={logo} alt="Logo" />
                </a>
                <ul className="flex gap-[10rem] max-sm:hidden m-auto">
                    {navLinks.map(item =>
                        <Link
                        key={item.label}
                        page={page}
                        item={item}
                        onSetPage={onSetPage}
                        defultColor="text-[#575757]"
                        activeColor="text-[#777]"
                        >
                            {item.label}
                        </Link>
                    )}
                </ul>
                {/* <div className="flex gap-8 max-lg:hidden">
                    <Button>Log In</Button>
                    <Button>Sign Up</Button>
                </div> */}
                <div onClick={onMenuOpened} className="hidden max-sm:block">
                    <img
                        width={40}
                        height={40}
                        src={isMenuOpened ? closeIcon : menuIcon}
                        alt="Menu"
                    />
                </div>
            </nav>
        </header>
    );
}