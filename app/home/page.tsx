import MovieVideo from "../components/movie-video";
import Recent from "../components/recently-added";


export default function HomePage(){
  return (<div className="p-5 lg:p-0">
    <MovieVideo/>
    <h1 className="text-3xl font-bold">Rencently Added</h1>
    <Recent/>
    </div>
  )
}