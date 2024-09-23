# <p align="center">Argent Bank</p>

<p align="center">
  <img src="https://i.imgur.com/IvUXsU6m.png" alt="Image">
</p>

## Application Bancaire Web avec authentification des utilisateurs

[![React](https://img.shields.io/badge/React-v18.2.0-brightgreen)](https://fr.reactjs.org/)
[![React router](https://img.shields.io/badge/React%20Router-v6.22.3-orange)](https://v5.reactrouter.com/web/guides/quick-start)
[![React Redux](https://img.shields.io/badge/React%20Redux-v9.1.0-critical)](https://react-redux.js.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-v2.2.3-blueviolet)](https://redux-toolkit.js.org/)
[![Axios](https://img.shields.io/badge/Axios-v0.19.2-ff69b4)](https://axios-http.com/docs/intro)

[![Styled Components](https://img.shields.io/badge/styled%20components-v6.1.8-pink)](https://styled-components.com/)

## 📝 Description

Ce projet vise à développer une application web complète et responsive avec React afin de gérer l'authentification des utilisateurs dans un environnement bancaire. Nous utilisons comme base le [HTML statique et le CSS](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/designs) fournis pour les pages d'accueil, de connexion et de profil.

En outre, une [documentation Swagger](https://app.swaggerhub.com/apis/JULIENGILBERTDEV/ArgentBank/1.0.1) décrivant les API proposées pour les transactions est disponible. Cela permettra aux utilisateurs de :

- Visualiser toutes leurs transactions du mois en cours, regroupées par compte ;
- Consulter les détails d'une transaction dans une vue dédiée ;
- Ajouter, modifier ou supprimer des informations relatives à une transaction.

Cette documentation Swagger fournit des fonctionnalités supplémentaires au développeur pour gérer efficacement les transactions bancaires des clients de l'application.

## ⚙️ Pré-requis

### Node et npm

1. Pour le backend :

   - Node version : v12.22.12
   - npm version : 6.14.16

2. Pour le frontend :
   - Node version : v20.12.1
   - npm version : 10.5.0

## 🚀 Guide d’installation

### MongoDB Community Server

Assure la communication entre le backend et le frontend

Dans le terminal, s’assurer que la version de node est la suivante : **v12.22.12**

- Vérifier que le service est démarré : `brew services list`

![](https://i.imgur.com/axNPMTkl.png)

Si le service doit etre demarrer : `brew services start mongodb-community`

Si la version est differente, utiliser l’application [nvm](https://github.com/nvm-sh/nvm) pour basculer sur la bonne version en suivant ces étapes :

1. Verifier la liste des versions : `nvm ls-remote node`
2. Copier la version desirée dans la liste (doit etre installer préalablement)
3. Basculer sur la version : nvm use v12.22.12

### BackEnd

Adresse du repo : https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API

```
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

### FrontEnd

```
npm run dev
```

## 🛠️ Decisions Technologiques

- [React Vite Toolkit](https://vitejs.dev/)
- [React Router Dom](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [Redux Toolkit et Redux Thunk](https://redux-toolkit.js.org/)
- [ESLint](https://eslint.org/)

## 🎯 Objectif de la Phase 1 : Authentification des Utilisateurs

- Création de l'application web avec React et Redux pour gérer le state global.
- Mise en place des fonctionnalités suivantes (voir les détails dans les [modèles d'Issues GitHub)](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API/tree/master/.github/ISSUE_TEMPLATE) :
  - Affichage de la page d'accueil.
  - Implémentation du système de connexion utilisateur.
  - Gestion de la déconnexion utilisateur.
  - Affichage et modification du profil utilisateur après une connexion réussie.

## 🎯 Objectif de la Phase 2 : Transactions

Pour la phase 2, nous nous concentrerons sur l'implémentation des fonctionnalités liées aux transactions dans l'application bancaire web. Voici les objectifs spécifiques pour cette phase :

- **Visualisation des Transactions :**
  Permettre aux utilisateurs de visualiser toutes leurs transactions pour le mois en cours, regroupées par compte.
- **Détails des Transactions :**
  Offrir une vue détaillée pour consulter les informations spécifiques sur une transaction.
- **Gestion des Transactions :**
  Autoriser les utilisateurs à ajouter, modifier ou supprimer des informations sur une transaction.

### 📚 Documentation Swagger

Toute la documentation Swagger nécessaire pour cette phase est disponible à l'adresse suivante : [Document Swagger pour les Transactions.](https://app.swaggerhub.com/apis/JULIENGILBERTDEV/ArgentBank/1.0.1)

## 🤝 Contribution

Les contributions sont les bienvenues ! Suivez nos modèles d'[Issues GitHub](https://github.com/juliengDev/ArgentBank/issues) pour participer à l'avancement du projet.

## 👤 Auteur

Ce projet a été créé par [Julien Gilbert](https://github.com/juliengDev).
