import { Banner, Brands, Currated, Footbar, Navbar, OfferBanner, Subscribe, UserExp } from "@/components";

export default function Home() {
    return (
        <div className="wrapper gap-9">
            <Navbar />
            <Banner />
            <Brands />
            <UserExp />
            <Currated />
            <OfferBanner />
            <Subscribe />
            <Footbar />
        </div>
    )
}