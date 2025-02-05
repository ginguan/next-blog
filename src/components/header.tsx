import Navigation from "./navigation"
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex justify-between md:items-center mt-4 p-12">
      <div className="flex items-center ">
        <div className="hidden md:block">
          <Link href="/" className="text-xl"></Link>
        </div>
        <Navigation />
      </div>
    </header>
  )
}