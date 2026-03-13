import Image from "next/image";
import "./page.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="content">
          <div id="Section1">
              <h1 className="hero-header">Tańsza energia i ciepło z własnych odpadów — instalacje biogazu</h1>
              <p className="lead">Wykorzystujemy lokalne odpady organiczne, aby bezpiecznie wytwarzać prąd i ciepło w kogeneracji — od koncepcji i pozwoleń po rozruch i serwis. Zapewniamy wsparcie w dofinansowaniu oraz zdalny monitoring 24/7 i szybką reakcję serwisu zgodnie z umową.</p>
              <Link className="cta-button" href="/kontakt">Uzyskaj bezpłatną wstępną wycenę</Link>
              {/*<a className="cta-button">Oblicz opłacalność</a>*/}
          </div>

          <div id="Section2">
              <h2>Co robimy?</h2>
              <div className="column card">
                  <img src="/img/icons/biogas.png" alt="Ikona biogazowni" />
                  <h3>Mikrobiogazownie do 50 kW</h3>
              </div>
              <div className="column card">
                  <img src="/img/icons/power-plant.png" alt="Ikona dużej biogazowni" />
                  <h3>Biogazownie 50-499 kW i {'>'}500 kW</h3> 
              </div>
              <div className="column card">
                  <img src="/img/icons/methane.png" alt="Ikona metanu" />
                  <h3>Biometanownie</h3>  
              </div>
              <div className="cta">
                <Link href="/oferta" className="cta-button">Poznaj naszą ofertę</Link>
              </div>
          </div>

          <div id="Section3">
              <h2>Dlaczego my?</h2>
              <div className="card">
                  <img src="/img/icons/workflow.png" alt="Ikona przepływu pracy" />
                  <p>Kompleksowa obsługa „od A do Z” (studium, projekt, decyzje, budowa, rozruch, serwis) i wsparcie pozyskania dotacji.</p>
              </div>
              <div className="card">
                  <img src="/img/icons/technology.png" alt="Ikona technologii" />
                  <p>Zaawansowane systemy procesowe - w zakresie urządzeń i elementów procesowych (w tym procesów higienizacji oraz sterylizacji), zdalnego sterowania oraz instalacji dla funkcjonalności obiektów.</p>
              </div>
              <div className="card">
                  <img src="/img/icons/24-hours-service.png" alt="Ikona obsługa 24/7" />
                  <p>Zdalny monitoring 24/7, szkolenia operatorów i standard reakcji serwisu do 48 h z opcją skrócenia wg umowy.</p>
              </div>
              <div className="card">
                  <img src="/img/icons/shield.png" alt="Ikona tarczy" />
                  <p>Bezpieczeństwo i niezawodność instalacji w zakresie całości obiektów oraz poszczególnych urządzeń i elementów.</p>
              </div>
              <div className="cta">
                  <Link className="cta-button" href="/o-nas">Dowiedz się więcej</Link>
              </div>
          </div>

          <div id="Section4">
              <h2>Proces inwestycyjny</h2>
              <img src="/img/timeline.png" alt="Przebieg procesu inwestycyjnego - oś czasu" />
              <Link href="/technologia" className="cta-button">Poznaj technologię</Link>
          </div>

          <div id="Section5">
              <h2>Finansowanie</h2>
              <p>Przygotowujemy dokumentację i wnioski oraz wspieramy rozliczenia w programach krajowych i unijnych.</p>

              <div className="logos">
                  <img src="/img/dotations/feng-logo.png" alt="Fundusze Europejskie dla Nowoczesnej Gospodarki"/>
                  <img src="/img/dotations/nfosigw-logo.png" alt="Narodowy Fundusz Ochrony Środowiska i Gospodarki Wodnej" />
                  <img src="/img/dotations/energia-dla-wsi-logo.png" alt="Energia Dla Wsi" />
              </div>

              <div className="cta">
                  <Link className="cta-button" href="/kontakt">Uzyskaj darmową wstępną wycenę</Link>
              </div>
          </div>
      </div>
    </>
  );
}
