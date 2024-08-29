import { IoArrowRedo, IoBookmarks, IoTrashBin } from "react-icons/io5";
import { useContext } from "react";
import { SidebarContext } from "../App.jsx";  // Importe o contexto de App

export default function ArticleCard({ content, layout }) {
    const { addArticle, removeArticle } = useContext(SidebarContext);  // Use o contexto

    const handleClick = (e) => {
        e.preventDefault();
        if (layout === "small") {
            removeArticle(content.url);  // Remove o artigo da lista no contexto
        } else {
            addArticle(content);  // Adiciona o artigo à lista no contexto
        }
    };

    const imageUrl = typeof content.image !== "object" ? content.image : "https://picsum.photos/128/128";
    const imageClasses = layout !== "small" ? "size-32" : "w-20 h-24";
    const titleClasses = layout !== "small" ? "text-lg mb-1 line-clamp-1" : "text-base line-clamp-1";
    const descClasses = layout !== "small" ? "text-sm line-clamp-3" : "text-xs line-clamp-2 mb-1";
    const metaClasses = layout !== "small" ? "" : "flex-col";
    const ButtonIcon = layout !== "small" ? IoBookmarks : IoTrashBin;
    const buttonClasses = "group absolute -top-2 rounded-full size-7 flex items-center justify-center cursor-pointer";
    const saveButtonColor = layout !== "small" ? "bg-blue-700" : "bg-red-700";
    const saveButtonText  = layout !== "small" ? "Salvar" : "Excluir";

    return (
        <a
            href={content.url}
            target="_blank"
            className="border rounded p-4 flex gap-4 bg-neutral-100 hover:bg-neutral-200 relative"
        >
            <img
                alt={content.title}
                src={imageUrl}
                className={"block rounded object-cover " + imageClasses}
            />

            <div className="flex flex-col grow">
                <h3 className={"font-semibold " + titleClasses}>
                    {content.title}
                </h3>

                <p className={descClasses}>
                    {content.description}
                </p>

                <div className={"flex justify-between text-xs mt-auto " + metaClasses}>
                    <p><span className="font-semibold">Fonte:</span> {content.source}</p>
                    <p><span className="font-semibold">Categoria:</span> {content.category}</p>
                </div>
            </div>

            <button className={saveButtonColor + " -right-2 " + buttonClasses} onClick={handleClick}>
                <ButtonIcon className="size-3" color="#fff"/>
                <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity text-xs max-w-24 left-1/2 -translate-x-1/2 bg-neutral-700 text-white rounded p-2 z-10">
                    {saveButtonText}
                </span>
            </button>
        </a>
    );
}
