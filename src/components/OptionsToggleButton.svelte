<script lang="ts" >
  import SettingsAdjust24 from "carbon-icons-svelte/lib/SettingsAdjust24";
  import { svgs } from "../constants/config";
  import { toggleShowOptionsOverlay } from "../stores/optionsStore";
  import IconButton from "./IconButton.svelte";
</script>

<IconButton 
  action={() => toggleShowOptionsOverlay()}
  svg={svgs.options} 
>
  
</IconButton>

<style>
  
</style>