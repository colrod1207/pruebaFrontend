<script lang="ts">
  import { onMount } from "svelte";
  import RacesList from "./components/RacesList.svelte";
  import Upper from "./components/Upper.svelte";
  import RaceDetail from "./components/RaceDetail.svelte";
  import BetSlip from "./components/BetSlip.svelte";
  import { FakeApi } from "./infrastructure/data/inMemory/api/FakeApi";
  import type { Race } from "./domain/entities/Race"; 

  const api = new FakeApi();
  let racesByCountry: { country: string; flag: string; upcomingRaces: Race[] }[] = [];  
  let selectedRace: Race | null = null;
  let bets = [];

  onMount(async () => {
    racesByCountry = await api.getAllRaces();
    if (racesByCountry.length > 0 && racesByCountry[0].upcomingRaces.length > 0) {
      selectedRace = racesByCountry[0].upcomingRaces[0]; // ✅ Selecciona una carrera por defecto
    }
  });

  function handleSelectRace(event: CustomEvent | Race) {
    if (event instanceof CustomEvent) {
      selectedRace = event.detail; // ✅ Caso de `Upper.svelte`
    } else {
      selectedRace = event; // ✅ Caso de `RacesList.svelte`
    }
  }

  function handleBetPlaced(event: CustomEvent) {
    bets = [...bets, event.detail];
  }

  function removeBet(betToRemove) {
    bets = bets.filter(bet => bet.id !== betToRemove.id);
  }
</script>

<div class="container">
  <RacesList {racesByCountry} onSelectRace={handleSelectRace} /> <!-- ✅ Ahora RacesList también afecta RaceDetail -->

  <div class="race-section">
    <Upper on:selectRace={handleSelectRace} /> <!-- ✅ Ahora ambos afectan RaceDetail -->
    <RaceDetail {selectedRace} on:betPlaced={handleBetPlaced} />
  </div>

  <BetSlip {bets} {removeBet} />
</div>
