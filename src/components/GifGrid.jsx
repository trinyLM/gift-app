import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
const Gifgrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Loading...</p>}
      <div className="card-grid animate__animated animate__bounce">
        {images.map(({ id, title, url }) => (
          <GifGridItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
export default Gifgrid;
