import Image from "next/image"
import graphics from "@/assets/landing/graphics.png"
export default function LandingTwo() {
    /* 

position: absolute;
width: 1280px;
height: 737px;
left: 0px;
top: 837px;

background: linear-gradient(180deg, #44444C 0%, rgba(68, 68, 76, 0) 42.71%);
 */
    return (
        <section className="w-full flex flex-col p-20 items-center justify-evenly  md:flex-row">
            <div className="">
                <Image className="w-[500px]" src={graphics} />
            </div>
            <div className="flex flex-col gap-16">
                <div>
                    <details>
                        <summary>Visualiza tu ECONOMIA</summary>
                        <p>Observa tus ingresos y gastos de manera clara y visual a través de gráficos interactivos y animaciones cautivadoras. Toma decisiones informadas y controla tus finanzas con facilidad.</p>
                    </details>
                    <hr />
                    <details>
                        <summary>Ingresa tus MOVIMIENTOS</summary>
                        <p>Registra fácilmente tus ingresos y gastos para mantener un control preciso de tus finanzas. Nuestra interfaz intuitiva te permite ingresar y categorizar tus transacciones de forma rápida y sencilla.</p>
                    </details>
                    <hr />
                    <details>
                        <summary>Administra tus CUENTAS</summary>
                        <p>Con nuestra función de administración de cuentas, puedes agregar, organizar y monitorear todas tus cuentas financieras en un solo lugar.</p>
                    </details>
                    <hr />
                    <details>
                        <summary>Personaliza tus ALERTAS de cobro</summary>
                        <p>Configura notificaciones personalizadas para recibir recordatorios de pagos pendientes, fechas límite de facturas y vencimientos de préstamos.</p>
                    </details>
                </div>
                <button className="bg-mYellow text-mBlack rounded-full p-4 w-96 font-semibold text-2xl">Prueba una Demo</button>
            </div>
        </section>
    )
}