import Skeleton from "react-loading-skeleton";

export default function SkeletonLoader({height, width}){
    return (
        <Skeleton count={1} height={height} width={width}/>
    )
}