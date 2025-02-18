<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import { FakeApi } from "../infrastructure/data/inMemory/api/FakeApi";
  import type { Race } from "../domain/entities/Race";

  export let selectedRace: Race | null = null;
  export let racesByCountry: Race[] = [];

  const api = new FakeApi();
  const dispatch = createEventDispatcher();

  onMount(() => {
    if (!selectedRace && racesByCountry.length > 0) {
      selectedRace = racesByCountry[0];
    }
  });

  async function handleBet(type: string, horse: any, event: KeyboardEvent) {
    if (event.key !== "Enter") return; 

    const inputElement = event.target as HTMLInputElement;
    const amount = inputElement.value.trim();

    if (!selectedRace || amount === "" || isNaN(Number(amount)) || Number(amount) <= 0) return;

    const betData = {
      id: `${selectedRace.name}-${horse.id}-${type}`,
      type,
      race: `${selectedRace.country} - ${selectedRace.name}`,
      number: horse.id,
      horse: horse.name,
      amount: Number(amount),
    };

    await api.placeBet(betData);

    dispatch("betPlaced", betData);

    inputElement.value = "";
  }
</script>

<div class="race-detail">
  {#if selectedRace}
    <div class="race-detail__header">
      <h3 class="race-detail__title">
        {selectedRace.country} {selectedRace.name}
      </h3>
    </div>

    <div class="race-detail__table-header">
      <span class="race-detail__cell">Win</span>
      <span class="race-detail__cell">Place</span>
      <span class="race-detail__cell">NP</span>
      <span class="race-detail__cell">Caballo</span>
      <span class="race-detail__cell">Montador</span>
      <span class="race-detail__cell">Entrenador</span>
      <span class="race-detail__cell">Peso</span>
      <span class="race-detail__cell">Med.</span>
      <span class="race-detail__cell">M/L</span>
    </div>

    <div class="race-detail__table">
      {#each selectedRace?.participantes || [] as horse, i}
        <div class="race-detail__row">
          <input 
            type="text" 
            class="race-detail__input" 
            placeholder="Win"
            on:keydown={(e) => handleBet('Win', horse, e)}
          />

          <input 
            type="text" 
            class="race-detail__input" 
            placeholder="Place"
            on:keydown={(e) => handleBet('Place', horse, e)}
          />

          <span class="race-detail__cell">{i + 1}</span>
          <span class="race-detail__cell">{horse.name}</span>
          <span class="race-detail__cell">{horse.trainer}</span>
          <span class="race-detail__cell">{horse.jockey}</span>
          <span class="race-detail__cell">LB: {horse.weight}</span>
          <span class="race-detail__cell">{horse.odds}</span>
          <span class="race-detail__cell">{horse.ml}</span>
        </div>
      {/each}
    </div>
  {:else}
    {#if racesByCountry.length > 0}
      <div class="race-detail__header">
        <h3 class="race-detail__title">
          {racesByCountry[0].country} {racesByCountry[0].name}
        </h3>
      </div>

      <div class="race-detail__table">
        {#each racesByCountry[0].participantes || [] as horse, i}
          <div class="race-detail__row">
            <input 
              type="text" 
              class="race-detail__input" 
              placeholder="Win"
              on:keydown={(e) => handleBet('Win', horse, e)}
            />

            <input 
              type="text" 
              class="race-detail__input" 
              placeholder="Place"
              on:keydown={(e) => handleBet('Place', horse, e)}
            />

            <span class="race-detail__cell">{i + 1}</span>
            <span class="race-detail__cell">{horse.name}</span>
            <span class="race-detail__cell">{horse.trainer}</span>
            <span class="race-detail__cell">{horse.jockey}</span>
            <span class="race-detail__cell">LB: {horse.weight}</span>
            <span class="race-detail__cell">{horse.odds}</span>
            <span class="race-detail__cell">{horse.ml}</span>
          </div>
        {/each}
      </div>
    {/if}
  {/if}
</div>
