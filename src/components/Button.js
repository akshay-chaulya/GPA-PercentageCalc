export default function Button({ children, classes }) {
    return (
        <button
            className={`border-[1px] border-green-600 px-5 py-3 text-2xl rounded-md transition-all duration-300 ease-in-out text-green-600 hover:text-white hover:bg-green-600 ${classes}`}
        >
            {children}
        </button>
    );
}