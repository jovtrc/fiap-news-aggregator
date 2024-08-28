import {IoAddCircle, IoTime} from "react-icons/io5";
import ArticleCard from "./ArticleCard.jsx";

export default function Content() {
    return (
        <main className="flex flex-col items-center grow p-10 gap-8">
            <div className="w-full max-w-4xl">
                <input
                    type="text"
                    placeholder="Buscar por matérias"
                    className="w-full rounded p-2 border border-neutral-200"
                />

                <h1 className="text-xl font-bold my-6 flex gap-1 items-center">
                    <IoTime/>
                    Matérias Recentes
                </h1>

                <div className="flex flex-col gap-5">
                    {
                        [0, 1, 2, 3, 4, 5].map((item, i) => (
                            <ArticleCard
                                key={i}
                                id={item}
                                layout="wide"
                            />
                        ))
                    }

                    <hr className="my-3"/>

                    <button className="mr-auto bg-blue-500 text-white py-2 px-4 rounded flex gap-1 items-center">
                        <IoAddCircle className="size-5"/>
                        Carregar Mais
                    </button>
                </div>
            </div>
        </main>
    )
}