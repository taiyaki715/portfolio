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
        <header className="px-8 py-4 shadow flex justify-between items-center backdrop-blur">
            {/* 左側 */}
            <h1 className={OrbitronFont.className}>taiyaki.tech</h1>
            {/* 右側 */}
            <div className="flex items-center gap-4">
                <Button as={Link} href="https://github.com/taiyaki715" radius="full" isExternal startContent={<Github className="w-4" />}>
                    GitHub
                </Button>
            </div>
        </header>
    )
}
