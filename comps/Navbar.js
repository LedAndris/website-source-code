import Link from 'next/link'

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1>EverlastRP</h1>
            </div>

            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/apply"><a>Apply</a></Link>
            <Link href="https://forum.everlastrp.xyz"><a>Forums</a></Link>
            <Link href="https://discord.gg/bDtPpfm3n5"><a>Discord</a></Link>
        </nav>
    );
}
 
export default Navbar;