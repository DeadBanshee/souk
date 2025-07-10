<template>
<div
  class="relative flex min-h-full w-full max-w-[20rem] flex-col rounded-lg bg-slate-800 bg-clip-border p-2  text-white shadow-xl shadow-blue-gray-900/5">

  <div class="p-2 mb-2">
    <h5 class="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 cursor-default hover:text-red-500 transition-all">
      TrackForge
    </h5>
  </div>

  <nav class="flex min-w-[240px] flex-col space-y-4 gap-1 p-4 font-sans text-base font-normal text-blue-gray-700">

    <div role="button" @click="router.push('/home')" class="font-bold hover:translate-x-2 hover:text-red-500 transition-all">
        Home
    </div>

    <div role="button" @click="router.push('/tasks')" class="font-bold hover:translate-x-2 hover:text-red-500 transition-all">
        Tasks
    </div>

    <div role="button" @click="router.push('/dashboard')" class="font-bold hover:translate-x-2 hover:text-red-500 transition-all">
        Dashboard
    </div>

    <div class="absolute bottom-0 flex min-w-[240px] flex-col space-y-4 gap-1 p-4 font-sans text-base font-normal text-blue-gray-700">
      <div role="button" @click="router.push('/'), authStore.logout()" class="bg-slate-700 rounded-lg p-2 shadow-xl text-center font-bold hover:-translate-y-2 hover:text-red-500 transition-all">
          Log Out
      </div>
    </div>


  </nav>
</div>

</template>