<template>
	<div id="bibliadeestudo">
		<div class="container">
			<div class="row">
				<div class="col-xs-3 col-sm-3 col-md-3">
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9">
					<dl class="dl-horizontal">
  					<dt>{{ this.$store.state.verse.verseId }}</dt>
  					<dd>{{ this.$store.state.verse.verseText }}</dd>
					</dl>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import 'script-loader!../../static/bootstrap/js/bootstrap.min.js'
	import loader from '../api/verse-loader'

	export default {
		name: 'bibliadeestudo',
		data() {
			return {
				msg: ''
			}
		},
		methods: {
			getBcv: loader.getBcv
		},
		watch: {
			'$route'(to, from) {
				this.getBcv(this.$route.params.book, this.$route.params.chapter, this.$route.params.verse, this.$store)
			}
		}
	}
</script>

<style>
	@import url('../../static/bootstrap/css/bootstrap.min.css');
	@font-face {
  	font-family: 'LibreBaskerville';
  	src: url('../../static/LibreBaskerville-Regular.ttf');
	}
	.dl-horizontal { 
		font-family: 'LibreBaskerville'; 
	}
</style>
