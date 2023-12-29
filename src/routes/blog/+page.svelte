<script lang="ts">
	export let data;
</script>

<h1>Blog Posts:</h1>
<div class="flex w-1/3 flex-col space-y-4">
	{#each data.posts as item, i}
		<a class="variant-filled btn" href="/blog/{item.title}">{item.title}</a>
	{/each}
</div>
