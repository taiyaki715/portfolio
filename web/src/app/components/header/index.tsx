import { Button } from "@nextui-org/button"
import { Link } from "@nextui-org/link"
import { Github } from "lucide-react"
import { Orbitron } from "next/font/google"

const OrbitronFont = Orbitron({
    weight: "600",
    subsets: ["latin"],
})

export const Header: React.FC = () => {
    return (
        <header className="px-8 py-2 shadow flex justify-between items-center backdrop-blur">
            {/* 左側 */}
            <Link href="/" className={`${OrbitronFont.className} text-foreground-`}>taiyaki.tech</Link>
            {/* 右側 */}
            <div className="flex items-center gap-8">
                <Link href="/blog" size="sm" color="foreground">Blog</Link>
                <Button as={Link} href="https://github.com/taiyaki715" isExternal radius="full" variant="bordered" startContent={<Github className="w-4" />} className="border-1 border-zinc-800">
                    GitHub
                </Button>
            </div>
        </header>
    )
}
