import { Banner, Brands, Navbar } from "@/components";

export default function Home() {
    return (
        <div className="wrapper gap-9">
            <Navbar />
            <Banner />
            <Brands />
        </div>
    )
}