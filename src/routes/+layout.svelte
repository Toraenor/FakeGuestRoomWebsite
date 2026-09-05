<!-- Default pages layout -->

<script>
	import Footer from '../components/footer.svelte';
	import '../app.css';
	import Header from '../components/Header.svelte';
</script>

<Header />
<main class="container">
	<slot />
</main>
<Footer />

<style>
	:global(html, body) {
		height: 100%;
		margin: 0;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100dvh;
	}

	main {
		flex: 1;
	}
</style>