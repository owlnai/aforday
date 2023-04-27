<script setup>
import VueCountdown from '@chenfengyuan/vue-countdown'

const now = new Date()
const newYear = new Date('Mon May 08 2023 17:30:00 GMT+0000')
const time = ref(newYear - now)
</script>

<template>
  <div
    class="min-h-screen px-4 sm:px-0 bg-gray-900 text-zinc-100 scroll-smooth text-center items-center justify-center font-sans flex flex-col"
  >
    <h1 class="text-2xl font-semibold text-[var(--arcoiris)]">
      &gt;"Hola Mundo" day - Charla de Afor
    </h1>
    <p class="text-xl">
      Abrazando al fracaso | Afor Digital
    </p>
    <NuxtLink to="https://twitch.tv/mouredev" class="underline text-[var(--arcoiris)] underline-offset-3 text-lg font-semibold">
      t.tv/mouredev
    </NuxtLink>
    <ClientOnly>
      <VueCountdown v-slot="{ days, hours, minutes, seconds }" :time="time" class="inline-block  text-[var(--arcoiris)] bg-black my-4 font-mono px-3 py-2 border-2 border-[var(--arcoiris)] text-4xl">
        {{ days }}:{{ hours }}:{{ minutes }}:{{ seconds }}
      </VueCountdown>
    </ClientOnly>
    <video src="/contador.mp4" controls class="h-64 my-4 rounded-lg" />
    <section>
      <h2 class="sr-only">
        Zonas horarias
      </h2>
      <h3 class="text-xl font-bold afordiris text-[var(--arcoiris)]">
        11:30 AM
      </h3>
      <ul class="flex gap-3 justify-center mb-4">
        <li>Colombia 🇨🇴</li>
        <li>Peru 🇵🇪</li>
        <li>Ecuador 🇪🇨</li>
        <li>Guatemala 🇬🇹</li>
        <li>Honduras 🇭🇳</li>
        <li>Nicaragua 🇳🇮</li>
        <li>Costa Rica 🇨🇷</li>
        <li>El Salvador 🇸🇻</li>
      </ul>

      <h3 class="text-xl font-bold  text-[var(--arcoiris)]">
        12:30 PM
      </h3>
      <ul class="flex gap-3 justify-center mb-4">
        <li>Mexico 🇲🇽</li>
        <li>Venezuela 🇻🇪</li>
        <li>Panama 🇵🇦</li>
        <li>Paraguay 🇵🇾</li>
        <li>Bolivia 🇧🇴</li>
      </ul>

      <h3 class="text-xl font-bold text-[var(--arcoiris)]">
        1:30 PM
      </h3>
      <ul class="flex gap-3 justify-center mb-4">
        <li>Argentina 🇦🇷</li>
        <li>Chile 🇨🇱</li>
        <li>Cuba 🇨🇺</li>
        <li>Dominican Republic 🇩🇴</li>
        <li>Puerto Rico 🇵🇷</li>
        <li>Uruguay 🇺🇾</li>
      </ul>

      <h3 class="text-xl font-bold  text-[var(--arcoiris)]">
        7:30 PM
      </h3>
      <ul>
        <li>Spain 🇪🇸</li>
      </ul>
    </section>
    <footer>
      <img src="/afordines.gif" class="h-24" alt="Hamsters bailando">
    </footer>
  </div>
</template>

<style>
:root {
  --arcoiris: #ff9400;
      animation: aforiris 40s linear infinite;
}

@keyframes aforiris {
    0% {
        --arcoiris: #00a98e;

    }

    1.25% {
        --arcoiris: #00a996;

    }

    2.5% {
        --arcoiris: #00a99f;

    }

    3.75% {
        --arcoiris: #00a9a7;

    }

    5% {
        --arcoiris: #00a9b0;

    }

    6.25% {
        --arcoiris: #00a9b8;

    }

    7.5% {
        --arcoiris: #00a9c0;

    }

    8.75% {
        --arcoiris: #00a8c7;

    }

    10% {
        --arcoiris: #00a8cf;

    }

    11.25% {
        --arcoiris: #00a7d5;

    }

    12.5% {
        --arcoiris: #00a6dc;

    }

    13.75% {
        --arcoiris: #00a6e2;

    }

    15% {
        --arcoiris: #00a4e7;

    }

    16.25% {
        --arcoiris: #00a3ec;

    }

    17.5% {
        --arcoiris: #00a2f1;

    }

    18.75% {
        --arcoiris: #00a0f4;

    }

    20% {
        --arcoiris: #009ff7;

    }

    21.25% {
        --arcoiris: #009dfa;

    }

    22.5% {
        --arcoiris: #009bfc;

    }

    23.75% {
        --arcoiris: #0098fd;

    }

    25% {
        --arcoiris: #0096fd;

    }

    26.25% {
        --arcoiris: #0093fd;

    }

    27.5% {
        --arcoiris: #2e90fc;

    }

    28.75% {
        --arcoiris: #4d8dfa;

    }

    30% {
        --arcoiris: #638af8;

    }

    31.25% {
        --arcoiris: #7587f5;

    }

    32.5% {
        --arcoiris: #8583f1;

    }

    33.75% {
        --arcoiris: #9280ed;

    }

    35% {
        --arcoiris: #9f7ce9;

    }

    36.25% {
        --arcoiris: #aa78e3;

    }

    37.5% {
        --arcoiris: #b574dd;

    }

    38.75% {
        --arcoiris: #be71d7;

    }

    40% {
        --arcoiris: #c76dd1;

    }

    41.25% {
        --arcoiris: #cf69c9;

    }

    42.5% {
        --arcoiris: #d566c2;

    }

    43.75% {
        --arcoiris: #dc63ba;

    }

    45% {
        --arcoiris: #e160b3;

    }

    46.25% {
        --arcoiris: #e65eab;

    }

    47.5% {
        --arcoiris: #e95ca2;

    }

    48.75% {
        --arcoiris: #ed5a9a;

    }

    50% {
        --arcoiris: #ef5992;

    }

    51.25% {
        --arcoiris: #f15989;

    }

    52.5% {
        --arcoiris: #f25981;

    }

    53.75% {
        --arcoiris: #f25a79;

    }

    55% {
        --arcoiris: #f25c71;

    }

    56.25% {
        --arcoiris: #f15e69;

    }

    57.5% {
        --arcoiris: #ef6061;

    }

    58.75% {
        --arcoiris: #ed635a;

    }

    60% {
        --arcoiris: #eb6552;

    }

    61.25% {
        --arcoiris: #e8694b;

    }

    62.5% {
        --arcoiris: #e46c44;

    }

    63.75% {
        --arcoiris: #e06f3d;

    }

    65% {
        --arcoiris: #db7336;

    }

    66.25% {
        --arcoiris: #d77630;

    }

    67.5% {
        --arcoiris: #d17a2a;

    }

    68.75% {
        --arcoiris: #cc7d24;

    }

    70% {
        --arcoiris: #c6811e;

    }

    71.25% {
        --arcoiris: #bf8418;

    }

    72.5% {
        --arcoiris: #b98713;

    }

    73.75% {
        --arcoiris: #b28a0f;

    }

    75% {
        --arcoiris: #ab8d0c;

    }

    76.25% {
        --arcoiris: #a3900b;

    }

    77.5% {
        --arcoiris: #9c920d;

    }

    78.75% {
        --arcoiris: #949510;

    }

    80% {
        --arcoiris: #8b9715;

    }

    81.25% {
        --arcoiris: #83991b;

    }

    82.5% {
        --arcoiris: #7a9b21;

    }

    83.75% {
        --arcoiris: #719d27;

    }

    85% {
        --arcoiris: #679e2e;

    }

    86.25% {
        --arcoiris: #5da035;

    }

    87.5% {
        --arcoiris: #51a13c;

    }

    88.75% {
        --arcoiris: #44a244;
    }

    90% {
        --arcoiris: #34a44b;
    }

    91.25% {
        --arcoiris: #1ba553;
    }

    92.5% {
        --arcoiris: #00a65b;
    }

    93.75% {
        --arcoiris: #00a663;
    }

    95% {
        --arcoiris: #00a76c;
    }

    96.25% {
        --arcoiris: #00a874;
    }

    97.5% {
        --arcoiris: #00a87d;
    }

    98.75% {
        --arcoiris: #00a985;
    }

    to {
        --arcoiris: #00a98e;
    }
}
</style>
