<script>
	import { page } from '$app/stores';
	import { PageService } from '../service/PageService';
	import Header from './Header.svelte';
	import SideMenu from './Side-Menu.svelte';
	import './styles.css';

	let pageService = new PageService();
	let pages = pageService.getAll();
	let currentPage = pages.find((p) => p.route === $page.url.pathname);
</script>

<div class="app">
	<Header />
	<SideMenu />
	<main>
		{#if $page.url.pathname === '/'}
			<slot />
		{:else}
			<DeckGridView page={currentPage} />
		{/if}
	</main>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
