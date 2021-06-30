<script lang="ts">
	import Background from "./components/Background.svelte";
import Bookmarks from "./components/Bookmarks.svelte";
	import OptionsOverlay from "./components/OptionsOverlay.svelte";
	import Toolbar from "./components/Toolbar.svelte";
import ToolbarBookmarks from "./components/ToolbarBookmarks.svelte";
</script>

<div class="layout">
	<Background />
	
	<Toolbar/>

	<OptionsOverlay />
</div>

<style lang="scss">
	.layout {
		width: 100%;
		height: 100%;
	}
</style>