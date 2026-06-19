<script lang="ts">
  import { Eye, EyeClosed, Settings, X } from "lucide-svelte";
  import { profile, defaultProfile } from "./store.svelte";

  const defaultBaseUrl = defaultProfile.apiBaseUrl;

  let showApiKey = $state(false);
  function toggleShowApiKey() {
    showApiKey = !showApiKey;
  }

  let isApi = $derived(profile.executionPlace === "api");
  let isDefaultBaseUrl = $derived(profile.apiBaseUrl === defaultBaseUrl);

  function reset() {
    if (!confirm("Are you sure you want to reset the API settings?")) return;
    profile.apiBaseUrl = defaultBaseUrl;
    profile.apiKey = "";
  }
</script>

<fieldset class="fieldset w-full">
  <legend class="fieldset-legend">Execution place</legend>

  <div class="flex items-center space-x-2">
    <select class="select w-full" bind:value={profile.executionPlace}>
      <option value="browser">Browser</option>
      <option value="api">API</option>
    </select>

    {#if isApi}
      <div class="tooltip tooltip-left inline-block" data-tip="API settings">
        <button
          class="btn btn-soft btn-square"
          onclick={() => (window as any).api_settings.showModal()}
        >
          <Settings class="size-5" />
        </button>
      </div>
    {/if}
  </div>

  <span class="fieldset-label">
    Select where the generation will occur. API is only available for
    self-hosted instances.
  </span>
</fieldset>

<dialog id="api_settings" class="modal">
  <div class="modal-box">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">
        <X />
      </button>
    </form>

    <h3 class="text-lg font-bold">API Settings</h3>

    <p class="pt-2">
      Include an
      <a
        href="https://platform.openai.com/docs/guides/text-to-speech?lang=curl"
        target="_blank"
        class="link"
      >
        OpenAI compatible
      </a>
      Base URL and API Key.
    </p>

    <p class="pt-2 font-semibold">
      This setting is saved in your browser's localStorage and is used for all
      profiles.
    </p>

    <label class="mt-4 block flex-grow">
      <span class="text-xs font-semibold">Base URL</span>
      <input
        type="text"
        class="input w-full"
        bind:value={profile.apiBaseUrl}
        placeholder="Enter an OpenAI compatible API Base URL"
      />
      {#if isDefaultBaseUrl}
        <span class="block pt-1 text-xs font-semibold">
          <span class="block">
            The default Base URL is only available for self-hosted instances.
          </span>
          <a
            href="https://github.com/eduardolat/kokoro-web"
            target="_blank"
            class="link"
          >
            How to self-host?
          </a>
        </span>
      {/if}
    </label>

    <label class="mt-4 block flex-grow">
      <span class="text-xs font-semibold">API Key</span>
      <div class="mt-1 flex items-center space-x-2">
        <input
          type={showApiKey ? "text" : "password"}
          class="input w-full"
          bind:value={profile.apiKey}
          placeholder="Enter your API key"
        />

        <div
          class="tooltip tooltip-left inline-block"
          data-tip={showApiKey ? "Hide" : "Show"}
        >
          <button class="btn btn-soft btn-square" onclick={toggleShowApiKey}>
            {#if showApiKey}
              <Eye class="size-5" />
            {:else}
              <EyeClosed class="size-5" />
            {/if}
          </button>
        </div>
      </div>
    </label>

    <div class="mt-8 flex w-full justify-between space-x-2">
      <button class="btn btn-ghost" onclick={reset}>Reset</button>
      <form method="dialog">
        <button class="btn btn-primary">OK</button>
      </form>
    </div>
  </div>
  <form method="dialog" class="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
