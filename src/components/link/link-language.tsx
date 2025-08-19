import { getLocalizedPath, LanguageType } from "@/my-app/hooks/use-languages";
import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

export type LinkLanguagePropsType = LinkProps &  {
    href: string;
    label: string | ReactNode;
    lang?: LanguageType;
    icon?: string;
    disabled?: boolean;
}

export const LinkLanguage = ({
    href,
    label,
    lang,
    icon,
    disabled,
    ...props
}: LinkLanguagePropsType) => {
    
    if (disabled) return (
        <button className="text-base/normal font-medium tracking-normal text-gray-400 text-left" disabled>
                {label}
        </button>
    )

	return (
		<Link
			href={lang ? getLocalizedPath(href, lang) : href}
            
			{...props}
		>
			{label}
		</Link>
	);
}