<script lang="ts">
  import { onMount } from 'svelte';
  import RacesList from './components/RacesList.svelte';
  import { FakeApi } from './infrastructure/data/inMemory/api/FakeApi';
  import RaceDetail from './components/RaceDetail.svelte';
  import Upper from './components/Upper.svelte';
  import BetSlip from './components/BetSlip.svelte';
  import type { Race } from './domain/entities/Race'; 

  let racesByCountry: Race[] = [];  // 🔹 Agrega el tipo explícitamente
  let selectedRace: Race | null = null;
  let bets = []; // 🔹 Array para almacenar las apuestas
  const fakeApi = new FakeApi();

  onMount(async () => {
    racesByCountry = await fakeApi.getAllRaces();
    if (racesByCountry.length > 0) {
      selectedRace = racesByCountry[0]; // 🔹 Si hay carreras, selecciona la primera
    }
  });

  function handleSelectRace(race: Race) {
    selectedRace = race;
  }

  function handleBetPlaced(event: CustomEvent) {
    bets = [...bets, event.detail]; // 🔹 Agrega la apuesta al array
  }

  function removeBet(betToRemove) {
    bets = bets.filter(bet => bet.id !== betToRemove.id);
  }
</script>

<div class="container">
  <RacesList {racesByCountry} onSelectRace={handleSelectRace} />

  <div class="race-section">
    <Upper />
    <RaceDetail {selectedRace} on:betPlaced={handleBetPlaced} />
  </div>

  <BetSlip {bets} {removeBet} />
</div>
