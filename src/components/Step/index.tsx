interface StepProps {
    step: number;
    description: string;
    currentStep: number;
}

function Step({ step, description, currentStep }: StepProps) {
    // Définir les classes pour chaque étape
    const stepColors: Record<number, string> = {
        1: 'bg-green-500 text-green-500',
        2: 'bg-blue-500 text-blue-500',
        3: 'bg-yellow-500 text-yellow-500',
    };

    // Déterminer si l'étape est la courante
    const isCurrentStep = step === currentStep;

    // Utiliser des classes statiques en fonction de l'étape
    const stepClass = isCurrentStep ? stepColors[step] : 'bg-gray-300 text-gray-400';
    const descriptionClass = isCurrentStep
        ? 'font-semibold text-black'
        : 'font-normal text-gray-400';

    return (
        <div className="text-xs w-[100px] flex flex-col gap-1 text-gray-400 font-bold md:w-[200px] md:text-sm xl:w-[300px]">
            {/* Barre de progression */}
            <div className={`w-full h-1 ${stepClass.split(' ')[0]}`}></div>
            {/* Texte de l'étape */}
            <p className={stepClass.split(' ')[1]}>STEP {step}</p>
            {/* Description */}
            <p className={descriptionClass}>{description}</p>
        </div>
    );
}

export default Step;
