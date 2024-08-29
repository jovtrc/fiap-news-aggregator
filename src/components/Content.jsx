import { IoAddCircle, IoTime } from "react-icons/io5";
import ArticleCard from "./ArticleCard.jsx";
import { useEffect, useState } from "react";
import { baseApiUrl } from "../helpers/Api.jsx";

export default function Content() {
    const [allArticles, setAllArticles] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [pageOffset, setPageOffset] = useState();
    const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);

    const fetchArticles = async () => {
        const apiEndpoint = debouncedSearchText !== ""
            ? `${baseApiUrl}&keywords=${debouncedSearchText}`
            : baseApiUrl;
        const response = await fetch(apiEndpoint + "&offset=" + pageOffset);
        const articles = await response.json();
        setAllArticles(articles.data);
        setPageOffset(articles.pagination.offset + articles.pagination.count)
    }

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchText(searchText);
        }, 200);

        return () => {
            clearTimeout(handler);
        };
    }, [searchText]);

    useEffect(() => {
        fetchArticles();
    }, [debouncedSearchText]);

    return (
        <main className="flex flex-col items-center grow p-10 gap-8">
            <div className="w-full max-w-4xl">
                <input
                    type="text"
                    value={searchText}
                    placeholder="Buscar por matérias"
                    onChange={(e) => setSearchText(e.target.value)}
                    className="w-full rounded p-2 border border-neutral-200"
                />

                <h1 className="text-xl font-bold my-6 flex gap-1 items-center">
                    <IoTime />
                    Matérias Recentes
                </h1>

                <div className="flex flex-col gap-5">
                    {allArticles.map((article, i) => (
                        <ArticleCard key={i} layout="wide" content={article} />
                    ))}

                    <hr className="my-3" />

                    <button
                        onClick={() => {fetchArticles(); window.scrollTo(0, 0)}}
                        className="mr-auto bg-blue-500 text-white py-2 px-4 rounded flex gap-1 items-center"
                    >
                        <IoAddCircle className="size-5" />
                        Carregar Mais
                    </button>
                </div>
            </div>
        </main>
    );
}
