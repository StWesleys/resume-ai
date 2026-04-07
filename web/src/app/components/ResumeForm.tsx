'use client';

import { useState } from "react";

export default function ResumeForm({ onSubmit }: any){
    const [form, setForm] = useState({
        name: '',
        email: '',
        summary: '',
        experience: '',
        education: '',
        skills: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Está deprecado, se não funcionar com submitevent, testar o formevent
    // const handleSubmit = (e: React.SubmitEvent) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(form);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" placeholder="Nome" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />

            <textarea name="summary" placeholder="Resumo" onChange={handleChange}></textarea>
            <textarea name="experience" placeholder="Experiência" onChange={handleChange}></textarea>
            <textarea name="education" placeholder="Educação" onChange={handleChange}></textarea>
            <textarea name="skills" placeholder="Skills" onChange={handleChange}></textarea>

            <button type="submit">Gerar Currículo</button>
        </form>
    )
}