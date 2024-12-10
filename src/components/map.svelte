<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import mapLibre from 'maplibre-gl';
	import 'maplibre-gl/dist/maplibre-gl.css';

	const { Map, NavigationControl, Marker } = mapLibre;
	let map: mapLibre.Map;
	let mapContainer: HTMLElement;

	const apiKey = '000000000000000'; //key generated in mapTiler cloud

	onMount(() => {
		const initialState = { lng: 139.753, lat: 35.6844, zoom: 8 };

		map = new Map({
			container: mapContainer,
			style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
			center: [initialState.lng, initialState.lat],
			zoom: initialState.zoom
		});
		map.addControl(new NavigationControl(), 'top-right');
		new Marker({ color: '#FF0000' }).setLngLat([initialState.lng, initialState.lat]).addTo(map);
	});

	onDestroy(() => {
		map.remove();
	});
</script>

<div class="map-wrapper">
	<a href="https://www.maptiler.com" class="watermark"
		><img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" /></a
	>
	<div class="map" bind:this={mapContainer}></div>
</div>

<style>
	.map-wrapper {
		position: relative; /* used so that the watermark can have an absolute positioning based on the map-wrapper's base position*/
		width: 40%;
		height: 80%;
		padding-top: 10%;
	}

	@media (max-width: 805px) {
		.map-wrapper {
			width: 100%;
			padding-top: 0%;
		}
	}

	.map {
		width: 100%;
		height: 100%;
	}

	.watermark {
		position: absolute;
		bottom: 0px;
		left: 5px;
		z-index: 999;
	}
</style>
