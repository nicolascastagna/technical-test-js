/**
 * TEST D'EMBAUCHE - DÉVELOPPEUR JAVASCRIPT/NODE.JS
 * Système de Gestion de Commandes Dentaires
 *
 * Temps estimé : 2-3 heures
 * Points : 100 points au total
 *
 * CONSIGNES :
 * - Complétez les fonctions manquantes
 * - Respectez les structures de données fournies
 * - Utilisez les bonnes pratiques JavaScript
 * - Gérez les cas d'erreur
 * - Commentez votre code
 */

// ===== STRUCTURES DE DONNÉES =====

class Article {
    constructor() {
        this._id = null;
        this.Lot = "";
        this.Libelle = "";
        this.Type = 0; // 0: Amovible, 1: Dento, 2: Implanto, 3: Autre
        this.Material = 0; // 0: Titane, 1: Chrome Cobalt, 2: Zircone, 3: Autre
        this.Statut = 10; // 10: Reception_cde, 20: Design, 30: Validation_design, etc.
        this.PU_HT = 0;
        this.Qte = 1;
        this.Remise = 0;
        this.Commentaire = "";
        this.Connectics = [];
        this.Dents = [];
    }
}

class Client {
    constructor() {
        this._id = "";
        this.Nom = "";
        this.Prenom = "";
        this.Societe = "";
        this.Email = "";
        this.Telephone = "";
        this.Adresse = {
            Adr1: "",
            Adr2: "",
            CP: "",
            Ville: "",
            Pays: "France",
        };
    }
}

class Commande {
    constructor() {
        this._id = 0;
        this.Reference = "";
        this.Date = new Date();
        this.Date_livraison = null;
        this.Date_expedition = null;
        this.Ref_client = "";
        this.CommentaireClient = "";
        this.client = new Client();
        this.articles = [];
        this.Montant_HT = 0;
        this.Statut = "active"; // active, annule, livre
    }
}

// ===== DONNÉES DE TEST =====
let commandes = [];
let clients = [];
let nextCommandeId = 1001;

// Initialisation des données de test
function initTestData() {
    // Clients de test
    clients = [
        {
            _id: "CLI001",
            Nom: "Martin",
            Prenom: "Jean",
            Societe: "Cabinet Dentaire Martin",
            Email: "j.martin@cabinet-martin.fr",
            Telephone: "0123456789",
            Adresse: {
                Adr1: "123 Rue de la Santé",
                Adr2: "",
                CP: "75014",
                Ville: "Paris",
                Pays: "France",
            },
        },
        {
            _id: "CLI002",
            Nom: "Dubois",
            Prenom: "Marie",
            Societe: "Clinique Dubois",
            Email: "m.dubois@clinique-dubois.fr",
            Telephone: "0987654321",
            Adresse: {
                Adr1: "456 Avenue des Dents",
                Adr2: "Étage 2",
                CP: "69000",
                Ville: "Lyon",
                Pays: "France",
            },
        },
    ];

    // Commandes de test
    commandes = [
        {
            _id: 1001,
            Reference: "SPW-1001",
            Date: new Date("2025-01-15"),
            Date_livraison: new Date("2025-01-25"),
            Date_expedition: new Date("2025-01-24"),
            Ref_client: "PAT001",
            CommentaireClient: "Urgence - Patient VIP",
            client: clients[0],
            articles: [
                {
                    _id: "CIC1",
                    Lot: "CIC11001_1",
                    Libelle: "Couronne Implanto Céramo",
                    Type: 2,
                    Material: 2,
                    Statut: 20,
                    PU_HT: 280,
                    Qte: 1,
                    Remise: 0,
                    Commentaire: "Dent 16",
                    Connectics: [],
                    Dents: [16],
                },
            ],
            Montant_HT: 280,
            Statut: "active",
        },
    ];
}

// ===== QUESTIONS/EXERCICES =====

/**
 * EXERCICE 1 (15 points)
 * Fonction pour calculer le montant total HT d'une commande
 * Prend en compte : PU_HT * Qte - (PU_HT * Qte * Remise / 100)
 */
function calculerMontantCommande(commande) {
    // TODO: Complétez cette fonction
    // Parcourez tous les articles de la commande
    // Calculez le montant pour chaque article en tenant compte de la remise
    // Retournez le montant total HT

    if (!commande?.articles?.length) {
        return 0;
    }

    let totalHt = 0;

    for (const article of commande.articles) {
        const montantHt = article?.PU_HT * article?.Qte;
        const remise = montantHt * (article?.Remise / 100);

        totalHt += montantHt - remise;
    }

    return totalHt;
}

/**
 * EXERCICE 2 (20 points)
 * Fonction pour créer une nouvelle commande
 * Doit générer automatiquement :
 * - L'ID de commande (nextCommandeId++)
 * - La référence (format: SPW-{id})
 * - La date de livraison (7 jours ouvrables après la date de commande)
 * - La date d'expédition (1 jour ouvrable avant la livraison)
 */
function creerNouvelleCommande(clientId, refClient, commentaire, articlesData) {
    // TODO: Complétez cette fonction
    // 1. Vérifiez que le client existe
    // 2. Créez une nouvelle instance de Commande
    // 3. Remplissez les champs automatiquement
    // 4. Créez les articles à partir d'articlesData
    // 5. Calculez le montant total
    // 6. Ajoutez la commande au tableau commandes
    // 7. Retournez la commande créée ou null en cas d'erreur

    // Validation des params
    if (!clientId) {
        return null;
    }

    if (!articlesData || articlesData.length === 0) {
        return null;
    }

    const client = clients.find((c) => c._id === clientId);
    if (!client) {
        return null;
    }

    const nouvelleCommande = new Commande();

    // Génération automatisé des champs
    nouvelleCommande._id = nextCommandeId++;
    nouvelleCommande.Reference = `SPW-${nouvelleCommande._id}`;
    nouvelleCommande.Date = new Date();
    nouvelleCommande.Ref_client = refClient || "";
    nouvelleCommande.CommentaireClient = commentaire || "";
    nouvelleCommande.client = client;

    nouvelleCommande.Date_livraison = ajouterJoursOuvrables(
        nouvelleCommande.Date,
        7
    );

    // La fonction ajouterJoursOuvrables ne gère pas les nombres négatifs
    // Calcul manuel de la date d'expédition (1 jour ouvrable avant livraison)
    const dateExpedition = new Date(nouvelleCommande.Date_livraison);

    let joursARetirer = 1;
    while (joursARetirer > 0) {
        dateExpedition.setDate(dateExpedition.getDate() - 1);
        // Exclure samedi (6) et dimanche (0)
        if (dateExpedition.getDay() !== 0 && dateExpedition.getDay() !== 6) {
            joursARetirer--;
        }
    }
    nouvelleCommande.Date_expedition = dateExpedition;

    // Création des articles
    nouvelleCommande.articles = articlesData?.map((articleData) => {
        const article = new Article();

        article._id = articleData._id ?? "";
        article.Lot = articleData.Lot ?? articleData._id ?? "";
        article.Libelle = articleData.Libelle ?? "";
        article.Type = articleData.Type ?? 0;
        article.Material = articleData.Material ?? 0;
        article.Statut = articleData.Statut ?? 10;
        article.PU_HT = articleData.PU_HT ?? 0;
        article.Qte = articleData.Qte ?? 1;
        article.Remise = articleData.Remise ?? 0;
        article.Commentaire = articleData.Commentaire ?? "";
        article.Connectics = articleData.Connectics ?? [];
        article.Dents = articleData.Dents ?? [];

        return article;
    });

    nouvelleCommande.Montant_HT = calculerMontantCommande(nouvelleCommande);
    commandes.push(nouvelleCommande);

    return nouvelleCommande;
}

/**
 * EXERCICE 3 (15 points)
 * Fonction pour rechercher des commandes par critères
 * Critères possibles : clientId, statut, dateDebut, dateFin, montantMin, montantMax
 */
function rechercherCommandes(criteres) {
    // TODO: Complétez cette fonction
    // Filtrez le tableau commandes selon les critères fournis
    // Gérez les cas où certains critères sont undefined/null
    // Retournez un tableau des commandes correspondantes

    if (!criteres || typeof criteres !== "object") {
        return [...commandes];
    }

    // Destructuration des critères
    const { clientId, statut, dateDebut, dateFin, montantMin, montantMax } =
        criteres;

    return commandes.filter((commande) => {
        if (clientId && commande.client?._id !== clientId) {
            return false;
        }
        if (statut && commande.Statut !== statut) {
            return false;
        }
        if (dateDebut && commande.Date < new Date(dateDebut)) {
            return false;
        }
        if (dateFin && commande.Date > new Date(dateFin)) {
            return false;
        }
        if (montantMin != null && commande.Montant_HT < montantMin) {
            return false;
        }
        if (montantMax != null && commande.Montant_HT > montantMax) {
            return false;
        }

        return true;
    });
}

/**
 * EXERCICE 4 (20 points)
 * Fonction pour mettre à jour le statut d'un article dans une commande
 * Statuts possibles : 10: Reception_cde, 20: Design, 30: Validation_design,
 *                    40: Production, 50: Controle, 60: Expedie, 70: Livre, 500: Annule
 */
function mettreAJourStatutArticle(commandeId, lotArticle, nouveauStatut) {
    // TODO: Complétez cette fonction
    // 1. Trouvez la commande par son ID
    // 2. Trouvez l'article par son lot
    // 3. Mettez à jour le statut
    // 4. Vérifiez si tous les articles sont livrés pour marquer la commande comme livrée
    // 5. Retournez true si succès, false sinon

    if (!commandeId || !lotArticle || !nouveauStatut) {
        return false;
    }

    if (obtenirNomStatut(nouveauStatut) === "Inconnu") {
        return false;
    }

    const commande = commandes.find((cmd) => cmd._id === commandeId);
    if (!commande) {
        return false;
    }

    const articleIndex = commande.articles?.findIndex(
        (art) => art.Lot === lotArticle
    );
    if (articleIndex === -1) {
        return false;
    }

    commande.articles[articleIndex].Statut = nouveauStatut;

    const ArticlesLivres = commande.articles.every(
        (article) => article.Statut === 70
    );
    if (ArticlesLivres) {
        commande.Statut = "livre";
    }

    return true;
}

/**
 * EXERCICE 5 (15 points)
 * Fonction pour générer un rapport de commandes par type d'article
 * Doit retourner un objet avec le nombre de commandes par type
 */
function genererRapportParType() {
    // TODO: Complétez cette fonction
    // Parcourez toutes les commandes et leurs articles
    // Comptez les articles par type (0: Amovible, 1: Dento, 2: Implanto, 3: Autre)
    // Retournez un objet : { "Amovible": count, "Dento": count, "Implanto": count, "Autre": count }
}

/**
 * EXERCICE 6 (15 points)
 * Fonction pour valider les données d'un client
 * Doit vérifier : email valide, téléphone valide, adresse complète
 */
function validerDonneesClient(client) {
    // TODO: Complétez cette fonction
    // Vérifiez que tous les champs obligatoires sont remplis
    // Validez le format de l'email
    // Validez le format du téléphone français
    // Vérifiez que l'adresse est complète (Adr1, CP, Ville)
    // Retournez un objet : { valide: boolean, erreurs: string[] }
}

// ===== FONCTIONS UTILITAIRES (À NE PAS MODIFIER) =====

function ajouterJoursOuvrables(date, jours) {
    const result = new Date(date);
    let joursAjoutes = 0;

    while (joursAjoutes < jours) {
        result.setDate(result.getDate() + 1);
        // Exclure samedi (6) et dimanche (0)
        if (result.getDay() !== 0 && result.getDay() !== 6) {
            joursAjoutes++;
        }
    }

    return result;
}

function obtenirNomType(typeNumber) {
    const types = ["Amovible", "Dento", "Implanto", "Autre"];
    return types[typeNumber] || "Inconnu";
}

function obtenirNomStatut(statutNumber) {
    const statuts = {
        10: "Reception_cde",
        20: "Design",
        30: "Validation_design",
        40: "Production",
        50: "Controle",
        60: "Expedie",
        70: "Livre",
        500: "Annule",
    };
    return statuts[statutNumber] || "Inconnu";
}

// ===== TESTS D'EXÉCUTION =====

function executerTests() {
    console.log("=== DÉBUT DES TESTS ===\n");

    initTestData();

    // Test Exercice 1
    console.log("Test Exercice 1 - Calcul montant commande:");
    const montant = calculerMontantCommande(commandes[0]);
    console.log(`Montant calculé: ${montant} €`);
    console.log("Résultat attendu: 280 €\n");

    // Test Exercice 2
    console.log("Test Exercice 2 - Création nouvelle commande:");
    const nouvelleCommande = creerNouvelleCommande(
        "CLI002",
        "PAT002",
        "Test commande",
        [
            {
                _id: "CIC2",
                Libelle: "Couronne Implanto Céramo",
                Type: 2,
                Material: 2,
                PU_HT: 320,
                Dents: [26],
            },
        ]
    );
    console.log(
        `Commande créée: ${
            nouvelleCommande ? nouvelleCommande.Reference : "ERREUR"
        }\n`
    );

    // Test Exercice 3
    console.log("Test Exercice 3 - Recherche commandes:");
    const resultats = rechercherCommandes({
        clientId: "CLI001",
        statut: "active",
    });
    console.log(`Commandes trouvées: ${resultats.length}\n`);

    // Test Exercice 4
    console.log("Test Exercice 4 - Mise à jour statut article:");
    const successUpdate = mettreAJourStatutArticle(1001, "CIC11001_1", 30);
    console.log(`Mise à jour réussie: ${successUpdate}\n`);

    // Test Exercice 5
    console.log("Test Exercice 5 - Rapport par type:");
    const rapport = genererRapportParType();
    console.log("Rapport généré:", rapport, "\n");

    // Test Exercice 6
    console.log("Test Exercice 6 - Validation client:");
    const validation = validerDonneesClient(clients[0]);
    console.log("Validation:", validation);

    console.log("\n=== FIN DES TESTS ===");
}

// Décommentez la ligne suivante pour exécuter les tests
executerTests();

module.exports = {
    calculerMontantCommande,
    creerNouvelleCommande,
    rechercherCommandes,
    mettreAJourStatutArticle,
    genererRapportParType,
    validerDonneesClient,
    executerTests,
    commandes,
    clients,
};
