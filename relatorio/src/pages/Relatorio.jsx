import React, { useEffect } from 'react';
import '../styles/Relatorio.css';

const Relatorio = () => {
  useEffect(() => {
    const paragraphs = document.querySelectorAll('.report-paragraph');
    paragraphs.forEach((paragraph, index) => {
      setTimeout(() => {
        paragraph.classList.add('fade-in');
      }, 150 * index);
    });
  }, []);

  return (
    <div className="relatorio-page">
      <div className="container">
        <h2 className="page-title">Relatório da Celebração Pascal</h2>
        
        <div className="report-content">
          <p className="report-paragraph">
            Nossa celebração pascal foi uma missa ecumênica muito especial, que contou com a presença de um padre, um pastor e outro líder religioso. Todos se reuniram para celebrar esse momento tão importante no calendário cristão.
          </p>
          
          <p className="report-paragraph">
            Durante a celebração, os alunos apresentaram uma encenação simples sobre a ressurreição de Jesus. Mesmo sendo uma apresentação modesta, todos conseguiram entender a mensagem importante que ela transmitia sobre a vitória de Jesus sobre a morte.
          </p>
          
          <p className="report-paragraph">
            O padre falou sobre a importância da Páscoa para os cristãos e como esse período nos faz refletir sobre os eventos que marcaram a vida de Jesus. Ele nos lembrou que devemos pensar no verdadeiro significado desse período para nossa vida.
          </p>
          
          <p className="report-paragraph">
            O pastor também trouxe sua mensagem, destacando que precisamos nos perguntar sobre quanto valor damos a esse período e se realmente entendemos o que Jesus fez por nós. Ele falou sobre como às vezes celebramos sem realmente pensar no significado profundo da Páscoa.
          </p>
          
          <p className="report-paragraph">
            O terceiro líder religioso complementou as falas anteriores, enfatizando a necessidade de reconhecermos o sacrifício de Jesus e como isso deve influenciar nosso comportamento e nossas ações no dia a dia com as outras pessoas.
          </p>
          
          <p className="report-paragraph">
            Foi um momento de união entre diferentes tradições cristãs, onde todos concordaram que, independente das diferenças, o mais importante é refletir sobre o significado da Páscoa em nossas vidas e como podemos viver de acordo com os ensinamentos de Jesus nos dias de hoje.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Relatorio;