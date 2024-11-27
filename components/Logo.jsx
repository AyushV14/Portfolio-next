import Link from "next/link"
import Image from "next/image"

const Logo = () => {
  return (
    <Link href='/'>
        <Image src='/logo.png' width={74} height={54} className="rounded-xl" priority alt="logo"/>
    </Link>
  )
}

export default Logo