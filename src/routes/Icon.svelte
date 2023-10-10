<script>
	import Music from 'carbon-icons-svelte/lib/Music.svelte';
	import Application from 'carbon-icons-svelte/lib/Application.svelte';
	import NoImage from 'carbon-icons-svelte/lib/NoImage.svelte';
	/**
	 * @type {string}
	 */
	export let iconName;
</script>

<icon>
	{#if iconName === 'music'}
		<Music />
	{:else if iconName === 'app'}
		<Application />
	{:else}
		<NoImage />
	{/if}
</icon>
