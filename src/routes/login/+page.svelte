<!-- routes/login/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="card flex w-[300px] flex-col space-y-4 p-5">
	<h1 class="text-2xl font-bold">Log In</h1>
	<form class="flex w-full flex-col space-y-4" method="post" use:enhance>
		<div>
			<label class="label" for="username">
				<span>Username</span>
				<input class="input" name="username" id="username" />
			</label>

			<label class="label" for="password">
				<span>Password</span>
				<input class="input" type="password" name="password" id="password" />
			</label>
		</div>

		<button class="input variant-filled btn cursor-pointer" type="submit" name="submit"
			>Log In
		</button>
	</form>
	<a class="variant-outline-secondary btn" href="/signup">Sign Up</a>
</div>
