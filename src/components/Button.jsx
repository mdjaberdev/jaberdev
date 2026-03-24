

const Button = ({btnText , className}) => {
    return (
        <button className={`py-[7px] px-6 rounded-md bg-[#FE9A00]/10 text-[#FE9A00] border border-[#FE9A00]/20 hover:bg-[#FE9A00] hover:text-white text-[15px] font-medium duration-500 cursor-pointer ${className}`}>{btnText}</button>
    )
}

export default Button