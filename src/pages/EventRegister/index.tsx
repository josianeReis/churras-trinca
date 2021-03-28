import React from 'react';
import Button from '../../components/Button';
// import CardItem from '../../components/CardItem';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';

import './EventRegister.scss';

const EventRegister: React.FC = () => {
  return (
    <div id="page-event-register" className="container">
      <main>
        <form>
          <fieldset>
            <legend>Dados do evento</legend>
            <div id="event-info-container">
              <div className="personalInfoContainer">
                <Input label="Nome do evento" name="name" />
                <Input label="Data" id="surname-info" name="surname" />
              </div>
              <Input label="Descrição do evento" name="description" />
              <Input label="Organizador" name="organizer" />
              <Textarea label="Observações" name="comments" />
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
