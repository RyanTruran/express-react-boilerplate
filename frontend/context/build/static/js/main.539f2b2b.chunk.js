(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},44:function(t){t.exports=JSON.parse('{"name":"frontend","version":"0.1.0","private":true,"proxy":"http://localhost:5000/","dependencies":{"@testing-library/jest-dom":"^5.14.1","@testing-library/react":"^11.2.7","@testing-library/user-event":"^12.8.3","axios":"^0.21.1","bootstrap":"^5.0.1","react":"^17.0.2","react-bootstrap":"^1.6.1","react-dom":"^17.0.2","react-router-dom":"^5.2.0","react-scripts":"4.0.3","web-vitals":"^1.1.2"},"devDependencies":{"nodemon":"^2.0.12"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},75:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),s=n(14),c=n.n(s),i=(n(40),n(35)),o=(n(41),n(15)),l=n(78),d=n(79),b=(n(42),n(4)),j=n(44);function p(){return Object(b.jsxs)(l.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(b.jsx)(l.a.Brand,{className:"mx-2",children:j.name}),Object(b.jsx)(l.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(b.jsx)(l.a.Collapse,{children:Object(b.jsxs)(d.a,{className:"mr-auto",children:[Object(b.jsx)(o.b,{to:"/dashboard",className:"mx-3 NavLink",children:"Dashboard"}),Object(b.jsx)(o.b,{to:"/about",className:"mx-3 NavLink",children:"About"})]})})]})}var u=n(34),h=n.n(u);var x=function(){var t=Object(a.useState)(null),e=Object(i.a)(t,2),n=e[0],s=e[1];return Object(a.useEffect)((function(){h.a.get("/api/").then((function(t){console.log(t.data),s(t.data)})).catch((function(t){return console.error(t)}))}),[]),Object(b.jsxs)(r.a.Fragment,{children:[Object(b.jsx)("div",{className:"sticky-lg-top",children:Object(b.jsx)(p,{})}),Object(b.jsx)("div",{className:"App",children:n})]})},f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,80)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),a(t),r(t),s(t),c(t)}))};n(74);c.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(x,{})})}),document.getElementById("root")),f()}},[[75,1,2]]]);
//# sourceMappingURL=main.539f2b2b.chunk.js.map