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
            <div className="bg-gradient-to-l from-30% via-50% to-100% from-blue-900 via-blue-800 to-blue-600 flex min-h-20 font items-center justify-around min-w-full">
                <div className="text-2xl text-blue-200">
                    Here at Lecturize, we are committed to giving students the
                    best studying experience there is.
                </div>
                <div>
                    <Image
                        src="/audionotesbgless.png"
                        width={400}
                        height={400}
                        alt="Logo could not be loaded D:"
                    />
                </div>
            </div>
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
        </main>
    );
}
