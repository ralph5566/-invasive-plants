const Input = ({ id, name, type, value, auto, ...props }) => {
    return (
        <>
            <p>
                <label className="block my-3 text-lightBlue" htmlFor={id}>
                    {name}
                </label>
                <input
                    className="block w-full p-2 rounded-lg border-none bg-bgcB text-left"
                    id={id}
                    name={type}
                    type={type === 'password' ? type : 'text'}
                    value={value}
                    required
                    autoComplete={auto}
                    {...props}
                />
            </p>
        </>
    )
}

export default Input
