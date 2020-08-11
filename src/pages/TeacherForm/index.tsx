import{useHistory} from 'react-router-dom'
import React, { useState, FormEvent } from 'react';
import PageHeader from '../../componets/PageHeader';
import './styles.css'
import Input from '../../componets/Input';
import warningIcon from '../../assets/images/icons/warning.svg'
import TextArea from '../../componets/TextArea';
import Select from '../../componets/Select';
import api from '../../services/apii';


function TeacherForm() {
    const history= useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ])
    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])

    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItem = scheduleItems.map((scheduleItems, index) => {
            if (index === position) {
                return { ...scheduleItems, [field]: value };
            }
            return scheduleItems
        })
        setScheduleItems(updatedScheduleItem)
    }

    function hadleCreateClass(e: FormEvent) {
        e.preventDefault();
            api.post('classes',{
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost:Number(cost),
                schedule: scheduleItems
            }).then(()=>{
                alert('Cadastro realizado com sucesso!')
                history.push('/')
            }).catch(()=>{
                alert('Erro ao realizar cadastro')
            })
      


    }


    return (
        <div id="page-teacher-form" className="container">
            <PageHeader title="Que incrivel que você quer dar aulas"
                description="Estou imensamente intusiasmado com vc aqui !!"
            />
            <main>
                <form onSubmit={hadleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input
                            name=' Nome Completo'
                            label='name'
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            name='Avatar'
                            label=' avatar'
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            name='WhatsApp'
                            label=' whatsapp'
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <TextArea
                            name="bio"
                            label='Biografia'
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select
                            name=' Matéria'
                            label='subject'
                            value={subject}
                            onChange={(e) => { setSubject(e.target.value) }}
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
                        <Input
                            name='Custo da sua aula por hora'
                            label='cost'
                            value={cost}
                            onChange={(e) => { setCost(e.target.value) }} />
                    </fieldset>

                    <fieldset>
                        <legend>Horários disponíveis
                    <button type="button" onClick={addNewScheduleItem}>+ Novo horário</button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key={scheduleItem.week_day} className="schedule-item">
                                    <Select
                                    key={scheduleItem.week_day}
                                        name='Dia da semana'
                                        label='weed-day'
                                        value={scheduleItem.week_day}
                                        onChange={e => setScheduleItemValue(index, 'week-day', e.target.value)}
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

                                    <Input name="Das"
                                        label="from"
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />

                                    <Input name="Até"
                                        label="to"
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />



                                </div>
                            )
                        })}
                    </fieldset>
                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso Importante" />
                        Importante <br />
                        Preencher todos os dados
                    </p>
                        <button type="submit">
                            Salvar Cadastro
                    </button>

                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm;