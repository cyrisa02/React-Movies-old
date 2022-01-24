J'ai dû installer avec yarn node_modules car dossiers public et src n'apparaissent pas
Sur VSCODE installer les extensions
simple React snippets
Reactjs code snippets
Mithril Emmet
+ dans le settings.json rajouter:

"emmet.includeLanguages": {"javascript":"javascriptreact"},
"emmet.triggerExpansionsonOnTab":true
Pour y aller
Roue dentée / paramètre / settings.json  aller sur modifief settings.json

attention au virgule
J'ai installé sass et axios avec npm
J'ai installé sur Mozilla "react dev tools pluggin"

Dans Src, créer deux dossiers pages et components
dans dossier pages créer deux fichiers Home.js et UserList.js
rsc 
On va réaliser la navigation dans App.js
On réalise le Navlink (ancrage)
=> dans components création du Header
Création d'un form de recherche
API utilisé TMDB- paramètres / API /
https://api.themoviedb.org/3/movie/550?api_key=82aca073d5a89313cc80f308fb5ec855
useEffect: qd le composant est monté on peut faire fonctionner ce qui est à l'intérieur de useEffect une seule fois car 
,[]  tu ne le fais pas refonctionner pouisque les crochets sont vides [ ] est un callback 53'
il faut bien paramétrer le consol.log dans le use effect =  rechercher ce qu'on récupère en json
donc on a Object / data / results Array de 20 voir photo dans dossier img
d'où dans le hook Useeffect res donne res.data.results, on est à l'entrée du tableau
le tableau va être mapé

une fois que c'est fait avec le consol log, on va récupérer ce tableau dans une variable moviesData State en utilisant des hook useState
on remplace le consol log par le setMoviesData est le tour est jouer! 57'
clé from scratch:
ed82f4c18f2964e75117c2dc65e2161d

ma clé: 82aca073d5a89313cc80f308fb5ec855

création de props sur card(enfant) et form (parent)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
