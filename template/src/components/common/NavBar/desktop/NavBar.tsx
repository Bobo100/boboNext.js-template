import { Fragment, useRef } from "react"
import styles from "./NavBar.module.scss"
import Link from "next/link"
import ThemeToggle from "@/components/common/Theme/ThemeToggle"
import { useTheme } from "next-themes"
import { getThemeClassName } from "@/utils/commonFunction"
import { LinkList, LinkListDetail } from "../../LinkList"
import UseNavBarCommon from "../hooks/useNavBarCommon"
const NavBar = () => {
    const { theme } = useTheme();
    const { getLink, visible } = UseNavBarCommon();

    const linkContainerRef = useRef<HTMLDivElement>(null);

    return (
        <nav id="navbar" className={`${styles.navbar} ${visible ? 'navbar--visible' : styles.navbar_Hidden} ${getThemeClassName('nav', styles, theme)}`} onClick={(e) => e.stopPropagation()}>
            <div className={styles.navbar_container}>
                <div className={styles.logo_container}>
                    <Link href={LinkListDetail["/"].href} className={styles.logo_title}>appTitle</Link>
                </div>
                <div className={`${styles.navbar_menu}`}>
                    <div className={`${styles.link_container} ${getThemeClassName('link_container', styles, theme)}`}
                        ref={linkContainerRef}
                    >
                        {LinkList.map((item, index) => {
                            return (
                                <Fragment key={index}>
                                    {getLink({ ...item, styles })}
                                </Fragment>
                            )
                        })}
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar