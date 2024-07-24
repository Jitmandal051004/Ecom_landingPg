import { Banner, Brands, Navbar, UserExp } from "@/components";

export default function Home() {
    return (
        <div className="wrapper gap-9">
            <Navbar />
            <Banner />
            <Brands />
            <UserExp />
        </div>
    )
}