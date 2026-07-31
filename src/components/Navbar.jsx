import { playClickSound } from "../utils/sound.js";
import { useState } from "react";
import dayjs from "dayjs";
import { navLinks, navIcons } from "#constants";
import useWindowStore from "#store/window.js";

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const [showThemeMenu, setShowThemeMenu] = useState(false);

    const changeTheme = (theme) => {
        document.body.dataset.theme = theme;
        setShowThemeMenu(false);
    };

    return (
        <nav>
            <div>
                <img src="/images/logo.svg" alt="logo" />

                <p className="font-bold">
                    Priya's Portfolio
                </p>

                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li
                            key={id}
                            onClick={() => openWindow(type)}
                        >
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>


            <div>
                <ul className="theme-icons">
                    {navIcons.map(({ id, img }) => (
                        <li
                            key={id}
                            className="relative"
                        >
                            <img
                                src={img}
                                className="icon-hover cursor-pointer"
                                alt={`icon-${id}`}
                                onClick={() => {
                                    console.log("ICON CLICKED");

                                    playClickSound();

                                    if (id === 4) {
                                        setShowThemeMenu((prev) => !prev);
                                    }
                                }}
                            />


                            {id === 4 && showThemeMenu && (
                                <div className="theme-menu absolute right-0 top-8 z-50 bg-white/80 backdrop-blur-xl rounded-xl shadow-xl p-2 w-36">

                                    <p
                                        onClick={() =>
                                            changeTheme("default")
                                        }
                                    >
                                        Default
                                    </p>

                                    <p
                                        onClick={() =>
                                            changeTheme("light")
                                        }
                                    >
                                        Light
                                    </p>

                                    <p
                                        onClick={() =>
                                            changeTheme("dark")
                                        }
                                    >
                                        Dark
                                    </p>


                                </div>
                            )}
                        </li>
                    ))}
                </ul>

                <time>
                    {dayjs().format("ddd MMM D h:mm A")}
                </time>
            </div>
        </nav>
    );
};

export default Navbar;