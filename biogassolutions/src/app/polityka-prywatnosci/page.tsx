import styles from './page.module.css';

const s = styles;

function PrivacyPolicy() {
    return (
        <div className={s.content}>
            <h1 className={s.h1}>Polityka Prywatności</h1>
            <p className={s.p}>Niniejsza polityka prywatności określa zasady przetwarzania i ochrony danych osobowych gromadzonych w związku z korzystaniem z serwisu internetowego biogassolutions.pl. Dbamy o Twoją prywatność i bezpieczeństwo, dlatego przedstawiamy kluczowe informacje na temat tego, jak chronimy Twoje dane.</p>
            <h2 className={s.h2}>1. Administrator Danych Osobowych</h2>

            <ol className={s.ol}>
                <li className={s.li}>Administratorem Twoich danych osobowych jest <strong>Biogas Solutions Sp. z o.o.</strong> z siedzibą w Koziegłowach (62-028) przy ul. Topolowej 27B, wpisana do rejestru przedsiębiorców pod numerem NIP: 7773451010 oraz REGON: 542309232.</li>
                <li className={s.li}>We wszystkich sprawach związanych z przetwarzaniem danych osobowych oraz realizacją przysługujących Ci praw możesz kontaktować się z nami pod adresem e-mail: <strong><a href="mailto:biuro@biogassolutions.pl">biuro@biogassolutions.pl</a></strong>.</li>
                <li className={s.li}>Administrator nie wyznaczył Inspektora Ochrony Danych (IOD).</li>
            </ol>

            <h2 className={s.h2}>2. Cele i podstawy prawne przetwarzania danych</h2>
            <p className={s.p}>Twoje dane osobowe mogą być przetwarzane w następujących celach:</p>
            <ol className={s.ol}>
                <li className={s.li}>
                    <p className={s.p}><strong>Administrowanie i zapewnienie bezpieczeństwa serwisu</strong> - w ramach logów serwera automatycznie zapisywane są dane takie jak Twój adres IP, data i czas wizyty, informacje o przeglądarce internetowej i systemie operacyjnym. Przetwarzanie tych danych jest niezbędne do prawidłowego funkcjonowania strony i zapewnienia jej bezpieczeństwa.</p>
                    <ul>
                        <li className={s.li}><strong>Podstawa prawna:</strong> art. 6 ust. 1 lit. f RODO (prawnie uzasadniony interes administratora, polegający na administrowaniu serwisem i zapewnieniu jego bezpieczeństwa).</li>
                    </ul>
                </li>
            </ol>
            <p className={s.p}>Obecnie strona ma charakter wyłącznie informacyjny i nie zbiera danych osobowych za pośrednictwem formularzy kontaktowych, kalkulatorów czy newslettera.</p>

            <h2 className={s.h2}>3. Pliki Cookies</h2>
            <ol className={s.ol}>
                <li className={s.li}>Nasz serwis wykorzystuje pliki cookies (tzw. ciasteczka), czyli niewielkie pliki tekstowe zapisywane na Twoim urządzeniu końcowym (np. komputerze, smartfonie).</li>
                <li className={s.li}>Stosujemy następujące rodzaje plików cookies:
                    <ul>
                        <li className={s.li}><strong>Niezbędne pliki cookies:</strong> Są kluczowe dla prawidłowego działania strony. Umożliwiają poruszanie się po niej i korzystanie z jej podstawowych funkcji. Są instalowane automatycznie i nie wymagają Twojej zgody.</li>
                    </ul>
                </li>
                <li className={s.li}>Podczas pierwszej wizyty na stronie wyświetlany jest baner, za pomocą którego możesz wyrazić zgodę na używanie plików cookies (oprócz niezbędnych) lub jej odmówić. Swoimi zgodami możesz zarządzać w dowolnym momencie, a także usunąć pliki cookies za pomocą ustawień swojej przeglądarki internetowej.</li>
            </ol>

            <h2 className={s.h2}>4. Odbiorcy Danych</h2>
            <p className={s.p}>W celu zapewnienia prawidłowego funkcjonowania serwisu, Twoje dane mogą być powierzane zewnętrznym podmiotom. Są to:</p>
            <ol className={s.ol}>
                <li className={s.li}><strong>Dostawca hostingu:</strong> cyber_Folks S.A. - w celu przechowywania danych serwisu na serwerze.</li>
            </ol>
            <p className={s.p}>Twoje dane przetwarzane są głównie na terenie Europejskiego Obszaru Gospodarczego (EOG).</p>

            <h2 className={s.h2}>5. Okres przechowywania danych</h2>
            <ol className={s.ol}>
                <li className={s.li}><strong>Dane z logów serwera:</strong> Przechowywane są przez okres niezbędny do zapewnienia bezpieczeństwa i analizy ewentualnych incydentów, zazwyczaj nie dłużej niż 90 dni.</li>
            </ol>

            <h2 className={s.h2}>6. Twoje prawa związane z przetwarzaniem danych</h2>
            <p className={s.p}>W związku z przetwarzaniem Twoich danych osobowych przysługują Ci następujące prawa:</p>
            <ul>
                <li className={s.li}>Prawo do sprostowania (poprawiania) swoich danych.</li>
                <li className={s.li}>Prawo do usunięcia danych ("prawo do bycia zapomnianym").</li>
                <li className={s.li}>Prawo dostępu do swoich danych.</li>
                <li className={s.li}>Prawo do ograniczenia przetwarzania danych.</li>
                <li className={s.li}>Prawo do przenoszenia danych.</li>
                <li className={s.li}>Prawo do wniesienia sprzeciwu wobec przetwarzania danych opartego na prawnie uzasadnionym interesie administratora.</li>
                <li className={s.li}>Prawo do cofnięcia zgody w dowolnym momencie (bez wpływu na zgodność z prawem przetwarzania, którego dokonano na podstawie zgody przed jej cofnięciem).</li>
                <li className={s.li}>Prawo do wniesienia skargi do organu nadzorczego, tj. Prezesa Urzędu Ochrony Danych Osobowych.</li>
            </ul>
            <p className={s.p}>Aby skorzystać z powyższych praw, prosimy o kontakt pod adresem e-mail: <a href="mailto:biuro@biogassolutions.pl">biuro@biogassolutions.pl</a>.</p>

            <h2 className={s.h2}>7. Postanowienia końcowe</h2>
            <ol className={s.ol}>
                <li className={s.li}>Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej polityce prywatności, jeśli będzie to wynikało ze zmian technologicznych lub modyfikacji przepisów prawa.</li>
                <li className={s.li}>Aktualna wersja polityki prywatności jest zawsze dostępna w serwisie.</li>
                <li className={s.li}>Niniejsza polityka obowiązuje od dnia 16.09.2025 r.</li>
            </ol>
        </div>
    );
}

export default PrivacyPolicy;