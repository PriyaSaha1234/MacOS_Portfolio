import { WindowControls } from "#components";
import { Search, Mail } from "lucide-react";
import WindowWrapper from "#hoc/WindowWrapper";
import { photosLinks, gallery } from "#constants";
import useWindowStore from "#store/window";
import { useState } from "react";

const Photos = () => {
    const { openWindow } = useWindowStore();

    const [activeTab, setActiveTab] = useState("Internships");

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="flex gap-4">
                    <Mail size={20} />
                    <Search size={20} />
                </div>
            </div>

            <div className="bg-[#f5f5f7] flex h-full">
                {/* Sidebar */}
                <div className="sidebar">
                    <h3>Photos</h3>

                    <ul>
                        {photosLinks.map((item) => (
                            <li
                                key={item.id}
                                onClick={() => setActiveTab(item.title)}
                                className={
                                    activeTab === item.title
                                        ? "active"
                                        : "not-active"
                                }
                            >
                                <img src={item.icon} alt={item.title} />
                                <p>{item.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Gallery */}
                <div className="flex-1 p-6 overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4">
                        {activeTab}
                    </h2>

                    {/* Masonry-style layout */}
                    <div className="columns-2 gap-4 space-y-4 relative z-0">
                        {gallery[activeTab]?.map((image) => (
                            <div
                                key={image.id}
                                className="mb-4 overflow-hidden rounded-2xl cursor-pointer bg-gray-100 hover:shadow-lg transition-all duration-300 break-inside-avoid"
                                onClick={() =>
                                    openWindow("imgfile", {
                                        name:
                                            image.name ||
                                            `Photo ${image.id}`,
                                        imageUrl: image.img,
                                    })
                                }
                            >
                                <img
                                    src={image.img}
                                    alt={image.name || ""}
                                    className="w-full h-auto block transition-transform duration-300 hover:scale-[1.02]"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");

export default PhotosWindow;