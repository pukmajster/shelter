
<script lang="ts">
  import { bookmarks } from "../constants/config";
</script>

<div class="bookmarks  "  >
  {#each bookmarks as bookmark(bookmark.label)}
    <a class="bookmark" href="{bookmark.url}" target="_blank" >
      <img src={bookmark.svg} alt={bookmark.label} />
    </a>
  {/each}
</div>

<style lang="scss">
  .bookmarks {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
    gap: 5px;

  }

  img {
    width: 29px;
    height: 29px;

    transition: all 0.1s ease-in;
  }

  .bookmark {
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

      img {
        /* transform: scale(0.95); */
      }
    }
  }
</style>