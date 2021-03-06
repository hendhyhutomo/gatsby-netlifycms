const React = require("react") 
const {GlobalProvider} = require('./src/context/GlobalContext');

// Make Context Work throughout the Site.
exports.wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
)

exports.onRouteUpdate = ({ location }) => {
  // console.log('Route Updated', location.pathname);
  //   if (location.pathname.includes('blog')) {
  //     // document.body.classList.remove('preloading');
  //   }
};
exports.onClientEntry = () => {
//   console.log('First Time Site is loaded');
//   document.body.classList.add('preloading');
};
exports.onPreRouteUpdate = ({ location }) => {
//   console.log('Preroute Update', location.pathname);
//   document.body.classList.add('preloading');
};
