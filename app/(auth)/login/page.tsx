import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GithubIcon, icons } from "lucide-react"
import Link from "next/link"
import GoogleIcon from "../../../public/google.svg"
import Image from "next/image"

export default function Login() {
    return (
        <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
            <form action="">
                <h1 className="text-3xl text-white font-semibold">Login</h1>
                <Input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    className="my-4 bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
                />
                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="my-4 bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
                />
                <Button type="submit" variant="destructive" className="w-full bg-[#e50914] my-4">Sign Up</Button>
            </form>
            <div className="content-normal">
                <h1>New to Netflix? 
                    <Link href="/sign-up" className="text-white hover:underline font-semibold">
                        Sign-Up!
                    </Link>
                </h1>
            </div>
            <div className="flex w-full justify-center items-center gap-x-3 mt-6">
            <Button variant="outline" size="icon">
                <GithubIcon className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
                <Image src={GoogleIcon} alt="Google Icon" />
            </Button> 
            </div>
        </div>
    )
}