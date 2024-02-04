import { Inter } from "next/font/google";
import "./globals.css";
import { Log } from "./page";

export default function NavLog() {
    return (
        <ul class="flex bg-blue-950 sticky top-0 m-0 min-w-full text-xl">
            <li class="mr-auto ml-10 mt-2 mb-2">
                <a
                    class="text-blue-400 hover:text-blue-300 hover:font-bold underline"
                    href="#">
                    Lecturize
                </a>
            </li>
            <li class="mr-10 ml-auto mt-2 mb-2">
                <a
                    class="text-blue-500 hover:text-blue-400 hover:font-bold"
                    href="/"
                    onClick={Log(0)}>
                    Log Out
                </a>
            </li>
            <li class="mr-10 mt-2 mb-2">
                <a
                    class="text-blue-500 hover:text-blue-400 hover:font-bold"
                    href="#">
                    Notes
                </a>
            </li>
            <li class="mr-10 mt-2 mb-2">
                <a
                    class="text-blue-300 hover:text-blue-200 hover:font-bold"
                    href="#">
                    Quizzes
                </a>
            </li>
        </ul>
    );
}
