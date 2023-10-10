import {Error , Loader ,SongCard } from '../components';
import { genres } from '../assets/constants';
import {useGetTopChartsQuery} from '../redux/services/shazamCore';
import { useEffect } from 'react';
import {useDispatch ,useSelector} from 'react-redux';


const Discover = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery({ per_page: '50' });

  // useEffect(() => {
  //   console.log('Data:', data);
  //   console.log('Is Fetching:', isFetching);
  //   console.log('Error:', error);
  // }, [data, isFetching, error]);

  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">

      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">

        <h2 className="font-bold text-3xl text-white text-left"> Discover {"Pop"}</h2>
        <select onChange={()=>{}}
          value="" 
          className='bg-black text-gray-300 p-3 text-sm rounded-lg  outline-none sm:mt-0 mt-5'
          >

            {genres.map((genre)=><option key={genre.value} value={genre.value}>
              {genre.title}</option>
              )}

        </select>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {Array.isArray(data.chart_items) &&
          data.chart_items.map((song,i) => 
          <SongCard key={song.item.id} song={song} i={i} 
            isPlaying={isPlaying} activeSong={activeSong} data={data.chart_items}/>
          )}
      </div>

    </div>
  )
}

export default Discover
