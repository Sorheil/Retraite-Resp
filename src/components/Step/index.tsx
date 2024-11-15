interface StepProps {
    step: number;
    description: string;
}

function Step({ step, description }: StepProps) {
    return (
        <div className="text-xs w-[100px] md:w-[200px] xl:w-[300px] flex flex-col gap-1 text-gray-400 font-bold">
            <div className="w-full h-1 bg-blue-500"></div>
            <p>STEP {step}</p>
            <p >{description}</p>
        </div>
    );
}

export default Step;
