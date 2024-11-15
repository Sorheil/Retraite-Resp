function StepOne() {
    return (
        <form className="flex flex-col gap-5 px-5 py-5 md:flex-row md:justify-between">
            <label htmlFor="name" className="md:w-[300px]">
                Nom
                <input type="text" name="name" id="name" placeholder='Entrez votre nom' className="w-full border rounded-md p-2" />
            </label>

            <label htmlFor="prename" className="md:w-[300px]">
                Prénom
                <input type="text" name="prename" id="prename" placeholder="Entrez votre prenom" className="w-full border rounded-md p-2" />
            </label>
        </form>
    );
}

export default StepOne;
