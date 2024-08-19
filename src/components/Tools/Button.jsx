const Button = ({ type = 'button', children, ...props }) => {
    return (
        <>
            <button
                type={type}
                className=" mr-2 cursor-pointer px-6  rounded-lg border-none bg-purple hover:bg-hoverPup hover:text-yy"
                {...props}
            >
                {children}
            </button>
        </>
    )
}

export default Button
