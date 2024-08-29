import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";
import { createContext, useState, useEffect } from "react";

export const SidebarContext = createContext([]);

function App() {
    const [sidebarArticles, setSidebarArticles] = useState(() => {
        const storedArticles = localStorage.getItem("sidebarArticles");
        return storedArticles ? JSON.parse(storedArticles) : [];
    });

    useEffect(() => {
        localStorage.setItem("sidebarArticles", JSON.stringify(sidebarArticles));
    }, [sidebarArticles]);

    const addArticle = (article) => {
        setSidebarArticles((prev) => {
            if (!prev.some((item) => item.url === article.url)) {
                return [...prev, article];
            }
            return prev;
        });
    };

    const removeArticle = (articleUrl) => {
        setSidebarArticles((prev) => prev.filter((article) => article.url !== articleUrl));
    };

    return (
        <SidebarContext.Provider value={{ sidebarArticles, addArticle, removeArticle }}>
            <div className="bg-neutral-50 text-neutral-800 size-full">
                <div className="flex divide-x divide-neutral-200">
                    <Sidebar />
                    <Content />
                </div>
            </div>
        </SidebarContext.Provider>
    );
}

export default App;
