function StepTwo({ value, setValue }: any) {
    return (
        <form className="grid grid-cols-2 grid-rows-2 gap-5 px-5 py-5">
            {/* Champ Ville */}
            <label htmlFor="city" className="grid-row-start-1 grid-row-end-2 grid-col-start-1 grid-col-end-2">
                Ville <span className="text-red-500">*</span>
                <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Entrez votre ville"
                    className="w-full border rounded-md p-2"
                    value={value.city}
                    onChange={(e) => setValue({ ...value, city: e.target.value })}
                />
            </label>

            {/* Champ Groupe */}
            <label htmlFor="group" className="grid-row-start-1 grid-row-end-2 grid-col-start-2 grid-col-end-3">
                Groupe
                <input
                    type="text"
                    name="group"
                    id="group"
                    placeholder="Entrez votre groupe"
                    className="w-full border rounded-md p-2"
                    value={value.group}
                    onChange={(e) => setValue({ ...value, group: e.target.value })}
                />
            </label>

            {/* Champ Numéro (s'étend sur les 2 colonnes) */}
            <label htmlFor="number" className="col-span-2">
                Numero <span className="text-red-500">*</span>
                <input
                    type="tel"
                    name="number"
                    id="number"
                    placeholder="Entrez votre numero"
                    className="w-full border rounded-md p-2"
                    value={value.number}
                    onChange={(e) => setValue({ ...value, number: e.target.value })}
                />
            </label>
        </form>
    );
}

export default StepTwo;
