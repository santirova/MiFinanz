import {VscGraph} from 'react-icons/vsc'
import {GoEye} from 'react-icons/go'
export default function NavHomePage() {
  return (
    <section className="bg-black min-h-screen w-60 fixed  flex flex-col">
      <div className="text-white">
        <div className="p-10">
          <h2 className="">miFinanz</h2>
        </div>
        <div className="p-10 flex flex-col gap-8">
            <div className='flex gap-2 text-xl'>
                <VscGraph/>
                <p> Panel</p>
            </div>
          <div>
             <p>Cuentas</p>
          </div>
          <div>
             <p>Gastos</p>
          </div>
          <div>
            <p>Ingresos</p>
          </div>
        </div>
        <div className='bg-gray-300 h-80 w-48 rounded-2xl m-5 flex flex-col text-gray-600 '>
          <div className='justify-center items-center text-center'>
            <GoEye  className=' h-52 w-20 '/>
            <p className='text-black'>Conoce toda las herramientas</p>
            <button className='border border-blue-400	w-32 h-14 text-blue-400 rounded-xl'>TUTORIAL</button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
