import {Link} from "../components"
import { footerLinks } from "../constants";

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white px-10 py-20 flex items-center justify-center">
            <ul className="flex gap-[10vw]">
                {footerLinks.map(item=> 
                    <Link
                        key={item.label}
                        item={item}
                    >
                        <img src={item.img} alt={item.label} />
                    </Link>
                )
                }

            </ul>
        </footer>
    );
}