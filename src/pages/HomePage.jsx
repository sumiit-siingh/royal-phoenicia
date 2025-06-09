import React from "react";
import ImageShowcase from "../component/ImageShowcase";
import WellnessMessage from "../component/WellnessMessage";
import AlternatingImageSlider from "../component/InteriorImageSlider";

export default function HomePage() {
    return (
        <div className="h-full w-full">
            <div className=" ">
                <ImageShowcase />
            </div>
            <div>
                <WellnessMessage />
            </div>
            <div><AlternatingImageSlider />
            </div>
        </div>
    )
}