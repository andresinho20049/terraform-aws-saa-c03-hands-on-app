import { ReactNode } from "react";

export const FooterSectionComponent = ({
    title,
    children,
}: {
    title: string;
    children: ReactNode;
}) => (
    <div className={"flex flex-col flex-1 gap-4 p-4"}>
        <h2>{title}</h2>
        {children}
    </div>
);