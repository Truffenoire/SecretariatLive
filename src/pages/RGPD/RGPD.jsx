import React from 'react';

const RGPD = () => {
    return (
        <div className='rgpd'>
            <div className="protection">
                <h2>PROTECTION DES DONNÉES</h2>
                <ol className='listOrganisé'>
                    <li>Site concerné</li>
                    <p>Secretariat Live !</p>
                    <li>Utilistation des données personnelles renseignés</li>
                    <div className="rgpdContact">
                        <h4>- Formulaire de contact</h4>
                        <p>Les informations (nom, adresse email, et message) envoyées via le formulaire de la page contact sont utilisées dans l’unique but de répondre aux messages envoyés par les utilisateurs. Elles ne sauraient être utilisées de quelque autre manière.</p>
                    </div>
                    <li>transmission de vos données personnelles</li>
                    <p>Aucune information collectée via le formulaire de la page contact n’est transmise à des fins commerciales à des tiers. Les informations (nom, adresse email, et message) sont envoyées à l'adresse mail de Secretariat Live !, ceci permet au site Secretariat Live ! de consulter et répondre aux messages envoyés. Les messages reçus peuvent être stockés pour une durée indéterminée tant que le site Secretariat Live ! est opérationnel.</p>
                    <li>durée de stockage de vos données personnelles</li>
                    <p>Si vous envoyez un email via le formulaire contact, le site Secretariat Live ! s'engage à conserver votre adresse le temps necessaire à vous répondre</p>
                    <li>informations de contact</li>
                    <p>Pour toute information relative à vos données personnelles, vous pouvez envoyer un message via ce formulaire de contact.</p>
                </ol>
                <h2>CONDITIONS GENERALES DE VENTE</h2>
                <ol className="listOrganisé">
                    <li>Objet (socièté)</li>
                    <li>Lieux (d'ou tu travail)</li>
                    <li>Réalisation</li>
                    <p>Secretatiat Live ! s’engage à assurer les prestations de services demandées par le client et à lui restituer les documents et travaux effectués pour son compte par l’un des différents moyens retenus lors de l’acceptation du devis : remise en main propre, mail, courrier postal ou coursier (frais à la charge du client).
                        Les ventes de prestations ne sont conclues qu’après acceptation d’un devis et des présentes conditions générales de ventes par le client.
                        Les prestations demandées par le client seront fournies dans un délai raisonnable à compter de la réception par Secretatiat Live ! du devis signé, accompagné de l’acompte exigible (voir article « Paiement »)
                        A défaut de réserves ou réclamations expressément émises par le client lors de la réception des prestations, celles-ci seront réputées conformes à la commande, en qualité et quantité.
                        Secretatiat Live ! rectifiera dans les plus brefs délais et à ses frais, les prestations fournies dont le défaut de conformité aura été dûment prouvé par le client.
                        Dans la limite du possible, Secretatiat Live ! prendra en compte les éventuelles modifications de la commande demandées par le client à condition qu’elles soient notifiées par écrit au maximum 2 jours avant la date prévue pour la fourniture des prestations. Ces modifications pourront donner lieu à des modifications de tarifs.
                        En cas d’annulation de la commande par le client après son acceptation, pour quelque raison que ce soit hormis la force majeure, l’acompte versé à la commande, tel que défini à l’article « Paiement » des présentes Conditions Générales de Vente sera de plein droit acquis à Secretatiat Live ! et ne pourra donner lieu à un quelconque remboursement.</p>
                    <li>Livraison</li>
                    <p>Les délais de livraison indiqués pour l’envoi postal lors de la prise de la commande avec le client ne sont donnés qu’à titre indicatif et ne sont aucunement garantis dans la mesure où ils ne dépendent pas de Secretatiat Live !, mais du transporteur choisi par le client. Par conséquence, tout retard dans la livraison des travaux ne pourra donner lieu au profit du client à l’annulation de la commande ou au bénéfice de dommages et intérêts. La date à retenir est soit celle du cachet de la poste soit la date de remise aux transporteurs.
                        Le choix du transport par voie postale et les risques induits sont supportés en totalité par le client, y compris en cas de colis manquant ou détérioré lors de l’acheminement postal.</p>
                    <li>Règlement</li>
                    <div className="reglement">
                        <div>
                            <h5>- Tarifs</h5>
                            <p>Les prestations demandées par le client feront l’objet d’un devis établi par Secretatiat Live ! et valable un mois. Toute commande n’est enregistrée qu’à compter de la date à laquelle le devis et les présentes conditions de vente signés sont parvenus à Secretatiat Live !.
                                Les tarifs sont révisables chaque année au 1er janvier. Les prix sont libellés en euros et calculés hors taxes (TVA 20 %)
                                Les frais de livraison engagés par Secretatiat Live ! seront refacturés au client selon le tarif de La Poste en vigueur ou de l’entreprise de transport retenue.
                                Une majoration pourra être appliquée pour les urgences (moins de 24h/week-end et jours fériés) et sera mentionnée sur le devis.</p>
                        </div>
                        <div className='paiement'>
                            <h5>- Paiement</h5>
                            <p>Aucun escompte ne sera consenti en cas de paiement anticipé. Sauf stipulation contraire, les prix sont payables à Secretatiat Live ! à réception de la
                                facture par virement ou espèces UNIQUEMENT. Secretatiat Live ! ne débutera ses prestations de services qu’à réception :
                                <ul>
                                    <li>du devis signé précédé de la mention « bon pour accord »</li>
                                    <li>des conditions générales de vente signées</li>
                                    <li>d’un virement correspondant à l'accompte</li>
                                </ul>
                                Les forfaits de secrétariat sont payables en totalité à la signature du devis uniquement. Le paiement par chèque n’est pas accepté.
                            </p>
                        </div>
                        <div>
                            <h5>- Retard de paiement</h5>
                            <p>Pas d’escompte pour paiement anticipé. En cas de non-paiement le client s’engage à verser à titre d’indemnité une clause pénale d’un montant de 15 % sur le principal dû, conformément aux dispositions des articles 1 152 et 1 226 du Code Civil. Un intérêt contractuel de 10% sera appliqué sur les montants restants dus. Enfin, conformément à l’article L.441-6 du code du commerce une indemnité forfaitaire de 40€ sera due au titre des frais de recouvrement. </p>
                        </div>
                        <div>
                            <h5>- Clause résolutoire</h5>
                            <p>Si dans les quinze jours qui suivent la mise en œuvre de la clause « Retard de paiement », le client ne s’est pas acquitté des sommes restant dues, la vente sera résolue de plein droit et pourra ouvrir droit à l’allocation de dommages et intérêts au profit de Secretariat Live !.</p>
                        </div>
                    </div>
                    <li>Confidentialité</li>
                    <p>Chaque partie s’engage à conserver strictement confidentiels les données, informations et documents concernant l’autre partie, de quelque nature qu’ils soient dont elle pourrait avoir connaissance à l’occasion du présent contrat. Tout document confié par le client, inhérent à la mission, sera détruit s’il est de format numérique, ou rendu au client s’il est de format papier, sauf demande contraire écrite dudit client pour une éventuelle utilisation future. Aucune information n’est transmise ou vendue à des tiers, sauf pour une raison juridiquement contraignant Secretatiat Live !.</p>
                    <li>Cas de force majeure</li>
                    <p>La responsabilité de Secretatiat Live ! ne pourra être mise en œuvre si la non-exécution ou le retard dans l’exécution de l’une de ses obligations décrites dans les présentes conditions générales de vente découle d’un cas de force majeure. À ce titre, la force majeure s’entend de tout événement extérieur, imprévisible et irrésistible au sens de l’article 1148 du Code civil.
                        Ainsi, Secretatiat Live ! n’est pas responsable, notamment en cas d’accident, d’incendie, d’inondation, d’interruption de la fourniture d’énergie, de matières premières ou de matériels, ainsi qu’en cas de grèves totales ou partielles de toute nature entravant la bonne marche des activités de Secretatiat Live !, telles que les grèves de transports, des services postaux, des fournisseurs en énergie, des télécommunications, etc… La survenance d’un cas de force majeure a pour effet de suspendre l’exécution par Secretatiat Live ! des obligations contractuelles du devis, de la commande ou des présentes conditions générales de vente.</p>
                    <li>Collaboration</li>
                    <p>Le client remettra à Secretatiat Live ! toutes les informations nécessaires à la bonne réalisation des prestations dûment acceptées dans le devis.
                        En cas d’annulation d’une commande en cours de réalisation par le client, quelle qu’en soit la cause, ce dernier s’engage à régler la totalité de la prestation déjà effectuée. Cette annulation doit être confirmée par le client à Secretatiat Live ! par écrit.</p>
                    <li>Responsabilité</li>
                    <p>Secretatiat Live ! mettra en œuvre tous les moyens à sa disposition pour prendre soin et préserver les fichiers informatiques et autres documents qui lui seront confiés par le client pour la réalisation de sa prestation. Toutefois, compte tenu des risques des dommages encourus par ce type de support, il appartiendra au client de s’en prémunir par tous moyens à sa convenance.</p>
                    <li>Propriété intellectuelle</li>
                    <p>Sauf convention contraire dans les conditions particulières, tout document écrit en vue d’être utilisé par le client restera la propriété de Secretatiat Live ! jusqu’au paiement de la totalité du montant des factures relatives à la prestation de services.
                        Toutes les réalisations graphiques sont soumises au droit de son auteur et feront l’objet de cession de droits d’exploitation pour une durée limitée selon l’article L.131-3 al.1er du code de la propriété intellectuelle.</p>
                    <li>Informatique et libertés</li>
                    <p>En application de la loi n°78-17 du 6 janvier 1978, il est rappelé que les données nominatives qui sont demandées au client sont nécessaires au traitement de sa commande et sont destinées à un usage interne par Secretatiat Live !. Le client dispose donc d’un droit d’accès, de rectification ou d’opposition s’agissant des informations le concernant, dans les délais prévus par la loi et la réglementation en vigueur.</p>
                    <li>Loi et juridiction</li>
                    <p>Les présentes Conditions Générales de Vente et les relations contractuelles y afférentes sont régies par le droit français. Tout litige directement ou indirectement relatif aux relations contractuelles de Secretatiat Live ! avec le client est de la compétence exclusive du Tribunal de Commerce de (la ville).</p>
                </ol>
            </div>
        </div>
    );
};

export default RGPD;