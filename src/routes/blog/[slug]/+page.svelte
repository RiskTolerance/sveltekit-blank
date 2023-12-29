<script lang="ts">
	export let data;
	console.log(data.post[0].body);
</script>

<a class="variant-outline btn" href="/blog">Return to posts</a>

<h1>{data.post[0].title}</h1>
<p>{data.post[0].text}</p>
