import { useState } from "react";
import AddCategory from "./components/AddCategory";
import Gifgrid from "./components/GifGrid";
export default function GifApp() {
  const [category, setCategory] = useState(["Goku"]);
  /* const handleAdd = () => {
    setCategory([...category, "newCategory"]);
  }; */
  return (
    <>
      <h1>Lista de categorias</h1>
      <AddCategory setCategory={setCategory}></AddCategory>
      <hr />
      <ol>
        {category.map((category) => (
          <Gifgrid category={category} key={category}></Gifgrid>
        ))}
      </ol>
    </>
  );
}
