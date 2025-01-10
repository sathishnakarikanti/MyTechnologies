interface ContainerStyles {
    style : React.CSSProperties
}
export const ContainerStyles = (props:ContainerStyles) => {
    return (
        <p style={props.style}>Typescript</p>
    )
}