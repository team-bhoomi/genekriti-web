"use client";
import ReactPlayer from "react-player";

export const VideoPlayer = () => {
    //video path
    let videosrc =
        "https://player.vimeo.com/external/311144302.sd.mp4?s=7f608dbc4a9318433d93b9d121707f3f15b1eba3&profile_id=164&oauth2_token_id=57447761";

    return (
        <div className="w-full h-[450px] overflow-hidden flex items-center justify-center">
            <ReactPlayer
                width="100%"
                height="fit-content"
                url={videosrc}
                controls={true}
                style={{ borderRadius: "16px", overflow: "hidden" }}
                // light is usefull incase of dark mode
                light={false}
                // picture in picture
                pip={true}
            />
            <source src={videosrc} type="video/mp4" />
        </div>
    );
};
