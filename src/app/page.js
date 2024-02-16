import NavNotLog from "./navnotlog";
import NavLog from "./navlog";
import Image from "next/image";
var log = 0;
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-blue-900">
            <NavNotLog />
            <div className="bg-gradient-to-r from-30% via-50% to-100% from-blue-900 via-blue-800 to-blue-600 flex min-h-20 font items-center justify-around min-w-full">
                <div>
                    <Image
                        src="/audionotesbgless.png"
                        width={400}
                        height={400}
                        alt="Logo could not be loaded D:"
                    />
                </div>
                <div className="text-2xl text-blue-200">
                    Here at Lecturize, we are committed to giving students the
                    best studying experience there is.
                </div>
            </div>
            <br />
            <br />
            <div className="flex text-xl">
                <a
                    href="/dashboard"
                    className="rounded-md mr-3 min-h-20 text-blue-200 ring-blue-500 ring-2 shadow-md shadow-black-500 bg-blue-700 items-center flex transition-all ease-in-out hover:bg-blue-600">
                    &nbsp;&nbsp;&nbsp;&nbsp;Log In&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
                <a
                    href="/auth/new-user"
                    className="rounded-md ml-3 min-h-20 text-blue-200 ring-blue-500 ring-2 shadow-md shadow-black-500 bg-blue-700 items-center flex transition-all ease-in-out hover:bg-blue-600">
                    &nbsp;&nbsp;&nbsp;&nbsp;Sign Up&nbsp;&nbsp;&nbsp;&nbsp;
                </a>
            </div>
        </main>
    );
}
