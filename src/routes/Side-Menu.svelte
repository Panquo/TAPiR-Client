<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
	import { PageService } from '../service/PageService';
	import Icon from './Icon.svelte';
	import Home from 'carbon-icons-svelte/lib/Home.svelte';

	let pageService = new PageService();
	/**
	 * @type {any[]}
	 */
	let pages = pageService.getAll();
</script>

<side-menu>
	<home-div>
		<icon>
			<Home />
		</icon>
	</home-div>
	<ul>
		{#each pages as p}
			<li aria-current={$page.url.pathname === p.route ? 'page' : undefined}>
				{#if p.icon}
					<Icon iconName={p.icon} />
				{:else}
					<img src={p.img} alt="My Happy SVG" />
				{/if}
			</li>
		{/each}
	</ul>
</side-menu>

<style>
	home-div {
		padding-top: 15px;
		display: flex;
		justify-content: center;
		margin-bottom: 20px;
		background-color: red;
		border-radius: 30px 0 0 0;
	}
	side-menu {
		position: fixed;
		right: 0;
		top: 100px;
		bottom: 100px;
		width: 60px;
		background-color: #f1f1f1;
		border-radius: 30px 0 0 30px;
	}

	img {
		width: 30px;
		height: 30px;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 30px;
		border-radius: 17px;
		margin-bottom: 20px;
		color: #454545;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}
</style>
