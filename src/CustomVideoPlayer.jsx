import { forwardRef } from "react";
const CustomVideoPlayer = forwardRef(({src},ref)=>{
    return(
        <video
        ref={ref}
        src={src}
        controls
        width="500"
        />
    );
});
export default CustomVideoPlayer;