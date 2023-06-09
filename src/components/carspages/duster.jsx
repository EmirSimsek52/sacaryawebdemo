
import { RiTeamFill,RiCarFill,RiFlashlightFill } from "react-icons/ri";
import { AiFillControl } from "react-icons/ai";
import { useEffect, useState } from "react";
import { db } from '../../firebase';
import { Link } from "react-router-dom";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
function Duster() {
  const [info, setMovieList] = useState([]);
  const moviesCollectionRef = collection(db, "duster");

  const getMovieList = async () => {
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);

  return (
    <div className='bg-[white] border-2 sm:w-[350px] w-[300px] m-2 rounded-xl'>
        
        <li>
        <div>
  
                  <figure className='flex justify-center items-center'>
                    <img src="imgs/duster.png" className='rounded-xl sm:w-[320px] w-[250px] m-2 bg-[#aeb7c7] p-[10px]' />
                  </figure>
                  <h1 className='ml-6 sm:text-[26px] text-[20px]  text-[#32324e]'>
                    Dacia Duster
                    </h1>
                    {info.map((car) => (
                            <div>
                           <div className="flex flex-row gap-8 mx-6 my-5 font-thin sm:text-[20px] text-[15px]">
                    <div className='flex flex-row'>
                    <RiTeamFill className='text-[#9F32B2] mr-3' size={25}/>{car.kisi} Kişilik
                    </div>
                    <div className='flex flex-row '>
                    <RiCarFill className='text-[#9F32B2] mr-3' size={25}/>{car.model}
                    </div>
                    </div>
                    <div className="flex flex-row mx-6 gap-12 my-5 font-thin border-b-[3px] border-t-[#9F32B2] sm:text-[20px] text-[15px]">
                    <div className='flex flex-row'>
                    <RiFlashlightFill className='text-[#9F32B2] mr-3' size={25}/>{car.yakit}
                    </div>
                    <div className='flex flex-row '>
                    <AiFillControl className='text-[#9F32B2] mr-3' size={25}/>{car.vites}
                    </div>
                    </div>
                    <div className='flex flex-row sm:text-[25px] text-[20px] sm:gap-16 gap-10 '>
                      <label className='ml-6 mb-5'>Gün/{car.fiyat}₺</label>
                      <div  className="flex justify-end">
                      <Link to="/">
                      <button className=' mb-5 bg-[#9F32B2] p-2 rounded-xl text-[white] text-[15px]'>
                        Hemen Kiralayın</button>
                      </Link>
                      </div>
                    </div>
                            </div>
                        
                      ))}
        </div>        
              </li>
    </div>
  )
}

export default Duster