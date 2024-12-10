<script lang=ts>
    export let isMenuOpen: Boolean = false;
</script>

<div class="HeaderMenu" class:menu-open={isMenuOpen}>
    <div class="sidebar-content">
        <h2>Menu</h2>
    </div>
</div>

<style>
    .HeaderMenu
    {
        transition: transform 0.3s ease;
        transform: translateX(-100%);
        position: fixed;
        top: 0;
        left: 0;
        height: 100%;
        width: 250px;
        background-color: var(--mainColor);
        z-index: 1000;
    }

    .menu-open
    {
        transform: translateX(0);
    }

    .sidebar-content 
    {
        text-align: center;
    }

    .sidebar-content h2 
    {
        color: white;
        margin-bottom: 20px;
    }
</style>