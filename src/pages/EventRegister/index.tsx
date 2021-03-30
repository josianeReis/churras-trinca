import React, { FormEvent, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import backgroundImg from '../../assets/images/background.svg';

import './EventRegister.scss';
import api from '../../services/api';
import { AuthContext } from '../../contexts/auth';

type EventData = {
  title: string;
  date: string;
  description: string;
  manager: string;
  notes: string;
};

const EventRegister: React.FC = () => {
  const [eventData, setEventData] = useState<EventData>({} as EventData);
  const history = useHistory();
  const { emitMessage } = useContext(AuthContext);

  function handleChange(type: string, value: any) {
    return setEventData({ ...eventData, [type]: value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    api
      .post('events', eventData)
      .then(() => {
        emitMessage('Churrasco cadastrado com sucesso!');
        history.push('/');
      })
      .catch(() => {
        emitMessage('Não foi possível cadastrar sua aula!', 'error');
      });
  }

  return (
    <div id="page-event-register">
      <PageHeader page="Cadastro de novo churrasco" background={backgroundImg}>
        <div className="profile-header">
          <h2>Agenda de Churras</h2>
        </div>
      </PageHeader>
      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados do evento</legend>
            <div id="event-info-container">
              <div className="personalInfoContainer">
                <Input
                  label="Nome do evento"
                  name="title"
                  value={eventData.title}
                  onChange={(e) => handleChange('title', e.target.value)}
                />
                <Input
                  label="Data"
                  id="date"
                  name="date"
                  value={eventData.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                />
              </div>
              <Input
                label="Descrição do evento"
                name="description"
                value={eventData.description}
                onChange={(e) => handleChange('description', e.target.value)}
              />
              <Input
                label="Organizador"
                name="manager"
                value={eventData.manager}
                onChange={(e) => handleChange('manager', e.target.value)}
              />
              <Textarea
                label="Observações"
                name="notes"
                value={eventData.notes}
                onChange={(e) => handleChange('notes', e.target.value)}
              />
            </div>
          </fieldset>
          <footer>
            <div className="buttonContainer">
              <Button type="submit" name="submit" classname="submitButton">
                CADASTRAR
              </Button>
            </div>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default EventRegister;
