import { useTheme } from "next-themes";
import { getThemeClassName } from "@/utils/commonFunction";

const useClassName = () => {
    const { theme } = useTheme();
    /**
     * @param className 
     * @param styles 
     * @returns 
     */
    const themeClassName = (className: string, styles: any) => {
        return getThemeClassName(className, styles, theme)
    };
    return { themeClassName };
}

export { useClassName };