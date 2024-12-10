<script>
	import Banner from '$lib/images/banner.jpg';
</script>

<div class="main-wrapper">
	<div class="photos-wrapper">
		<div class="side-photos-wrapper">
			<div class="side-image">
				<img src={Banner} alt="banner" />
			</div>
			<div class="side-image">
				<img src={Banner} alt="banner" />
			</div>
		</div>
		<div class="main-image">
			<img src={Banner} alt="banner" />
		</div>
	</div>
	<div class="description">
		<div class="description-title">
			<h5>P3 Chambre d'hôtes</h5>
			<h5 class="price">750$</h5>
		</div>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed leo massa. Nunc maximus finibus tempus. 
			Phasellus libero augue, suscipit ut enim eget, varius eleifend lacus. Aenean sed nunc varius, 
			ultrices quam eget, dignissim nisl. Suspendisse ultrices rutrum diam eget tincidunt. Mauris a ultricies est. 
			Aliquam ac auctor quam, ut aliquet mauris. Proin convallis tellus ac lorem placerat, ut euismod magna imperdiet.
		</p>
	</div>
	<div class="stay-wrapper">
		<div class="stay">Séjour</div>
	</div>
</div>

<style>
	/* séjour */
	.stay {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}
	.stay-wrapper {
		box-shadow: 0px 0px 4px #919191;
		border-radius: 5px;
		width: 15%;
		height: 400px;
	}
	.main-wrapper {
		display: flex;
		justify-content: left;
		width: 100%;
		padding-bottom: 20.2%;
		padding-top: 10%;
	}
	.description {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		width: 35%;
		margin: auto;
	}
	.description-title {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.price {
		padding-left: 10%;
	}
	p {
		width: 70%;
	}

	.photos-wrapper {
		width: 45%;
		height: 15.45vw;
		display: flex;
		gap: 1%;
		clip-path: inset(0 round 10px);
		margin: auto;
	}
	.side-photos-wrapper {
		display: flex;
		justify-content: left;
		flex-wrap: wrap;
		gap: 2%;
		width: auto;
		height: 100%;
	}

	.main-image {
		width: auto;
		height: 100%;
	}
	.main-image img {
		height: 100%;
	}

	.side-image {
		width: 100%;
		height: 50%;
	}
	.side-image img {
		height: 100%;
		width: 1fr;
	}

	@media (max-width: 899px) {
		.photos-wrapper {
			width: 100%;
			justify-content: center;
			align-items: center;
		}
		.side-image img {
			width: 100%;
		}
		.description {
			width: 100%;
		}
		.stay-wrapper {
			width: 100%;
			height: 200px;
		}
		.main-wrapper {
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
		}
		p {
			text-align: center;
		}
	}
</style>
