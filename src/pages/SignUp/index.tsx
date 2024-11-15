import "./../../App.css";
// images
import logo from "../../assets/react.svg";
// components
import { Link } from "react-router-dom";
import { useState } from "react";
import StepOne from "../../components/StepForm/StepOne";
import StepTwo from "../../components/StepForm/StepTwo";
import StepThree from "../../components/StepForm/StepThree";
import Step from "../../components/Step";

function SignUp() {
    const steps = [
        { step: 1, description: "Nom et Prénom" },
        { step: 2, description: "Adresse" },
        { step: 3, description: "Numéro de téléphone" }
    ];

    const [currentStep, setCurrentStep] = useState(1);

    // États persistants pour chaque étape
    const [stepOneData, setStepOneData] = useState({});
    const [stepTwoData, setStepTwoData] = useState({});
    const [stepThreeData, setStepThreeData] = useState({});

    const goToNextStep = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const goToPreviousStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <>
            <header className="text-center px-5 py-10 md:mx-32">
                <Link to="/">
                    <img src={logo} alt="retraite nom de la retraite" className="mx-auto" />
                </Link>
                <h1 className="text-2xl font-bold">Inscription à la Retraite</h1>
                <p className="mt-2 md:text-md md:w-[600px] md:mx-auto">
                    Remplissez ce formulaire pour vous inscrire et obtenir un numéro unique qui vous permettra de participer à la Retraite.
                </p>
            </header>

            <main className="px-5 flex flex-col items-center">
                {/* Steps */}
                <div className="flex justify-between gap-5">
                    {steps.map((step) => (
                        <Step key={`step-${step.step}`} step={step.step} description={step.description} currentStep={currentStep} />
                    ))}
                </div>

                {/* Form */}
                <div className="border rounded-md mt-10">
                    <h2 className="p-2 border-b-[2px] px-5 py-3">{steps[currentStep - 1].description}</h2>
                    <div>
                        {/* Garder tous les composants montés et utiliser un affichage conditionnel */}
                        <div className={currentStep === 1 ? "block" : "hidden"}>
                            <StepOne />
                        </div>
                        <div className={currentStep === 2 ? "block" : "hidden"}>
                            <StepTwo />
                        </div>
                        <div className={currentStep === 3 ? "block" : "hidden"}>
                            <StepThree />
                        </div>
                    </div>

                    <div className="flex gap-5 justify-between border-t-[2px] px-5 py-3">
                        <button
                            className="border rounded-md p-2 hover:bg-gray-100 focus:bg-gray-100"
                            onClick={goToPreviousStep}
                            disabled={currentStep === 1}
                        >
                            Rentrer à l'étape précédente
                        </button>
                        <button
                            className="border rounded-md p-2 hover:bg-gray-100 focus:bg-gray-100"
                            onClick={goToNextStep}
                            disabled={false}
                        >
                            Passer à l'étape suivante
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default SignUp;
