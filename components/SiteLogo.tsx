import Image from "next/image";

interface SiteLogoProps {
    size?: number
    theme?: 'light' | 'dark'
}

export function AppIcon({
    size=30,
    theme='light'
}: SiteLogoProps) {
    return (
        <Image 
            height={size} 
            width={size}
            src={theme === 'light' ? '/images/app-icon-dark.png' : '/images/app-icon-light.png'}
            alt='app icon'
            className="inline-block"
        />
    )
}


/**
 * icon + name
 */

export function AppIconName({
    size=40,
    theme='light'
}: SiteLogoProps) {
    return (
        <div className="inline-block">
            <h1 className={`text-4xl text-primary ${theme === 'light' ? 'text-primary-800' : 'text-primary-900'}`}>SIWA</h1>
        </div>
        // <Image 
        //     src={theme === 'light' ? '/images/app-icon-name-dark.png' : '/images/app-icon-name-light.png'}
        //     alt='app icon with name'
        //     height={size}
        //     width={size * 3}
        // />
    );
}