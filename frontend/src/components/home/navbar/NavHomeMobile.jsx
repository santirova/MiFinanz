import { BiWindowOpen } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";


export default function NavHomeMobile() {
  return (
    <section class="fixed lg:hidden xl:hidden 2xl:hidden bottom-0 left-0 w-full bg-black rounded-t-lg text-sm">
      <div class="container mx-auto flex justify-between items-center p-4 text-gray-400 gap-2">
        <div className="flex flex-col items-center">
          <BiWindowOpen className="text-xl" />
          <p>Panel</p>
        </div>
        <div className="flex flex-col items-center">
          <BiWindowOpen className="text-xl" />
          <p>Cuentas</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="bg-blue-500 rounded-full h-10 w-10 flex items-center justify-center">
            <BiPlus className="text-3xl "/>
            </div>
          <p>Agregar</p>
        </div>
        <div className="flex flex-col items-center">
          <BiWindowOpen className="text-xl" />
          <p>Gastos</p>
        </div>
        <div className="flex flex-col items-center">
          <BiWindowOpen className="text-xl" />
          <p>Ingresos</p>
        </div>
      </div>
    </section>
  );
}
