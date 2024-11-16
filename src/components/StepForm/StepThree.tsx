function StepThree({ }) {
    return (
        <form className="flex flex-col gap-5 px-5 py-5 md:flex-row md:justify-between">
            <label htmlFor="phone" className="md:w-[300px]">
                Numéro de téléphone
                <input type="tel" name="phone" id="phone" className="w-full border rounded-md p-2" />
            </label>
        </form>
    );
}

export default StepThree;
