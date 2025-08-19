import { BadgesType } from "@/my-app/hooks/use-bedges"
import Link from "next/link"

export const BadgeComponent = ({
    name,
    url,
    src,
    alt
}:BadgesType) => {
    return (
        <Link href={url} target="_blank" rel="noopener noreferrer" className="group relative">
            <img src={src} alt={alt} />
            <span className="group-hover:block hidden absolute text-center">{name}</span>
        </Link>
    )
}