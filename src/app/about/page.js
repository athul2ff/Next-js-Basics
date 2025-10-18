"use client"
import { useRouter } from "next/navigation"

export default function AboutPage() {
    const router = useRouter();

    return (
        <div className="p-[100px] flex justify-center items-center gap-10">
            <h1>About Page</h1>
            <button className="bg-red-500 rounded-2xl p-3 hover:bg-violet-900 " onClick={()=>{
                router.push('/');
            }}>
                
                Go to home</button>
        </div>
    )
}
