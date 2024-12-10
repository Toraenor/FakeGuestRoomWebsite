<script lang=ts>
    import { onMount } from 'svelte';
    import Logo from '$lib/images/logo.png';
    import HeaderMenu from "./HeaderMenu.svelte";
    let isMenuOpen: Boolean = false;

    function toggleMenu()
    {
        isMenuOpen = !isMenuOpen;
    }

    function handleClick(event: MouseEvent) 
    {
        if (isMenuOpen && event.target instanceof HTMLElement && !event.target.closest('.HeaderMenu'))
        {
            toggleMenu();
        }
    }

    onMount(() => {
        if (typeof window !== 'undefined') 
        {
            window.addEventListener('click', handleClick);
            
            return () => {
		    	window.removeEventListener('click', handleClick);
		    };
        }
    })
</script>

<navbar>
    <div class="navbar-wrapper">
        <input
				type="checkbox"
				id="burger-checkbox"
				class="burger-checkbox"
				on:click|stopPropagation={toggleMenu}
			/>
        <!--<label for="burger-checkbox" class="burger" aria-label="Menu">
            <div class="bar"/>
            <div class="bar"/>
            <div class="bar"/>
        </label>-->
        <img src={Logo} alt="logo" />
        <a href="/">Les Dames de Saint-Florent</a>
        <section>
            <a href="/">Acceuil</a>
            <a href="/">Les chambres</a>
            <a href="/">Contact/Réservation</a>
        </section>
    </div>
</navbar>

<HeaderMenu bind:isMenuOpen/>

<style>
    navbar {
        width: 100%;
        height: 80px;
        position : fixed;
        top : 0;
        z-index: 1000;
        background-color: white;
    }

    .navbar-wrapper {
        width: 90%;
        height: 100%;
        margin-left: 5%;
        display: flex;
        align-items: center;
    }

    img {
        height: 45px;
        max-height: 45px;
    }

    .navbar-wrapper a {
        margin-left: 5px;
        text-decoration: none;
        color: var(--mainColor);
        font-size: 21px;
        font-weight: 500;
    }

    .navbar-wrapper section {
        margin-left: 20px;
    }

    .navbar-wrapper section a {
        margin-left: 30px;
        text-decoration: none;
        color: var(--mainColor);
        font-size: 18px;
        font-weight: 400;
    }

    .burger
    {
        height: 20px;
        aspect-ratio: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        cursor: pointer;
    }
    .burger .bar {
		height: 2px;
		width: 100%;
		background-color: var(--mainColor);
    }
</style>