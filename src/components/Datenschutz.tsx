import React from 'react';
import SectionTitle from './SectionTitle';

const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Datenschutzerklärung"
          subtitle="Informationen gemäß Art. 13 DSGVO"
          centered
        />
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
              <p className="text-gray-700">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                persönlich identifiziert werden können.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">2. Verantwortlicher</h2>
              <p className="text-gray-700">
                Fabian Doll Gebäudereinigung<br />
                Zur Feldlage 10A<br />
                58099 Hagen<br />
                Deutschland<br /><br />
                Tel: <a href="tel:+491705514335" className="hover:underline">+49 170 5514335</a><br />
                E-Mail: <a href="mailto:gebaeudereinigung.doll@gmail.com" className="hover:underline">gebaeudereinigung.doll@gmail.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">3. Datenerfassung auf dieser Website</h2>
              <h3 className="text-lg font-medium mb-2">Kontaktformular</h3>
              <p className="text-gray-700">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der 
                Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht 
                ohne Ihre Einwilligung weiter.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">4. Ihre Rechte</h2>
              <p className="text-gray-700">
                Sie haben jederzeit das Recht:<br />
                • Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DSGVO)<br />
                • Die Berichtigung unrichtiger personenbezogener Daten zu verlangen (Art. 16 DSGVO)<br />
                • Die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen (Art. 17 DSGVO)<br />
                • Die Einschränkung der Datenverarbeitung zu verlangen (Art. 18 DSGVO)<br />
                • Der Datenverarbeitung zu widersprechen (Art. 21 DSGVO)<br />
                • Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten (Art. 20 DSGVO)
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">5. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-gray-700">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine 
                SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile 
                des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;