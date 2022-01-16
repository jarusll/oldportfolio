const Svg = ({
    color = "black",
    height = 200,
    width = 200,
    viewbox = "0 0 100 100",
    pathData
}) => {
    return (
        <svg height={height} width={width} viewbox={viewbox} xmlns="http://www.w3.org/2000/svg">
            <path fill={color} d={pathData}/>
        </svg>
    )
};

export default Svg;