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
        <div className="flex items-center gap-2">
            <Image 
                src={theme === 'light' ? '/SIWA-logo.svg' : '/SIWA-logo.svg'}
                alt='smart indigenous weather app'
                height={size}
                width={size}
            />
            <h1 className={`text-2xl text-primary-900 ${theme === 'light' ? 'text-primary-900' : 'text-primary-900'}`}>SIWA</h1>
        </div>
    );
}