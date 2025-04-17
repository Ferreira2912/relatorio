import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.classList.add('fade-in');
      }, 100 * index);
    });
  }, []);

  return (
    <div className="home-page">
      <div className="container">
        <h2 className="page-title">A Páscoa e seu Significado</h2>
        
        <section className="content-section">
          <h3 className="section-title">Origem e Significado</h3>
          <p className="section-text">
            A Páscoa é uma das celebrações mais importantes da fé cristã, comemorada anualmente em memória da ressurreição de Jesus Cristo. Esta celebração tem suas raízes no Pessach judaico, que celebra a libertação do povo hebreu da escravidão no Egito. Para os cristãos, a Páscoa representa o cumprimento das profecias e a demonstração do poder de Deus sobre a morte.
          </p>
        </section>
        
        <section className="content-section">
          <h3 className="section-title">O Período Pascal</h3>
          <p className="section-text">
            O período pascal é precedido pela Quaresma, um tempo de 40 dias dedicado à reflexão, oração e penitência. A Semana Santa marca os últimos dias deste período, iniciando com o Domingo de Ramos, que celebra a entrada triunfal de Jesus em Jerusalém. Durante esta semana, os cristãos relembram eventos cruciais como a Última Ceia, a crucificação na Sexta-feira Santa e culmina com a celebração da ressurreição no Domingo de Páscoa.
          </p>
        </section>
        
        <section className="content-section">
          <h3 className="section-title">Símbolos da Páscoa</h3>
          <p className="section-text">
            Diversos símbolos estão associados à Páscoa, cada um com seu significado especial. O cordeiro representa Jesus como o "Cordeiro de Deus", sacrificado pelos pecados da humanidade. O círio pascal simboliza Cristo como a luz do mundo. Os ovos de Páscoa simbolizam nova vida e ressurreição. Já o coelho se tornou um símbolo popular associado à fertilidade e ao renascimento da natureza na primavera do hemisfério norte.
          </p>
        </section>

        <div className="cta-container">
          <Link to="/relatorio" className="cta-button">
            Ver Relatório da Missa
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;