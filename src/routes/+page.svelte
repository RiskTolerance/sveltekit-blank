<script lang="ts">
	import { enhance } from '$app/forms';
	import ProfileBadge from '$lib/components/ProfileBadge.svelte';
	import type { PageData } from './$types';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	export let data: PageData;
</script>

<LightSwitch />

<div class="flex items-center space-x-5">
	<ProfileBadge username={data.username}></ProfileBadge>
	<form method="post" action="?/logout" use:enhance>
		<button class="input variant-filled btn cursor-pointer" type="submit" name="submit"
			>Sign Out
		</button>
	</form>
</div>
<!-- <p>User id: {data.userId}</p> -->
