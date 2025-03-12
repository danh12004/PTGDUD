export default function Item({ text, image }) {
    return (
        <div className="flex flex-col items-center justify-center p-4 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
            <img
                src={image}
                alt={text}
                className="object-cover w-48 h-48 mb-4"
            />
            <span className="text-center text-lg font-semibold text-gray-800">{text}</span>
            <button className="mt-2 px-6 py-2 bg-gray-500 w-full text-white hover:bg-pink-600 transition duration-300">
                Mua
            </button>
        </div>
    );
}
