import Sidebar from "./components/Sidebar.jsx";
import Content from "./components/Content.jsx";

function App() {
  return (
    <div className="bg-neutral-50 text-neutral-800 size-full">
        <div className="flex divide-x divide-neutral-200">
            <Sidebar />
            <Content />
        </div>
    </div>
  )
}

export default App
