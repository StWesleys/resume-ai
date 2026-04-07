'use client';

import { useState } from "react"
import ResumeForm from "./components/ResumeForm"
import ResumeResult from "./components/ResumeResult"

export default function Home() {
    const [result, setResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(data: any) => {
        setLoading(true);

        try{
            const response = await fetch('http://localhost:3333/resume/improve', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data),
            });

            const json = await response.json();
            setResult(json);
        } catch (error) {
            console.error(error);
        }

        setLoading(false)
    };

    return (
        <main className="p-8">
            <h1 className="text-2xl mb-4">Gerador de Currículo com IA</h1>

            <ResumeForm onSubmit={handleSubmit} />
            
            { loading && <p>Gerando...</p>}
        
            {result && <ResumeResult data={result} />}
        </main>
    )
}
