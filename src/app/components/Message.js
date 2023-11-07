export default function Message({ message, isClient }) {

    return (
        <div className={`
            w-full flex flex-row
            ${isClient ? "justify-end" : "justify-start"}
            my-2
            ${isClient ? "pl-8" : "pr-8"}
        `}>
            <div className={`
                p-4 rounded-xl max-w-xs min-w-fit drop-shadow-md
                ${isClient ? "bg-green-100" : "bg-white"}
            `}>
                {message}
            </div>
        </div>
    )
}
