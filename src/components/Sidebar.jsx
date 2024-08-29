import { IoBook } from "react-icons/io5";
import ArticleCard from "./ArticleCard.jsx";
import { useContext } from "react";
import { SidebarContext } from "../App.jsx";  // Importe o contexto de App

export default function Sidebar() {
    const { sidebarArticles } = useContext(SidebarContext);  // Use o contexto

    return (
        <aside className="w-96 py-10 px-5 h-screen overflow-y-auto overflow-x-hidden sticky top-0">
            <h2 className="text-xl font-bold mb-6 flex gap-1 items-center">
                <IoBook />
                Lista de Leitura
            </h2>

            <div className="flex flex-col gap-5">
                {sidebarArticles.length >= 1 ? (
                    sidebarArticles.map((article, i) => (
                        <ArticleCard key={i} layout="small" content={article} />
                    ))
                ) : (
                    <p>Sem artigos salvos</p>
                )}
            </div>
        </aside>
    );
}
