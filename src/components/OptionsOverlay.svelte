<script lang="ts">
  import { bShowOptionsOverlay } from "../stores/optionsStore";
  import OptionsBackgrounds from "./OptionsBackgrounds.svelte";
  import OptionsToolbar from "./OptionsToolbar.svelte";

  let menus = [
    'about',
    'toolbar',
    'background'
  ]

  let menu = 'about';
</script>

<div class="overlay" class:open={$bShowOptionsOverlay} >
  <div class="nav">
    {#each menus as menu}
      <button>{menu}</button>
    {/each}
  </div>

  <div class="content">
    {#if menu == 'about' }
      <div></div>
    {:else if menu == 'toolbar'}
      <OptionsToolbar />
    <!-- {:else if menu == 'bookmarks'} -->
    {:else if menu == 'background'}
      <OptionsBackgrounds />
    {/if}
  </div>
</div>

<style lang="scss">
  .overlay {
    position: fixed;
    top: 60px;
    right: 0;
    left: 0;
    bottom: 0;
    
    display: grid;
    grid-template-columns: 300px 1fr;
    
    display: flex;
    flex-direction: column;

    background-color: rgba(0, 0, 0, 0.295);

    backdrop-filter: blur(35px);
    opacity: 0;
    pointer-events: none;
    transition: all 0.2s ease;

    &.open {
      opacity: 1;
      pointer-events: all;
    }

  }

  .nav {
    display: flex;
    justify-content: center;

    padding-top: 1em;

    z-index: 444;
  }

  button {
    background-color: transparent;
    border: none;
    appearance: none;
    outline: none;
    box-shadow: none;

    color: white;
    padding: 12px 24px;

    cursor: pointer;
    border-radius: 4px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.13);
    }
  }
</style>