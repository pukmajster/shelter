<script lang="ts">
  import OptionsToggleButton from "./OptionsToggleButton.svelte";
  import ToolbarBookmarks from "./ToolbarBookmarks.svelte";
import ToolbarClock from "./ToolbarClock.svelte";

</script>

<div class="toolbar-container">
  <div class="toolbar"  >

    <div>
      <ToolbarClock />
    </div>
    <ToolbarBookmarks />
  
    <div class="right"  >
      <OptionsToggleButton />
    </div>
  </div>
</div>

<style lang="scss">

  .toolbar-container {
    display: flex;
    justify-content: center;

    padding: 8px 13px;

    backdrop-filter: blur(20px) saturate(160%);
    background-color: rgba(241, 241, 241, 0.514);
    background-color: rgba(255, 255, 255, 0.604);
    /* background-color: rgba(255, 255, 255, 0.445); */

    box-shadow: 0 0px 5px 2px rgba(26, 25, 25, 0.096);

    z-index: 9999999999999;
  }

  .toolbar {

    display: grid;
    grid-template-columns: 1fr auto 1fr;
    justify-content: space-between;

    flex: 1;
    /* max-width: 700px; */
  
  }

  .toolbar-title {

    display: flex;
    align-items: center;

    color: black;

    line-height: 1px;
    font-weight: 600;
  }

  .toolbar div {
    display: flex;
    align-items: center;

  }

  .right {
    display: flex;
    justify-content: flex-end
  }
</style>