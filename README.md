This project was forked to provide a working project for Nosto's frontend assignment.

Changelog:
- *Remove* breaking usage of `Vue.mixin(mixins)`
---

# Nosto Front-End developer assignment

Here you will find mock data and Design System for the assignment.

## Nosto Design System

**Nosto Design System** is built on top of a tool called “Vue Design System” which is an open source tool for building UI Design Systems with [Vue.js](https://vuejs.org). It provides you and your team a set of organized tools, patterns & practices that work as the foundation for your application development.

### Design System Installation

* Clone repository to your local folder
* Traverse to folder and run `npm install` to install the dependencies. In case you will encounter End of Life (EOL), termination of Long-term support (LTS), don't mind those -- the current main dependencies are updated but their subdependencies are often not up-to-date. 
* Once the dependencies are installed, run `npm start` to start Design System locally. Then, open `http://localhost:6060` to access Design System UI.
* In case of issues, you may check whether that has been solved in [Vue DS](https://github.com/viljamis/vue-design-system/) or [Vue Styleguidist](https://github.com/vue-styleguidist/vue-styleguidist).
* Recommended Node version is 12.x and anything towards the newer versions.

### Design System usage

You can find the minified version of the Nosto Design System "special edition" made for this assignment in `dist/system/`

* Only necessary files are `system.min.css` and `system.min.js` which can be added as inline to project's `index.html`:

```
<head>
    <link rel="stylesheet" href="<<your_path_to_system.min.css>>" />
    ...
</head>
<body>
    ...
    <script src="<<your_path_to_system.min.js>>" />
</body>
```

#### Injecting Design System to your Vue 2.x app

In your `main.js` add:

```
import DesignSystem from "system"
```

and to use it globally

```
Vue.use(DesignSystem)
```

This enables now to use the components from the Design System:

```
<grid columns="1fr 1fr">
    <panel heading="My nice title">
        <action-button variation="plain" @click="clickHandler"/>
    </panel>
    <panel heading="My other title">
        <action-button variation="primary" @click="clickHandler"/>
    </panel>
</grid>
```
### Mock data

In the `mock-data` folder you will find the necessary mock data related to the assignment that has been given to you.

* `site-metrics-kpis-feb-2021.json`and `site-metrics-kpis-march-2021.json` contains the data for KPI boxes. `averageSessionDuration` is time in seconds.
* `visits-feb-2021.json` and `visits-march-2021.json` contains visit data for chart.
* `account-activity-data.json` contains activity feed data.
