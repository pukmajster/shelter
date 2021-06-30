<script lang="ts">
  export let svg: string;
  // export let buttonProps: svelte.JSX.HTMLAttributes<HTMLButtonElement>
  export let action: () => any
</script>

<button on:click={action} class="button">
  <img src={svg} alt={'options'} />
</button>

<style lang="scss">

  img {
    width: 29px;
    height: 29px;
  }


  button {

    background-color: transparent;
    outline: none;
    box-shadow: none;
    border: none;
    display: grid;
    place-items: center;

    position: relative;

    padding: .5em .6em;

    border-radius: 5px;;

    transition: all .2s ease;
    will-change: background-color;

		text-decoration: none;
    cursor: pointer;
    overflow: hidden;

    /* filter: invert(100%); */
    &:hover {
      background-color: var(--panel-hover);
      box-shadow: 0 1px 5px 2px rgba(26, 25, 25, 0.096);
    }
  }
</style>
