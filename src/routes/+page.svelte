<!-- Main Page -->

<script>
	import { goto } from '$app/navigation';
	import Banner from '$lib/images/banner.jpg';
	import Review from '../components/review.svelte';
	import Map from '../components/map.svelte';
</script>

<figure><img src={Banner} alt="banner" /></figure>
<div class="main-wrapper">
	<div class="reservation">
		<h4>Les Dames de Saint-Enzo</h4>
		<p>
			Chambres d'Hôtes et Gîtes à Saint-Enzo <br /> 12322 Rue du village, Saint-Enzo
		</p>
		<div class="button-wrapper">
			<button on:click={() => goto('reservation')}>Réserver</button>
		</div>
	</div>
	<!-- <Map /> -->
</div>
<div class="review-separation">
	<pre>  Avis  </pre>
</div>
<section>
	<Review
		userRating={4}
		name="Lucas"
		reviewText="Très bonne maison d'hôte!"
		date={new Date(2023, 1, 12)}
	/>
	<Review
		userRating={1}
		name="Enzo"
		reviewText="Horrible séjour!"
		date={new Date()}
	/>
	<Review userRating={5} name="Anonyme" reviewText="" date={new Date(1981, 0, 1)} />
</section>

<style>
	/* banner css */

	figure {
		margin-top: 5%;
		max-height: 440px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	figure img {
		width: 100%;
	}

	/* reservation and Map css */

	.main-wrapper {
		display: flex;
		justify-content: center;
		flex-wrap: wrap; /* permits the items to go multi-line if there is not enough space*/
		width: 100%;
		height: 50vh;
		overflow: hidden;
	}

	.reservation {
		padding-top: 10%;
		min-width: 60%;
		max-width: 100%;
		width: auto; /* uses auto width for devices less wide than 60% */
	}

	.reservation h4,
	p {
		text-align: center;
		color: var(--mainColor);
	}

	.button-wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 5%;
		width: 100%;
	}

	button {
		width: 25%;
		background-color: var(--mainColor);
		border: none;
		color: white;
		padding: 1vh 0.3vw;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 1.6vw;
		border-radius: 0.6vw;
		cursor: pointer;
		transition-duration: 0.4s;
	}
	button:hover {
		background-color: #69a148;
	}

	/* reviews css */

	.review-separation {
		padding-top: 10px;
		width: 100%;
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.review-separation pre {
		font-weight: 600;
		text-decoration: overline;
		text-decoration-thickness: 2px;
		font-size: large;
	}

	section {
		display: grid;
		gap: 100px;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		padding-bottom: 2%;
	}
</style>
