# CONSIGNES POUR LE TEST D'EMBAUCHE - DÉVELOPPEUR JAVASCRIPT/NODE.JS

## 📋 Informations générales

**Durée estimée :** 2-3 heures  
**Points total :** 100 points  
**Niveau :** Développeur JavaScript/Node.js intermédiaire  

## 🎯 Objectif du test

Ce test évalue vos compétences en JavaScript pour travailler sur notre application de gestion de commandes dentaires. Vous devrez compléter 6 fonctions qui représentent des cas d'usage réels de notre système.

## 📂 Fichiers fournis

- `test-embauche.js` : Le fichier de test à compléter (À RENDRE)
- `corrige-test-embauche.js` : Le corrigé (NE PAS CONSULTER pendant le test)
- `README.md` : Ce fichier de consignes
- `explications-detaillees.md` : Explications détaillées avec la correction

## 🔧 Configuration requise

- Node.js version 14 ou supérieure
- Un éditeur de code (VS Code recommandé)
- Connaissances en JavaScript ES6+

## 📝 Structure du test

Le test contient 6 exercices de difficulté croissante :

### Exercice 1 (15 points) - Calcul de montant
Implémenter une fonction qui calcule le montant total HT d'une commande en tenant compte des remises.

### Exercice 2 (20 points) - Création de commande
Créer une nouvelle commande avec génération automatique des IDs, références et dates.

### Exercice 3 (15 points) - Recherche par critères
Implémenter un système de filtrage des commandes selon différents critères.

### Exercice 4 (20 points) - Mise à jour de statut
Gérer la mise à jour des statuts d'articles et de commandes.

### Exercice 5 (15 points) - Génération de rapport
Créer un rapport statistique par type d'article.

### Exercice 6 (15 points) - Validation de données
Valider les données d'un client avec vérifications métier.

## 🚀 Comment commencer

1. **Ouvrez le fichier `test-embauche.js`**
2. **Lisez attentivement chaque exercice**
3. **Complétez les fonctions marquées `// TODO:`**
4. **Testez votre code avec la fonction `executerTests()`**

### Pour tester votre code :

```bash
# Décommentez la ligne à la fin du fichier test-embauche.js :
# executerTests();

# Puis exécutez :
node test-embauche.js
```

## ✅ Critères d'évaluation

### Code (70 points)
- **Fonctionnalité** : Le code fonctionne-t-il correctement ?
- **Logique** : L'approche est-elle cohérente ?
- **Gestion d'erreurs** : Les cas d'erreur sont-ils gérés ?
- **Efficacité** : Le code est-il optimisé ?

### Bonnes pratiques (30 points)
- **Lisibilité** : Le code est-il clair et bien structuré ?
- **Commentaires** : Le code est-il documenté ?
- **Conventions** : Respect des standards JavaScript ?
- **Sécurité** : Validation des entrées ?

## 📚 Ressources autorisées

- Documentation JavaScript (MDN)
- Documentation Node.js
- Recherches Google pour syntaxe
- **NON AUTORISÉ :** ChatGPT, Copilot, ou autres IA générative

## 🎯 Conseils pour réussir

### 1. Lisez d'abord tout le code
Comprenez la structure des données (Article, Client, Commande) avant de commencer.

### 2. Commencez par les exercices simples
L'exercice 1 est le plus simple, commencez par là pour prendre confiance.

### 3. Testez régulièrement
Utilisez `executerTests()` pour vérifier vos implémentations.

### 4. Gérez les cas d'erreur
```javascript
// Exemple de gestion d'erreur
if (!commande || !commande.articles) {
    return 0; // ou null, ou lever une exception
}
```

### 5. Utilisez les fonctions utilitaires
Des fonctions comme `ajouterJoursOuvrables()` sont déjà implémentées.

### 6. Respectez les formats
- Dates : utilisez les objets Date JavaScript
- Montants : arrondissez à 2 décimales
- IDs : respectez les formats fournis

## 🐛 Débogage

### Pour déboguer vos fonctions :
```javascript
console.log('Debug:', variable);
console.table(tableau); // Affichage tableau
```

### Erreurs courantes à éviter :
- Ne pas vérifier si les paramètres sont définis
- Oublier de retourner une valeur
- Modifier les objets d'origine au lieu de les copier
- Ne pas gérer les tableaux vides

## 📋 Format de rendu

### Fichier à rendre
- **Uniquement** le fichier `test-embauche.js` complété
- Nom du fichier : `test-embauche-[VOTRE_NOM].js`

### Commentaires requis
Ajoutez un commentaire en en-tête avec :
```javascript
/**
 * TEST D'EMBAUCHE COMPLÉTÉ
 * Candidat : [VOTRE NOM]
 * Date : [DATE]
 * Temps passé : [TEMPS]
 */
```

## ⚠️ Règles importantes

1. **Travail individuel** : Aucune collaboration autorisée
2. **Pas de plagiat** : Le code doit être original
3. **Temps limité** : Rendez dans les délais impartis
4. **Questions** : Contactez le recruteur si blocage majeur

## 🏆 Barème de notation

- **90-100 points** : Excellent niveau, toutes les fonctions parfaites
- **80-89 points** : Très bon niveau, quelques optimisations possibles
- **70-79 points** : Bon niveau, fonctionnalités principales OK
- **60-69 points** : Niveau correct, quelques erreurs
- **< 60 points** : Niveau insuffisant

## 📞 Contact

En cas de problème technique majeur ou de question sur les consignes, contactez :
- Email : [EMAIL_RECRUTEUR]
- Téléphone : [NUMERO_RECRUTEUR]

---

**Bonne chance ! 🍀**

*Ce test reflète les défis réels que vous rencontrerez dans notre équipe. Prenez votre temps et montrez-nous vos compétences !*
