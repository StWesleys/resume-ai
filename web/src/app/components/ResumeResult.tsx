export default function ResumeResult({ data }: any){
    return (
        <div className="mt-8 grid grid-cols-2 gap-4">
            <div>
                <h2 className="font-bold">Original</h2>
                <pre>{JSON.stringify(data.original, null, 2)}</pre>
            </div>

            <div>
                <h2 className="font-bold">Melhorado</h2>
                <pre>{JSON.stringify(data.improved, null, 2)}</pre>
            </div>
        </div>
    )
}