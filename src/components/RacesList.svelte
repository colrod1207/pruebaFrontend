<script>
  export let racesByCountry = [];
  export let onSelectRace = (race) => {};
</script>

<div class="races-list">
  {#each racesByCountry as countryData}
    <div class="races-list__country">
      <h2 class="races-list__country-name">
        <span class={"races-list__flag " + countryData.flag}></span>
        <span class="races-list__country-label">{countryData.country}</span>
        <span class="races-list__country-count">({countryData.upcomingRaces.length})</span>
      </h2>
      
      

      <div class="races-list__header">
        <span>Time</span>
        <span>Racetrack</span>
        <span>#</span>
      </div>

      {#each countryData.upcomingRaces as race}

      <button
          type="button"
          class="races-list__item"
          on:click={() => onSelectRace(race)}
        >
          <span class="races-list__time">{race.time} Min</span>
          <span class="races-list__name">{race.name}</span>
          <span class="races-list__number">{race.number}</span>

        </button>
      {/each}
    </div>
  {/each}
</div>
