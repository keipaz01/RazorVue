import NotFound from './app.NotFound.js'
import Home from './app.HandlingUserInput.js'
import AttributeBindings from './app.AttributeBindings.js'
import ConditionalsAndLoops from './app.ConditionalsAndLoops.js'
import FormBindings from './app.FormBindings.js'
import SimpleComponent from './app.SimpleComponent.js'
import FetchingData from './app.FetchingData.js'
import GridWithSortAndFilter from './app.GridWithSortAndFilter.js'
import KeilaPrueba from './app.KeilaPrueba.js'

const routes = {
    '/': Home,
    '/AttributeBindings': AttributeBindings,
    '/ConditionalsAndLoops': ConditionalsAndLoops,
    '/FormBindings': FormBindings,
    '/SimpleComponent': SimpleComponent,
    '/FetchingData': FetchingData,
    '/GridWithSortAndFilter': GridWithSortAndFilter,
    '/KeilaPrueba': KeilaPrueba
}

export default {
    data() {
        return {
            currentPath: window.location.hash
        }
    },
    computed: {
        currentView() {
            let path = this.currentPath.slice(1) || '/';
            let current = routes[path];
            current = current || NotFound;
            return current;
        }
    },
    mounted() {
        window.addEventListener('hashchange', () => {
            this.currentPath = window.location.hash
        })
    },
    template: (`
<a href="#/">Home</a> |   
<a href="#/AttributeBindings">Attribute Bindings</a> |
<a href="#/ConditionalsAndLoops">Conditionals and Loops</a> |
<a href="#/FormBindings">Form Bindings</a> |
<a href="#/SimpleComponent">Simple Component</a> |
<a href="#/FetchingData">Fetching Data</a> |
<a href="#/GridWithSortAndFilter">Grid with Sort and Filter</a> |
<a href="#/KeilaPrueba">Keila Prueba</a> |
<a href="#/non-existent-path">Broken Link</a>
<hr/>
<component :is="currentView" />
`),

};