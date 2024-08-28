import {IoBook} from "react-icons/io5";
import ArticleCard from "./ArticleCard.jsx";

export default function Sidebar() {
    return (
        <aside className="w-96 py-10 px-5 h-screen overflow-y-auto overflow-x-hidden sticky top-0">
            <h2 className="text-xl font-bold mb-6 flex gap-1 items-center">
                <IoBook/>
                Lista de Leitura
            </h2>

            <div className="flex flex-col gap-5">
                {
                    [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((item, i) => (
                        <ArticleCard
                            key={i}
                            id={item}
                            layout="small"
                        />
                    ))
                }
            </div>
        </aside>
    )
}