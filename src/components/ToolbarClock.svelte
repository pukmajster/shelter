

<script lang="ts" >

  let time = new Date();
  setInterval( () => time = new Date(), 500 );
</script>

<div class="clock">
  <span class="time" >{time.toLocaleTimeString().split(':').slice(0, 2).join(':')}</span>
  <span class="date" >{time.toLocaleDateString().split(' ').slice(0, 3).join(' ')}</span>
</div>

<style>
  .clock {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-weight: 600;
  }
</style>