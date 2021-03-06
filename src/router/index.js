import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../components/About.vue'
import Home from '../components/Home.vue'
import BibliadeEstudo from '../components/BibliadeEstudo.vue'
import Contact from '../components/Contact.vue'
import Jspdfjs from '../components/Jspdfjs.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/bibliadeestudo/:book?/:chapter?/:verse?',
			component: BibliadeEstudo,
			props: true
		},
		{
			path: '/contact',
			component: Contact
		},
		{
			path: '/jspdfjs',
			component: Jspdfjs
		}
	]
})
