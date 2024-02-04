import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { Log } from "./page";

export default function NavLog() {
    return (
        <ul className="flex bg-blue-950 sticky top-0 m-0 min-w-full text-xl">
            <li className=" ml-10 mt-2 mb-2">
                <a
                    className="text-blue-400 hover:text-blue-300 hover:font-bold underline"
                    href="#">
                    Lecturize
                </a>
            </li>
            <li className="mr-auto">
                <Image
                    src="/audionotesbgless.png"
                    width={50}
                    height={50}
                    alt="Logo could not be loaded D:"
                />
            </li>
            <li className="mr-10 ml-auto mt-2 mb-2">
                <a
                    className="text-blue-500 hover:text-blue-400 hover:font-bold"
                    href="/"
                    id="logout">
                    Log Out
                </a>
            </li>
            <li className="mr-10 mt-2 mb-2">
                <a
                    className="text-blue-500 hover:text-blue-400 hover:font-bold"
                    href="#">
                    Notes
                </a>
            </li>
            <li className="mr-10 mt-2 mb-2">
                <a
                    className="text-blue-500 hover:text-blue-400 hover:font-bold"
                    href="#">
                    Quizzes
                </a>
            </li>
        </ul>
    );
}
