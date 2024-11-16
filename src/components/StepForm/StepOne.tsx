function StepOne({ value, setValue }: any) {
    
    return (
        <form className="flex flex-col gap-5 px-5 py-5 md:flex-row md:justify-between">
            <label htmlFor="name" className="md:w-[300px]">
                Nom <span className="text-red-500">*</span>
                <input type="text" name="name" id="name" placeholder='Entrez votre nom' className="w-full border rounded-md p-2" value={value.name} onChange={(e) => setValue({ ...value, name: e.target.value })} />
                <div></div>
            </label>

            <label htmlFor="prename" className="md:w-[300px]">
                Prénom <span className="text-red-500">*</span>
                <input type="text" name="prename" id="prename" placeholder="Entrez votre prenom" className="w-full border rounded-md p-2" value={value.prename} onChange={(e) => setValue({ ...value, prename: e.target.value })} />
            </label>
        </form>
    );
}

export default StepOne;
