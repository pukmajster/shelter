<script lang="ts">
	import Background from "./components/Background.svelte";
	import OptionsOverlay from "./components/OptionsOverlay.svelte";
	import OptionsToggleButton from "./components/OptionsToggleButton.svelte";
	import Toolbar from "./components/Toolbar.svelte";
</script>

<div class="layout">
	<Toolbar/>
	<Background />

	<OptionsOverlay />
</div>

<style lang="scss">
	.layout {
		width: 100%;
		height: 100%;
	}
</style>