import { Ygpa, Sgpa, Dgpa, Link } from "../../components/index"
import { navLinks } from "../../constants";

export default function Main({ page, isMenuOpened,onSetPage }) {
    return (
        <main className="relative w-full px-10 min-h-[calc(100vh-100px)] flex flex-col items-center justify-center ">
            <section className="mb-[5rem] mt-20 flex flex-col gap-[5rem] max-sm:gap-[10rem]">

                {page === "ygpa" &&
                    <Ygpa page={page} />
                }
                {page === "sgpa" &&
                    <Sgpa page={page} />
                }
                {page === "dgpa" &&
                    < Dgpa page={page} />
                }
            </section>

            <section className={`${isMenuOpened ? "block": "hidden"} sm:hidden absolute z-50 w-full h-full top-0 right-0`}>
                <div className="z-50 h-full w-full bg-[lightseagreen] text-white px-16 py-10 text-4xl shadow-menu">
                    <ul className="flex flex-col gap-5">
                        {navLinks.map(item =>
                            <Link
                                key={item.label}
                                page={page}
                                item={item}
                                onSetPage={onSetPage}
                                defultColor="text-[#fffff]"
                                activeColor="text-[#cececef4]"
                            >
                                {item.label}
                            </Link>
                        )}
                    </ul>
                </div>
            </section>
        </main >
    );
}

