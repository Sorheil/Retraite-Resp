import "./../../App.css"
import logo from "./../../assets/react.svg"
// components
import { Link } from "react-router-dom"
import Step from "../../components/Step";

function SignUp() {
    const steps: { step: number, description: string }[] = [{ step: 1, description: "Nom et Prénom" }, { step: 2, description: "Adresse" }, { step: 3, description: "Numero de telephone" }];

    return (
        <>
            <header className="text-center px-5 py-10 md:mx-32">
                <Link to="/">
                    <img src={logo} alt="retraite nom de la retraite" className="mx-auto" />
                </Link>
                <h1 className="text-2xl font-bold">Inscription à la Retraite</h1>
                <p className="mt-2 md:text-md">Remplissez ce formulaire pour vous inscrire et obtenir
                    un numéro unique qui vous permettra de participer à la Retraite.</p>
            </header>

            <main className=" px-5 md:mx-32 ">
                {/* steps */}
                <div className=" flex justify-between gap-5 ">
                    {steps.map(step => <Step key={`step-${step.step}`} step={step.step} description={step.description} />)}
                </div>
                {/* forms */}
                <div className=" border rounded-md mt-10 md:w-min md:mx-auto ">
                    <h2 className="p-2 border-b-[2px] px-5 py-3">Nom et Prénom</h2>
                    <form action="/" className=" flex flex-col gap-5 px-5 py-5 md:flex-row md:justify-between ">
                        <label htmlFor="name" className="md:w-[300px]">
                            Nom
                            <input type="text" name="name" id="name" className="w-full border rounded-md p-2 " />
                        </label>

                        <label htmlFor="prename" className="md:w-[300px]">
                            Prenom
                            <input type="text" name="prenama" id="prename" className="w-full border rounded-md p-2 " />
                        </label>
                    </form>
                    <div className="flex gap-5 justify-between border-t-[2px] px-5 py-3">
                        <button className="border rounded-md p-2">Rentrer a l'etape precedente </button>
                        <button className="border rounded-md p-2">Passer à l'etape suivante </button>
                    </div>
                </div>


            </main>
        </>
    )
}

export default SignUp;
