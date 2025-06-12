import React from "react";
import ImageShowcase from "../component/ImageShowcase";
import WellnessMessage from "../component/WellnessMessage";
import AlternatingImageSlider from "../component/InteriorImageSlider";
import FacilityShowcase from "../component/IIFacilityShowcase";
import PackageShowcase from "../component/packageShowcase";
import Facilities from "../component/facilitiesComponent";
import AboutUs from "../component/AboutUsComponent";
import FacilityCards from "../component/threeFacilitycards";
import HotelInfoLayout from "../component/bottomComponent";
import EventShowcase from "../component/eventShowcase";
export default function HomePage() {
    return (
        <div className=" relative h-full w-full">
            <div className=" ">
                <ImageShowcase />
            </div>
            <div>
                <WellnessMessage />
            </div>
            <div>
                <AlternatingImageSlider />
            </div>
            <div >
                <FacilityShowcase />
            </div>
            <div>
                <PackageShowcase />
            </div>
            <div>
                <Facilities />
            </div>
            <div>
                <AboutUs />
            </div>
            <div>
                <FacilityCards />
            </div>
            <div>
                <EventShowcase />
            </div>
            <div>
                <HotelInfoLayout />
            </div>
        </div>
    )
}