export default function ResumePreview({ data }: any){
    return(
        <div className="mt-8 p-6 border rounded max-w-2x1 bg-white text-black">
            <h1 className="text-2xl font-bold">{ data.name }</h1>
            <p className="text-gray-600">{ data.email }</p>

            <hr className="my-4" />

            <h2 className="font-semibold">Resumo</h2>
            <p className="mb-4">{ data.summary }</p>

            <h2 className="font-semibold">Experiência</h2>
            <p className="mb-4">{ data.experience }</p>

            <h2 className="font-semibold">Educação</h2>
            <p className="mb-4">{ data.education }</p>

            <h2 className="font-semibold">Skills</h2>
            <ul className="list-disc ml-5">
                { data.skills.map((skill: string, i: number) => {
                    return <li key={i}>{ skill }</li>
                })}
            </ul>

            <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                Baixar PDF (em breve)
            </button>
        </div>
    )
}