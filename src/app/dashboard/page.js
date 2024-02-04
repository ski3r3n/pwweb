import NavNotLog from "../navnotlog";
import NavLog from "../navlog";
var log = 0;
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-blue-900">
            <NavLog />
        </main>
    );
}
