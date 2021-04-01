<script>
    import Header from '../components/Header.svelte';
    import Aside from '../components/aside/Aside.svelte';
    import Main from '../components/main/Main.svelte';
</script>

<div class="wrapper">
	<Header />
	<Aside></Aside>
	<Main></Main>
</div>

<slot />

<style>
	.wrapper {
		min-height: 100vh;
		max-width: 1200px;
		margin: 0 auto;
		background: #fff;
		box-shadow: 0px 0px 10px 3px rgba(0,0,0,.3);

		display: grid;
		grid-template-areas: 
			"header header"
			"aside main";

		grid-template-rows: 60px 1fr;
		grid-template-columns: 300px 1fr;
	}

</style>