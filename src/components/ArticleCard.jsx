import { IoArrowRedo } from "react-icons/io5";
import { IoBookmarks } from "react-icons/io5";
import { IoTrashBin } from "react-icons/io5";

export default function ArticleCard({id, layout}) {
    const imageClasses = layout !== "small" ? "size-32" : "size-20"
    const titleClasses = layout !== "small" ? "text-lg mb-1" : "text-base line-clamp-1"
    const descClasses = layout !== "small" ? "text-sm line-clamp-3" : "text-xs line-clamp-2"
    const ButtonIcon = layout !== "small" ? IoBookmarks : IoTrashBin
    const buttonClasses = "group absolute -top-2 rounded-full size-7 flex items-center justify-center cursor-pointer"

    return (
        <a href="#" className="border rounded p-4 flex gap-4 bg-neutral-100 hover:bg-neutral-200 relative">
            <img
                src={"//lorempixel.com.br/128/128/?" + id}
                alt=""
                className={"block rounded " + imageClasses}
            />

            <div className="flex flex-col">
                <h3 className={"font-semibold " + titleClasses}>
                    Lorem ipsum dolor sit amets
                </h3>

                <p className={descClasses}>
                    Alias deserunt eligendi esse exercitationem impedit ipsum, itaque iusto laudantium molestiae neque
                    officia, praesentium quidem quod repudiandae sint sit soluta ut veritatis.
                </p>

                <div className="flex justify-between text-xs mt-auto">
                    <p><span className="font-semibold">Fonte:</span> ESPN</p>
                    <p><span className="font-semibold">Categoria:</span> Sports</p>
                </div>
            </div>

            <button className={"bg-blue-700 right-7 " + buttonClasses}>
                <ButtonIcon className="size-3" color="#fff"/>
                <TooltipText text="Salvar"/>
            </button>

            <button className={"bg-emerald-700 -right-1 " + buttonClasses}>
                <IoArrowRedo className="size-3" color="#fff"/>
                <TooltipText text="Ler"/>
            </button>
        </a>
    )
}

function TooltipText({text}) {
    return (
        <span className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity text-xs max-w-24 left-1/2 -translate-x-1/2 bg-neutral-700 text-white rounded p-2 z-10">
            {text}
        </span>
    )
}
