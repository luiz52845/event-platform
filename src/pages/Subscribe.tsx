import { Logo } from "../components/Logo";

export function Subscribe() {
    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="mx-w-[640]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma <strong className="text-blue-500"> aplicação completa</strong> , do zero com <strong className="text-blue-500"> React JS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        <strong>Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e demandada do mercado.</strong>
                    </p>

                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form action="" className="flex flex-col gap-2" w-full>
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Digite seu e-mail"
                        />
                        <button
                            type="submit"
                            className="mt-04 bg-green-500 uppercase py-4 font-bold text-sm hover:bg-green-700 transition-colors"
                        >
                            Garantir minha vaga
                        </button>
                    </form>

                </div>
            </div>

            <img
                src="/src/assets/code-mockup.png"
                className="mt-10"
                alt="" />
        </div>
    );
}