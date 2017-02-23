<template>
	<div id="bibliadeestudo">
		<div class="container">
			<div class="row">
				<div class="col-xs-3 col-sm-3 col-md-3">
					<div class="well"> {{ this.$store.state.verse.verseId }} </div>
				</div>
				<div class="col-xs-9 col-sm-9 col-md-9">
					<div class="panel panel-default">
						<div class="panel-body">
							{{ this.$store.state.verse.verseText }}
						</div>
						<div class="panel-footer"></div>
					</div>
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

</style>
