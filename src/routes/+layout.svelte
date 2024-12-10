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
