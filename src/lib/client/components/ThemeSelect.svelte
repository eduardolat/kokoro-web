<!-- This uses the following library to handle theme changes -->
<!-- https://github.com/saadeghi/theme-change -->

<script lang="ts">
  interface Props {
    class?: string;
  }
  let { class: className = "" }: Props = $props();
</script>

<label class="select {className}">
  <span class="label">Theme</span>
  <select data-choose-theme>
    <option value="">System 🖥️</option>
    <option value="light">Light ☀️</option>
    <option value="dark">Dark 🌑</option>
    <option value="dracula">Dracula 🧛</option>
  </select>
</label>
