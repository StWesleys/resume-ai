export default function ResumeResult({ data }: any){
    return (
        <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-4 border rounded">
                <h2 className="font-bold mb-2">Original</h2>
                <p className="mb-2"><strong>Resumo:</strong> {data.original.summary}</p>
                <p><strong>Experiência:</strong> {data.original.experience}</p>
            </div>

            <div className="p-4 rounded border">
                <h2 className="font-bold mb-2">Melhorado pela IA</h2>
                <p className="mb-2"><strong>Resumo:</strong> {data.improved.summary}</p>
                <p><strong>Experiência:</strong> {data.improved.experience}</p>
            </div>
        </div>
    )
}