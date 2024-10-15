import Link from "next/link"
import styles from "./FooterLink.module.scss"
import { LinkList } from "../LinkList"
import { useClassName } from "@/hooks/useClassName";

const FooterLink = () => {
    const { themeClassName } = useClassName();

    return (
        <>
            <div className={styles.link_container}>
                {Array.from({ length: Math.ceil(LinkList.length / 3) }, (_, i) => {
                    return (
                        <div className={styles.link_content} key={`link_content ${i}`}>
                            {LinkList.slice(i * 3, i * 3 + 3).map((item) => {
                                return (
                                    <Link
                                        href={item.href}
                                        key={item.name}
                                        className={themeClassName("link", styles)}>
                                        {item.name}
                                    </Link>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default FooterLink