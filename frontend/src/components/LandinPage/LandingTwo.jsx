import Image from "next/image"
import graphics from "@/assets/landing/graphics.png"
export default function LandingTwo () {
    return(
        <section className="flex flex-col items-center justify-between w-full md:flex-row">
            <div>
                <Image src={graphics}/>
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