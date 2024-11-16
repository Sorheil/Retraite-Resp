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
    // local state
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({ name: '', prename: '', city: '', group: '', number: '', phone: '' });

    //prepare data
    const steps = [
        { step: 1, description: "Nom et Prénom", component: <StepOne value={userData} setValue={setUserData} /> },
        { step: 2, description: "Adresse", component: <StepTwo value={userData} setValue={setUserData} /> },
        { step: 3, description: "Numéro de téléphone", component: <StepThree /> }
    ];

    const isFirstStep = currentStep === 1;
    const isLastStep = currentStep === steps.length;

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
                        {/* Garder tous les composants montés, ne pas les démonter */}
                        {steps[currentStep - 1].component}
                    </div>

                    <div className="flex gap-5 justify-between border-t-[2px] px-5 py-3">
                        <button
                            className={`border rounded-md p-2 hover:bg-gray-100 focus:bg-gray-100 ${isFirstStep ? "hidden" : ""} ${isLastStep ? "mx-auto" : ""}`}
                            onClick={goToPreviousStep}
                            disabled={isFirstStep}
                        >
                            Étape précédente
                        </button>

                        <button
                            className={`border rounded-md p-2 hover:bg-gray-100 focus:bg-gray-100 ${isFirstStep ? "mx-auto" : ""} ${isLastStep ? "hidden" : ""}`}
                            onClick={goToNextStep}
                        >
                            {isLastStep ? "Confirmer son inscription" : "Étape suivante"}
                        </button>
                    </div>
                </div>
            </main>
        </>
    );
}

export default SignUp;
