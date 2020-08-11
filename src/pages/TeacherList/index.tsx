import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg'
import backIcon from '../../assets/images/icons/back.svg'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './style.css';
import PageHeader from '../../componets/PageHeader';
import TeacherItem, {Teacher} from '../../componets/TeacherItem';
import Input from '../../componets/Input';
import Select from '../../componets/Select';
import api from '../../services/apii';



function TeacherList() {
    const [teachers, setTeachers] = useState([])

    const [subject, setSubject] = useState('')
    const [week_day, setWeek_day] = useState('')
    const [time, setTime] = useState('')

    async function searchTeachers(e: FormEvent) {
        e.preventDefault()

        const data = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        })

        setTeachers(data.data)
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis ">
                <form id="search-teachers" onSubmit={searchTeachers}>
                    <Select
                        name=' Matéria'
                        label='subject'
                        value={subject}
                        onChange={e => { setSubject(e.target.value) }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologis', label: 'Biologis' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Química', label: 'Química' },
                            { value: 'Português', label: 'Português' },
                            { value: 'História', label: 'História' },
                        ]}
                    />

                    <Select
                        name='Dia da semana'
                        label='weed-day'
                        value={week_day}
                        onChange={e => { setWeek_day(e.target.value) }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' }
                        ]}
                    />
                    <Input
                        name='time'
                        label='Hora'
                        type='time'
                        value={time}
                        onChange={e => { setTime(e.target.value) }} />

                    <button type='submit'>
                        Buscar
                     </button>
                </form>
            </PageHeader>

            <main>

                {teachers.map((teacher: Teacher)=>{
                return  <TeacherItem key={teacher.id} teacher={teacher} />
                })}
                
            </main>
        </div>
    )
}

export default TeacherList;