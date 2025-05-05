import React from 'react';
import SectionTitle from './SectionTitle';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Impressum"
          subtitle="Angaben gemäß § 5 TMG"
          centered
        />
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">Unternehmensangaben</h2>
              <p className="text-gray-700">
                Fabian Doll Gebäudereinigung<br />
                Zur Feldlage 10A<br />
                58099 Hagen<br />
                Deutschland
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Vertreten durch</h2>
              <p className="text-gray-700">Fabian Doll</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Kontakt</h2>
              <p className="text-gray-700">
                Telefon: <a href="tel:+491705514335" className="hover:underline">+49 170 5514335</a><br />
                E-Mail: <a href="mailto:gebaeudereinigung.doll@gmail.com" className="hover:underline">gebaeudereinigung.doll@gmail.com</a><br />
                Website: <a href="https://www.fabiandoll-gebaeudereinigung.de/" className="hover:underline" target="_blank" rel="noopener noreferrer">www.fabiandoll-gebaeudereinigung.de</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Umsatzsteuer-ID</h2>
              <p className="text-gray-700">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [Hier Ihre USt-IdNr. einfügen]
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Streitschlichtung</h2>
              <p className="text-gray-700">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr" className="hover:underline" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr
                </a>.<br />
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
              <p className="text-gray-700 mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Haftung für Inhalte</h2>
              <p className="text-gray-700">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="text-gray-700 mt-4">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Haftung für Links</h2>
              <p className="text-gray-700">
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="text-gray-700 mt-4">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Urheberrecht</h2>
              <p className="text-gray-700">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. 
                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="text-gray-700 mt-4">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem 
                auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei 
                Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impressum;