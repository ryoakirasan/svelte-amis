<script>
  import Amis from './lib/amis/amis.svelte'
</script>


<Amis
  renderJson={{
    type: "page",
    title:"标题",
    body: {
      type: "form",
      mode: "horizontal",
      api: "/saveForm",
      body: [
        {
          label: "Name",
          type: "input-text",
          name: "name",
        },
        {
          label: "Email",
          type: "input-email",
          name: "email",
        },
      ],
    },
  }}
/>
