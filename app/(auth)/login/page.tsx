import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import GoogleIcon from '@/public/google.svg';
import Image from "next/image";
import GitHubSignInButtonComponent from "@/app/components/github-sign-in-button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/auth";
import { redirect } from "next/navigation";
// import * as actions from "@/app/actions"

export default async function Login(){
  const session =await getServerSession(authOptions);
  if(session){
    return redirect("/home")
  }
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-sm md:px-14">
    <form method="post" action="/api/auth/signin">
      <h1 className="text-3xl font-semibold text-white">Login</h1>
      <div className="space-y-4 mt-5">
        <Input
        type="email"
        name="email"
        placeholder="Email"
        className="bg-[#333] placeholder:text-xs placeholder:text-gray-400 w-full inline-block"
        />
        <Button
        type="submit"
        variant="destructive"
        className="w-full bg-[#e50914]">Login</Button>
      </div>
    </form>
    <div className="text-grey-500 text-sm mt-2">
      Don't have a account?{" "}
      <Link className="text-white hover:underline" href="/sign-up">Sign Up Now</Link>

    </div>
    <div className="flex w-full justify-center items-center gap-x-3 mt-6">
    <GitHubSignInButtonComponent/>
      <Button variant="outline" size="icon">
        <Image src={GoogleIcon} alt="googleIcon" className=" w-6 h-6"/>
      </Button>

    </div>
  </div>
  )
}