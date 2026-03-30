'use client';

import styles from './page.module.css';
import Image from 'next/image';
import bg from '@/../public/img/bg/bg2.jpg';
import CopyBtn from '@/components/CopyBtn/CopyBtn';
import { useState } from 'react';

const s = styles;

function Contact() {
    const [inactiveCopyBtn, setInactiveCopyBtn] = useState<string | undefined>(undefined);

    return (
        <section className="content">
            <div className="bgContainer">
                <Image 
                    src={bg}
                    alt=''
                    fill={true}
                    quality={70}
                    loading="eager"
                    placeholder="blur"
                    className="pageBg"
                />
            </div>
            
            <section id="ContactSection1" className={`cover ${s.cover}`}>
                <div className="content">
                    <h1 className="hero-header">Skontaktujmy się</h1>
                    <p className="lead">Zaczynamy od krótkiej rozmowy i podstawowych danych o dostępnych materiałach organicznych oraz zapotrzebowaniu na energię - na tej podstawie przygotujemy wstępną koncepcję. Po akceptacji przechodzimy do szczegółowych założeń projektu i harmonogramu.</p>
                    <a className="cta-button" href="#kontakt">Skontaktuj się z nami</a>
                </div>
            </section>

            <section className="mainContent">

                <section id="ContactSection2" className={s.Section2}>
                    <h2>W czym możemy pomóc?</h2>
                    <ul className={s.ul}>
                        <li className={s.li}>
                            <img className={s.icon} src="/img/icons/checked.png" />
                            <p>Wstępne określenie mocy, dobór technologii wraz z wstępną wyceną, harmonogramem i zakresem "pod klucz".</p>
                        </li>
                        <li className={s.li}>
                            <img className={s.icon} src="/img/icons/checked.png" />
                            <p>Wsparcie w dofinansowaniu i dokumentach, w tym załączniki techniczne wymagane przez programy.</p>
                        </li>
                        <li className={s.li}>
                            <img className={s.icon} src="/img/icons/checked.png" />
                            <p>Doborze i dostawie technologii, urządzeń oraz obiektów dla rozbudowy istniejącej instalacji</p>
                        </li>
                        <li className={s.li}>
                            <img className={s.icon} src="/img/icons/checked.png" />
                            <p>Modernizacji istniejących instalacji.</p>
                        </li>
                        <li className={s.li}>
                            <img className={s.icon} src="/img/icons/checked.png" />
                            <p>Serwis i utrzymanie ruchu.</p>

                        </li>
                        <li className={s.li}>
                            <img className={s.icon} src="/img/icons/checked.png" />
                            <p>Monitoring i automatyzacja instalacji (projektowanych i istniejących).</p>

                        </li>
                        <li className={s.li}>
                            <img className={s.icon} src="/img/icons/checked.png" />
                            <p>Nadzór techniczny i audyty dla instalacji biogazowych.</p>
                        </li>
                    </ul>
                </section>

                <section id="ContentSection3" className={s.Section3}>
                    <h2>Skontaktuj się z nami</h2>

                    <div className={s.container}>
                        <div id="kontakt" className={`${s.ContactInfo} ${s.infoCard}`} style={{gridArea: 'contact'}}>
                            <div className={s.header}>
                                <h3 className={s.h3}>Kontakt</h3>
                                <div className={s.divider}></div>
                            </div>
                            <div className={s.content}>
                                <p><span className={s.tag}>Email:</span> <a href="mailto:biuro@biogassolutions.pl">biuro@biogassolutions.pl</a><CopyBtn toCopy="biuro@biogassolutions.pl" onClick={() => setInactiveCopyBtn('email')} inactive={inactiveCopyBtn} label="email" /></p>
                                <p><span className={s.tag}>Tel.:</span> <a href="tel:+48607152386">+48 607 152 386</a><CopyBtn toCopy="+48 607 152 386" onClick={() => setInactiveCopyBtn('phone')} inactive={inactiveCopyBtn} label="phone" /></p>
                            </div>
                        </div>

                        <div id="company-info" className={`${s.CompanyInfo} ${s.infoCard}`} style={{gridArea: 'company'}}>
                            <div className={s.header}>
                                <h3 className={s.h3}>Dane Firmy</h3>
                                <div className={s.divider}></div>
                            </div>
                            <div className={s.content}>
                                <p>Biogas Solutions Sp. z o.o.</p>
                                <p>ul. Topolowa 27B, 62-028 Koziegłowy</p>
                                <p><span className={s.tag}>NIP:</span> 777 345 10 10 <CopyBtn toCopy="777 345 10 10" onClick={() => setInactiveCopyBtn('nip')} inactive={inactiveCopyBtn} label="nip" /></p>
                                <p><span className={s.tag}>REGON:</span> 542309232 <CopyBtn toCopy="542309232" onClick={() => setInactiveCopyBtn('regon')} inactive={inactiveCopyBtn} label="regon" /></p>
                            </div>
                        </div>

                        <div id="office" className={`${s.Office} ${s.infoCard}`} style={{gridArea: 'office'}}>
                            <div className={s.header}>
                                <h3 className={s.h3}>Biuro</h3>
                            </div>
                            <div className={s.content}>
                                <p className={s.p} style={{gridArea: 'p'}}>Ul. Dworcowa 4b/3</p>
                                <p className={s.p} style={{gridArea: 'p'}}>62-020 Swarzędz</p>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    );
}

export default Contact;