import { Inter } from "next/font/google";
import "./globals.css";
import { Log } from "./page";

export default function NavNotLog() {
    return (
        <ul className="flex bg-blue-950 sticky top-0 m-0 min-w-full text-xl">
            <li className="mr-auto ml-10 mt-2 mb-2">
                <a
                    className="text-blue-400 hover:text-blue-300 hover:font-bold underline"
                    href="#">
                    Lecturize
                </a>
            </li>
            <li className="mr-10 ml-auto mt-2 mb-2">
                <a
                    className="text-blue-500 hover:text-blue-400 hover:font-bold"
                    href="#">
                    About
                </a>
            </li>
            <li className="mr-10 mt-2 mb-2">
                <a
                    className="text-blue-500 hover:text-blue-400 hover:font-bold"
                    href="/"
                    onclick={Log(1)}>
                    Log In
                </a>
            </li>
            <li className="mr-10 mt-2 mb-2">
                <a
                    className="text-blue-300 hover:text-blue-200 hover:font-bold"
                    href="#">
                    Sign Up
                </a>
            </li>
        </ul>
    );
}
