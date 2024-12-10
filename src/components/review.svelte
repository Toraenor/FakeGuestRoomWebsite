<script lang="ts">
	import { DateDiffAsText } from '../Utils';

	export let userRating: number = 2;
	export let name: string = 'Jean-Yves de la Villardière';
	export let reviewText: string =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed leo massa. Nunc maximus finibus tempus. Phasellus libero augue, suscipit ut enim eget, varius eleifend lacus. Aenean sed nunc varius, ultrices quam eget, dignissim nisl. Suspendisse ultrices rutrum diam eget tincidunt. Mauris a ultricies est. Aliquam ac auctor quam, ut aliquet mauris. Proin convallis tellus ac lorem placerat, ut euismod magna imperdiet.";
	export let date: Date = new Date(2024, 0, 21);

	const MAX_RATING: number = 5;
	const rating: number = Math.min(Math.abs(userRating), MAX_RATING);
	const todayDate = new Date();
	const timeDiff: string = DateDiffAsText(todayDate, date);
	const dateISO = date.toISOString();
</script>

<article>
	<div class="text-title">{name}</div>
	<div class="text-star-wrapper">
		{#each { length: rating } as _}
			<i class="material-icons star">star</i>
		{/each}
		{#if rating < MAX_RATING}
			{#each { length: MAX_RATING - rating } as _}
				<i class="material-icons star">star_outline</i>
			{/each}
		{/if}
		<time datetime={dateISO}>{timeDiff}</time>
	</div>
	<div class="text-review-wrapper">{reviewText}</div>
</article>

<style>
	article {
		box-shadow: 0px 0px 4px #919191;
		border-radius: 5px;
		width: 250px;
		height: 300px;
		overflow: hidden;
		margin: auto; /* will automatically center the element in the grid column using margins*/
	}
	.text-star-wrapper {
		padding-left: 15px;
		padding-top: 5px;
	}
	.star {
		color: #ebd301;
		vertical-align: middle;
	}
	.text-title {
		padding-top: 15px;
		padding-left: 15px;
		font-size: large;
		font-weight: 600;
	}
	.text-review-wrapper {
		width: 90%;
		padding-top: 5px;
		padding-left: 15px;
		font-weight: 500;
		font-size: medium;
	}
	time {
		color: #181a1b9c;
		font-weight: 500;
		vertical-align: middle;
	}
</style>
