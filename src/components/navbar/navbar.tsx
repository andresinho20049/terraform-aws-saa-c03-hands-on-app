"use client";

import { pages } from "@/my-app/hooks/use-pages";
import { useCallback, useEffect, useRef, useState } from "react";
import { HamburgerButton } from "./hamburger";
import { LogoComponent } from "./Logo";
import { NavBarLink } from "./navbar-link";
import { ThemeToggle } from "./theme-toggle";
import { LanguageType } from "@/my-app/hooks/use-languages";
import LanguageSwitcher from "./language-switter";

export type NavBarPropsType = {
	lang: LanguageType,
	dictionary: {
		pages: {
			home: string;
			about: string;
			contact: string;
		}, lang_switcher: {
			label: string;
			pt_link: string;
			en_link: string;
    	};
	}
}

export const NavBar = ({
	lang,
	dictionary
}:NavBarPropsType) => {
	const [open, setOpen] = useState(false);
	const navRef = useRef<HTMLDivElement>(null);

	const handleClose = useCallback(() => {
		setOpen(false);
	}, []);

	useEffect(() => {
		const handleClickOutside = (event: Event) => {
			if (
				navRef.current &&
				!navRef.current?.contains(event.target as Node)
			) {
				handleClose();
			}
		};
		document.addEventListener("click", handleClickOutside, true);
	}, [navRef]);

	return (
		<nav
			ref={navRef}
			className="flex flex-wrap items-center justify-between py-1 px-10"
		>
			<LogoComponent />
			<div className="flex md:hidden">
				<HamburgerButton open={open} setOpen={setOpen} />
			</div>
			<div
				className={` ${
					open ? "flex flex-col" : "hidden"
				} w-full md:w-auto md:flex md:flex-row gap-4 items-center md:mt-0 md:border-none`}
			>
				{pages.map((p) => (
					<NavBarLink
						key={p.href}
						href={p.href}
						label={dictionary.pages[p.labelKey as keyof typeof dictionary.pages]}
						callback={handleClose}
					/>
				))}
			</div>

			<div
				className={`${
					open
						? "flex justify-center mt-5 py-4 gap-4 border-t-2 border-gray-500"
						: "hidden"
				} w-full md:flex md:w-auto`}
			>
				<LanguageSwitcher lang={lang} dictionary={dictionary} />
				<ThemeToggle />
			</div>
		</nav>
	);
};
