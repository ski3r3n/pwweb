import Image from "next/image";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-blue-900 justify-center">
            <div className="h-100 min-w-100">
                <div className="flex h-100 w-100 rounded-lg justify-center flex-col align-top bg-blue-600 p-3">
                    <div className="w-32 text-white flex text-blue-200 m-3 text-xl justify-center align-middle place-items-center">
                        <Image
                            src="/audionotesbgless.png"
                            width={70}
                            height={70}
                            alt="Logo could not be loaded D:"
                        />
                        Log In
                    </div>
                    <br />
                    <a
                        href="dashboard"
                        className="rounded-md h-20 w-32 justify-center self-center text-blue-200 ring-blue-500 ring-2 shadow-md shadow-black-500 bg-blue-700 items-center flex transition-all ease-in-out hover:bg-blue-600">
                        Student
                    </a>
                    <br />
                    <a
                        href="dashboard"
                        className="rounded-md h-20 w-32 mb-3 justify-center self-center text-blue-200 ring-blue-500 ring-2 shadow-md shadow-black-500 bg-blue-700 items-center flex transition-all ease-in-out hover:bg-blue-600">
                        Teacher
                    </a>
                </div>
            </div>
        </main>
    );
}
