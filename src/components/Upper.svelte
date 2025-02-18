<script>
  import { createEventDispatcher, onMount } from 'svelte';
  import { FakeApi } from '../infrastructure/data/inMemory/api/FakeApi';
  let nextRaces = [];
  const api = new FakeApi();
  const dispatch = createEventDispatcher()

  onMount(async () => {
    nextRaces = await api.getNext6Races();
  });

  function selectRace(race) {
    dispatch("selectRace", race); 
  }

</script>

<div class="upper">
  <h2 class="upper__title">Upcoming races</h2>

  <div class="upper__grid">
    {#each nextRaces as race, i}
      <button type="button" class="upper__item" on:click={() => selectRace(race)}>
        <span class={"races-list__flag " + race.flag}></span>
        <span class="upper__item-name">{race.name}</span>
        <span class="upper__item-time">{race.time} Min</span>
        <span class="upper__item-type">{race.type}</span>
      </button>
    {/each}
  </div>
</div>
