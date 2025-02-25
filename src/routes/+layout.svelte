<script lang="ts">
  import "../app.css";
  import { fade } from "svelte/transition";
  import ThemeSelect from "$lib/client/components/ThemeSelect.svelte";
  import { ExternalLink, Menu, X, Github } from "lucide-svelte";
  import type { LayoutProps } from "./$types";
  import { onMount } from "svelte";
  import umami from "$lib/client/umami";

  let { children }: LayoutProps = $props();

  let isOpen = $state(false);

  onMount(() => {
    umami.loadScript();
    umami.identify({ hostname: window.location.hostname });
  });
</script>

<div class="bg-base-100 h-screen w-screen overflow-x-hidden overflow-y-auto">
  <div class="mx-auto w-full overflow-hidden md:max-w-7xl">
    <header
      class="border-base-content/10 flex w-full items-center justify-between border-b p-4"
    >
      <div class="flex items-center space-x-2">
        <img
          src="/logo.png"
          alt="Kokoro Web Logo"
          class="size-[40px] rounded-full shadow-sm md:size-[50px]"
        />
        <div class="text-nowrap">
          <h1 class="text-xl font-bold md:text-3xl">Kokoro Web</h1>
          <h2 class="text-sm font-semibold md:text-base">
            Free online voice generator
          </h2>
        </div>
      </div>
      <nav class="hidden md:flex md:items-center md:justify-end">
        <a
          href="https://huggingface.co/hexgrad/Kokoro-82M"
          target="_blank"
          class="btn btn-ghost"
          data-umami-event="click-model"
        >
          <ExternalLink class="size-[16px]" />
          <span>Model 🤗</span>
        </a>
        <a
          href="/api/v1/index.html"
          target="_blank"
          class="btn btn-ghost"
          data-umami-event="click-api-docs"
        >
          <ExternalLink class="size-[16px]" />
          <span>API Docs</span>
        </a>
        <a
          href="https://github.com/eduardolat/kokoro-web"
          target="_blank"
          class="btn btn-ghost"
          data-umami-event="click-star-on-github"
        >
          <Github class="size-[16px]" />
          <span>Star on GitHub</span>
          <img
            alt="GitHub Repo stars"
            src="https://img.shields.io/github/stars/eduardolat/kokoro-web?style=plastic&label=%20"
          />
        </a>
        <div class="ml-2">
          <ThemeSelect />
        </div>
      </nav>
      <button
        class="btn btn-ghost btn-square md:hidden"
        onclick={() => (isOpen = !isOpen)}
      >
        <Menu class="size-[24px]" />
      </button>
    </header>

    {#if isOpen}
      <nav
        class="
          bg-base-200 fixed top-0 z-50 h-screen w-screen space-y-2 overflow-x-hidden
          overflow-y-auto p-4 md:hidden
        "
        transition:fade={{ duration: 100 }}
      >
        <div class="flex justify-end">
          <button
            class="btn btn-ghost btn-square md:hidden"
            onclick={() => (isOpen = !isOpen)}
          >
            <X class="size-[24px]" />
          </button>
        </div>

        <a
          href="https://huggingface.co/hexgrad/Kokoro-82M"
          target="_blank"
          class="btn btn-soft flex w-full items-center justify-start space-x-1"
          data-umami-event="click-model"
        >
          <ExternalLink class="size-[16px]" />
          <span>Model 🤗</span>
        </a>
        <a
          href="/api/v1/index.html"
          target="_blank"
          class="btn btn-soft flex w-full items-center justify-start space-x-1"
          data-umami-event="click-api-docs"
        >
          <ExternalLink class="size-[16px]" />
          <span>API Docs</span>
        </a>
        <a
          href="https://github.com/eduardolat/kokoro-web"
          target="_blank"
          class="btn btn-soft flex w-full items-center justify-start space-x-1"
          data-umami-event="click-star-on-github"
        >
          <Github class="size-[16px]" />
          <span>Star on GitHub</span>
          <img
            alt="GitHub Repo stars"
            src="https://img.shields.io/github/stars/eduardolat/kokoro-web?style=plastic&label=%20"
          />
        </a>
        <ThemeSelect class="w-full" />
      </nav>
    {/if}

    <main class="mb-[100px] w-full px-4 pt-4">
      {@render children()}
    </main>
  </div>
</div>
