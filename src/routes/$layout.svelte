<script>
	import '../app.scss';
    import Aside from '../components/aside/Aside.svelte';
</script>

<div class="wrapper">
	<Aside>123</Aside>
	<main>
		<slot></slot>
	</main>
</div>

<style>
	.wrapper {
		min-height: 100vh;
		max-width: 1200px;
		margin: 0 auto;
		background: #fff;
		box-shadow: 0px 0px 10px 3px rgba(0,0,0,.3);

		display: grid;
		grid-template-areas: 
			"aside main";

		grid-template-rows: 1fr;
		grid-template-columns: 400px 1fr;
	}

</style>