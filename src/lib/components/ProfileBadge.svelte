<script lang="ts">
	export let username: string | null = null;
	import { bulldog } from '$lib/svg/avatars';
	import { onMount } from 'svelte';
	let pfp: string | undefined;
	onMount(() => {
		pfp = bulldog('#ffb648', '#dde1e2', '#e94f3d');
	});
</script>

<div class="card flex h-[60px] w-fit items-center justify-center space-x-4 p-4">
	<!-- pfp placeholder -->
	<div class="flex h-[45px] w-[45px] items-center justify-center rounded-full">{@html pfp}</div>
	<div>{username}</div>
</div>
